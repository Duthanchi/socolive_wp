import CryptoJS from 'crypto-js'
import httpProto from './proto/fy_pb'

CryptoJS.enc.u8array = {
  stringify: (wordArray) => {
    // Shortcuts
    var words = wordArray.words;
    var sigBytes = wordArray.sigBytes;
    // Convert
    if (sigBytes > 0) {

      var u8 = new Uint8Array(sigBytes);
      for (var i = 0; i < sigBytes; i++) {
        var byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        u8[i] = byte;
      }
      return u8;
    }
  },
  parse: (u8arr) => {
    // Shortcut
    var len = u8arr.length;
    // Convert
    var words = [];
    for (var i = 0; i < len; i++) {
      words[i >>> 2] |= (u8arr[i] & 0xff) << (24 - (i % 4) * 8);
    }
    return CryptoJS.lib.WordArray.create(words, len);
  }
}

//转换为Uint8Array类型
const stringToUint8Array = (str) => {
  let uint8Array = new TextEncoder("utf-8").encode(str);
  return uint8Array;
}

const uint8ArrayToString = (fileData) => {
  return new TextDecoder("utf-8").decode(fileData)
}

// 加密方法 传入明文的uint8数组
const getAesString = (array, shareKey) => {
  var key = CryptoJS.enc.Latin1.parse(shareKey)
  var acontent = array
  // 将明文转换成WordArray
  var contentWA = CryptoJS.enc.u8array.parse(acontent)
  // 插件要求明文是base64格式
  // var dcBase64String = contentWA.toString(CryptoJS.enc.Base64)
  // 加密 选定mode是CFB类型，无偏移量
  var encrypted = CryptoJS.AES.encrypt(contentWA, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  // 将密文转回uint8数组
  var bv = CryptoJS.enc.u8array.stringify(encrypted.ciphertext)
  return bv
}

const getDAesString = (array, shareKey) => {
  var key = CryptoJS.enc.Latin1.parse(shareKey)
  var acontent = array
  // 将密文转换成WordArray
  var contentWA = CryptoJS.enc.u8array.parse(acontent)
  // 插件要求密文是base64格式
  var dcBase64String = contentWA.toString(CryptoJS.enc.Base64)
  // 解密 选定mode是CFB类型，无偏移量
  var decrypted = CryptoJS.AES.decrypt(dcBase64String, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  // 将解密后的明文转回uint8数组
  var bv = CryptoJS.enc.u8array.stringify(decrypted)
  return bv
}

const initByte = (sessionInfo, params, commonKey) => {
    const fyClient = new httpProto.FY_CLIENT()
    const commonReq = new httpProto.COMMON_REQ()
    const clientInfo = new httpProto.CLIENT_INFO()
    clientInfo.setSessionId(sessionInfo.sessionId)
    clientInfo.setSeq(sessionInfo.seq)
    clientInfo.setAppVer(sessionInfo.appVer)
    clientInfo.setPackageCode(sessionInfo.packageCode)
    clientInfo.setPlat(sessionInfo.plat)
    clientInfo.setLanguage(sessionInfo.language)
    commonReq.setClientInfo(clientInfo)
    commonReq.setParam(stringToUint8Array(params))
    fyClient.setCommonReq(commonReq)
    var sendMsg = getAesString(fyClient.serializeBinary(), commonKey)
    var length = sendMsg.length
    var buf = new ArrayBuffer(6 + length) //定义一个6字节的内存区域
    var dv = new DataView(buf)
    dv.setInt8(0, 0, false)
    dv.setInt8(1, -96, false)
    // dv.setUint16(0, 3328, false)
    dv.setUint32(2, length, false)
    for (var i = 0; i < length; i++) {
      dv.setUint8(i + 6, sendMsg[i])
  }
  
  console.log("buf::::", buf);
  debugger;
  return buf
}

const initJson = (result, commonKey) => {
  return new Promise(resolve => {
    debugger;
    // const reader = new FileReader()
    if (!result) return false
    const readerC = new FileReader()
    const content = result.slice(6)
    readerC.readAsArrayBuffer(content)
    readerC.onload = (e) => {
      const contentC = getDAesString(new Uint8Array(readerC.result), commonKey) //内容就在这里
      const data = httpProto.FY_CLIENT.deserializeBinary(contentC)
      const res = data.getCommonResp()
      const commonResult = {
        code: res.getCommonResult().getErrCode(),
        meg: res.getCommonResult().getErrMsg(),
        seq: res.getCommonResult().getSeq(),
        new_session_id: res.getCommonResult().getNewSessionId()
      }
      const dataJson = res.getResult() ? JSON.parse(uint8ArrayToString(res.getResult())) : res.getResult()
      const myRes = {
        commonResult: commonResult,
        result: dataJson
      }
      resolve(myRes)
    }
  })
}

export default {
  initByte,
  initJson,
  getAesString,
  getDAesString,
  uint8ArrayToString,
  stringToUint8Array
}

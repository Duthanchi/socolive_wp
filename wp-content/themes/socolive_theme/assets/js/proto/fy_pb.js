/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.http.CLIENT_INFO', null, global);
goog.exportSymbol('proto.http.COMMON_REQ', null, global);
goog.exportSymbol('proto.http.COMMON_RESP', null, global);
goog.exportSymbol('proto.http.COMMON_RESULT', null, global);
goog.exportSymbol('proto.http.FY_CLIENT', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.http.FY_CLIENT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.http.FY_CLIENT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.http.FY_CLIENT.displayName = 'proto.http.FY_CLIENT';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.http.FY_CLIENT.prototype.toObject = function(opt_includeInstance) {
  return proto.http.FY_CLIENT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.http.FY_CLIENT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.FY_CLIENT.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonReq: (f = msg.getCommonReq()) && proto.http.COMMON_REQ.toObject(includeInstance, f),
    commonResp: (f = msg.getCommonResp()) && proto.http.COMMON_RESP.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.http.FY_CLIENT}
 */
proto.http.FY_CLIENT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.http.FY_CLIENT;
  return proto.http.FY_CLIENT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.http.FY_CLIENT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.http.FY_CLIENT}
 */
proto.http.FY_CLIENT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.http.COMMON_REQ;
      reader.readMessage(value,proto.http.COMMON_REQ.deserializeBinaryFromReader);
      msg.setCommonReq(value);
      break;
    case 2:
      var value = new proto.http.COMMON_RESP;
      reader.readMessage(value,proto.http.COMMON_RESP.deserializeBinaryFromReader);
      msg.setCommonResp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.http.FY_CLIENT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.http.FY_CLIENT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.http.FY_CLIENT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.FY_CLIENT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.http.COMMON_REQ.serializeBinaryToWriter
    );
  }
  f = message.getCommonResp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.http.COMMON_RESP.serializeBinaryToWriter
    );
  }
};


/**
 * optional COMMON_REQ common_req = 1;
 * @return {?proto.http.COMMON_REQ}
 */
proto.http.FY_CLIENT.prototype.getCommonReq = function() {
  return /** @type{?proto.http.COMMON_REQ} */ (
    jspb.Message.getWrapperField(this, proto.http.COMMON_REQ, 1));
};


/** @param {?proto.http.COMMON_REQ|undefined} value */
proto.http.FY_CLIENT.prototype.setCommonReq = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.http.FY_CLIENT.prototype.clearCommonReq = function() {
  this.setCommonReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.http.FY_CLIENT.prototype.hasCommonReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional COMMON_RESP common_resp = 2;
 * @return {?proto.http.COMMON_RESP}
 */
proto.http.FY_CLIENT.prototype.getCommonResp = function() {
  return /** @type{?proto.http.COMMON_RESP} */ (
    jspb.Message.getWrapperField(this, proto.http.COMMON_RESP, 2));
};


/** @param {?proto.http.COMMON_RESP|undefined} value */
proto.http.FY_CLIENT.prototype.setCommonResp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.http.FY_CLIENT.prototype.clearCommonResp = function() {
  this.setCommonResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.http.FY_CLIENT.prototype.hasCommonResp = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.http.CLIENT_INFO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.http.CLIENT_INFO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.http.CLIENT_INFO.displayName = 'proto.http.CLIENT_INFO';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.http.CLIENT_INFO.prototype.toObject = function(opt_includeInstance) {
  return proto.http.CLIENT_INFO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.http.CLIENT_INFO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.CLIENT_INFO.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 2, 0),
    appVer: jspb.Message.getFieldWithDefault(msg, 3, 0),
    packageCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    plat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    language: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.http.CLIENT_INFO}
 */
proto.http.CLIENT_INFO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.http.CLIENT_INFO;
  return proto.http.CLIENT_INFO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.http.CLIENT_INFO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.http.CLIENT_INFO}
 */
proto.http.CLIENT_INFO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAppVer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPackageCode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.http.CLIENT_INFO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.http.CLIENT_INFO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.http.CLIENT_INFO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.CLIENT_INFO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAppVer();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPackageCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPlat();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.http.CLIENT_INFO.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.http.CLIENT_INFO.prototype.setSessionId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 seq = 2;
 * @return {number}
 */
proto.http.CLIENT_INFO.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.http.CLIENT_INFO.prototype.setSeq = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 app_ver = 3;
 * @return {number}
 */
proto.http.CLIENT_INFO.prototype.getAppVer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.http.CLIENT_INFO.prototype.setAppVer = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 package_code = 4;
 * @return {number}
 */
proto.http.CLIENT_INFO.prototype.getPackageCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.http.CLIENT_INFO.prototype.setPackageCode = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 plat = 5;
 * @return {number}
 */
proto.http.CLIENT_INFO.prototype.getPlat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.http.CLIENT_INFO.prototype.setPlat = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 language = 6;
 * @return {number}
 */
proto.http.CLIENT_INFO.prototype.getLanguage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.http.CLIENT_INFO.prototype.setLanguage = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.http.COMMON_RESULT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.http.COMMON_RESULT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.http.COMMON_RESULT.displayName = 'proto.http.COMMON_RESULT';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.http.COMMON_RESULT.prototype.toObject = function(opt_includeInstance) {
  return proto.http.COMMON_RESULT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.http.COMMON_RESULT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_RESULT.toObject = function(includeInstance, msg) {
  var f, obj = {
    errCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    errMsg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 3, 0),
    newSessionId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.http.COMMON_RESULT}
 */
proto.http.COMMON_RESULT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.http.COMMON_RESULT;
  return proto.http.COMMON_RESULT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.http.COMMON_RESULT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.http.COMMON_RESULT}
 */
proto.http.COMMON_RESULT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrMsg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeq(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.http.COMMON_RESULT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.http.COMMON_RESULT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.http.COMMON_RESULT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_RESULT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getErrMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNewSessionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 err_code = 1;
 * @return {number}
 */
proto.http.COMMON_RESULT.prototype.getErrCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.http.COMMON_RESULT.prototype.setErrCode = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string err_msg = 2;
 * @return {string}
 */
proto.http.COMMON_RESULT.prototype.getErrMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.http.COMMON_RESULT.prototype.setErrMsg = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 seq = 3;
 * @return {number}
 */
proto.http.COMMON_RESULT.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.http.COMMON_RESULT.prototype.setSeq = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string new_session_id = 4;
 * @return {string}
 */
proto.http.COMMON_RESULT.prototype.getNewSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.http.COMMON_RESULT.prototype.setNewSessionId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.http.COMMON_REQ = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.http.COMMON_REQ, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.http.COMMON_REQ.displayName = 'proto.http.COMMON_REQ';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.http.COMMON_REQ.prototype.toObject = function(opt_includeInstance) {
  return proto.http.COMMON_REQ.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.http.COMMON_REQ} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_REQ.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientInfo: (f = msg.getClientInfo()) && proto.http.CLIENT_INFO.toObject(includeInstance, f),
    param: msg.getParam_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.http.COMMON_REQ}
 */
proto.http.COMMON_REQ.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.http.COMMON_REQ;
  return proto.http.COMMON_REQ.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.http.COMMON_REQ} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.http.COMMON_REQ}
 */
proto.http.COMMON_REQ.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.http.CLIENT_INFO;
      reader.readMessage(value,proto.http.CLIENT_INFO.deserializeBinaryFromReader);
      msg.setClientInfo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParam(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.http.COMMON_REQ.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.http.COMMON_REQ.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.http.COMMON_REQ} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_REQ.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.http.CLIENT_INFO.serializeBinaryToWriter
    );
  }
  f = message.getParam_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional CLIENT_INFO client_info = 1;
 * @return {?proto.http.CLIENT_INFO}
 */
proto.http.COMMON_REQ.prototype.getClientInfo = function() {
  return /** @type{?proto.http.CLIENT_INFO} */ (
    jspb.Message.getWrapperField(this, proto.http.CLIENT_INFO, 1));
};


/** @param {?proto.http.CLIENT_INFO|undefined} value */
proto.http.COMMON_REQ.prototype.setClientInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.http.COMMON_REQ.prototype.clearClientInfo = function() {
  this.setClientInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.http.COMMON_REQ.prototype.hasClientInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes param = 2;
 * @return {!(string|Uint8Array)}
 */
proto.http.COMMON_REQ.prototype.getParam = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes param = 2;
 * This is a type-conversion wrapper around `getParam()`
 * @return {string}
 */
proto.http.COMMON_REQ.prototype.getParam_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParam()));
};


/**
 * optional bytes param = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParam()`
 * @return {!Uint8Array}
 */
proto.http.COMMON_REQ.prototype.getParam_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParam()));
};


/** @param {!(string|Uint8Array)} value */
proto.http.COMMON_REQ.prototype.setParam = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.http.COMMON_RESP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.http.COMMON_RESP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.http.COMMON_RESP.displayName = 'proto.http.COMMON_RESP';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.http.COMMON_RESP.prototype.toObject = function(opt_includeInstance) {
  return proto.http.COMMON_RESP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.http.COMMON_RESP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_RESP.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonResult: (f = msg.getCommonResult()) && proto.http.COMMON_RESULT.toObject(includeInstance, f),
    result: msg.getResult_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.http.COMMON_RESP}
 */
proto.http.COMMON_RESP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.http.COMMON_RESP;
  return proto.http.COMMON_RESP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.http.COMMON_RESP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.http.COMMON_RESP}
 */
proto.http.COMMON_RESP.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.http.COMMON_RESULT;
      reader.readMessage(value,proto.http.COMMON_RESULT.deserializeBinaryFromReader);
      msg.setCommonResult(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.http.COMMON_RESP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.http.COMMON_RESP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.http.COMMON_RESP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.http.COMMON_RESP.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.http.COMMON_RESULT.serializeBinaryToWriter
    );
  }
  f = message.getResult_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional COMMON_RESULT common_result = 1;
 * @return {?proto.http.COMMON_RESULT}
 */
proto.http.COMMON_RESP.prototype.getCommonResult = function() {
  return /** @type{?proto.http.COMMON_RESULT} */ (
    jspb.Message.getWrapperField(this, proto.http.COMMON_RESULT, 1));
};


/** @param {?proto.http.COMMON_RESULT|undefined} value */
proto.http.COMMON_RESP.prototype.setCommonResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.http.COMMON_RESP.prototype.clearCommonResult = function() {
  this.setCommonResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.http.COMMON_RESP.prototype.hasCommonResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes result = 2;
 * @return {!(string|Uint8Array)}
 */
proto.http.COMMON_RESP.prototype.getResult = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes result = 2;
 * This is a type-conversion wrapper around `getResult()`
 * @return {string}
 */
proto.http.COMMON_RESP.prototype.getResult_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResult()));
};


/**
 * optional bytes result = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResult()`
 * @return {!Uint8Array}
 */
proto.http.COMMON_RESP.prototype.getResult_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResult()));
};


/** @param {!(string|Uint8Array)} value */
proto.http.COMMON_RESP.prototype.setResult = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.http);


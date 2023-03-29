<?php /* Template Name: live */?>
<?php
get_header();
?>

<div class="liveRoom-wrapper">
    <div class="live-room">
      <div class="marquee-container inner" hidden="" style="display: block;">
        <div class="marquee-box" style="animation-duration: 20.3616s;">
          <p><img src="<?php echo get_template_directory_uri(); ?>/assets/images/football.png"><img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/basketball.png">Link dự phòng <a
              href="https://bit.ly/socolive" rel="noopener noreferrer">bit.ly/socolive</a> , Clip triệu view &amp; Tin
            tức độc quyền: <a href="https://socolive.news/" rel="nofollow">socolive.news</a> , Youtube: <a
              href="https://www.youtube.com/c/SocoliveOfficial" rel="nofollow">SocoliveOfficial</a> , Chanel: <a
              href="https://t.me/socolive" rel="nofollow">t.me/socolive</a>, Tele hỗ trợ: <a
              href="https://t.me/socsansoc" rel="nofollow">@socsansoc</a> , Email: hoptacsocolive@gmail.com ! <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/basketball.png">
              <img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/football.png"></p>
        </div>
      </div>
      <div class="live-room-box inner">
        <div class="media">
          <div class="top-block">
            <div class="top-left-block"><img class="head-img avatar"
                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/b8db6a3671785f23d40ee6dda4d52e3e_ss300.jpg"
                data-src="https://sta.vnres.co/file/head/20221103/b8db6a3671785f23d40ee6dda4d52e3e_ss300.jpg"
                data-src-backup="https://sta.vnres.co/file/head/20221103/b8db6a3671785f23d40ee6dda4d52e3e.jpg">
              <div class="text">
                <p class="text-title ellipsis">NBA - Golden State Warriors vs Philadelphia 76ers</p>
                <p class="text-msg"><span class="nickName">BRIANN</span> <span class="room-num" i18n-text="房间号">Số
                    phòng:122591</span> <span class="view-num">22065</span> <span class="mobile-text" hidden=""
                    style="display: inline;"><a target="_blank" href="https://socolive10.tv/download/"
                      i18n-text="下载APP可投屏电视">Tải APP có thể kết nối với tivi</a></span></p>
              </div>
            </div>
            <div class="top-right-block"><a href="javascript:;" class="follow" id="follow" i18n-text="关注">Follow</a> <a
                href="javascript:;" class="get-code"><img
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-room-code.png"
                  class="smallcode">
                <div class="showBigCode"><b class="arrow-up"></b>
                  <div><canvas id="qrCodeCanvas" class="bigCode" height="120" width="120"
                      style="height: 120px; width: 120px;"></canvas></div><span i18n-text="扫一扫">Quét mã</span><br><span
                    i18n-text="手机同步观看直播">Đồng bộ điện thoại xem trực tiếp</span>
                </div>
              </a><a href="javascript:;" class="feedback">Phản hồi</a><a href="javascript:;" class="more"><img
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-more-down.png">
                <div class="more-box"><b class="arrow-up"></b>
                  <div class="report item" i18n-text="举报">Báo cáo</div>
                </div>
              </a></div>
          </div>
          <div class="center-block" style="height: 685.924px;">
            <link rel="stylesheet"
              href="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/video.css">
            <link rel="stylesheet"
              href="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/video(1).css">
            <div class="video-player">
              <div id="video-player-tag" tag="liveRoom"></div>
              <div id="dplayer" class="dplayer"><video name="videoElement" style="width:100%;height:100%"
                  id="dplayerVideo" class="centeredVideo" autoplay=""
                  src="blob:https://socolive10.tv/959c1771-3db7-4951-9535-b788c6c8c2ad">Your browser is too old which
                  doesn't support HTML5 video.</video>
              </div><img class="big-play-btn"
                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/play.png" hidden=""
                style="display: inline;">
              <div class="min-screen-mark" hidden="">
                <div class="min-screen-ctrl">
                  <div class="top">
                    <div class="left">Nhấn và giữ video để kéo</div>
                    <div class="right">
                      <div class="icon-close"></div>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="left">
                      <div id="min-play" class="video-pause"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vplayer-recommend" hidden="" style="display: none;">
                <div class="text schedule-text" flex="main:center cross:center">BLV hiện tại không có mặt~Đợi một chút
                  quay lại nhé~</div>
                <div class="schedule-box"></div>
                <div class="recommend-swiper-container swiper-container-initialized swiper-container-horizontal">
                  <div class="swiper-wrapper" style="transition-duration: 0ms;">
                    <div class="swiper-slide">
                    </div>
                    <div class="swiper-slide">
                    </div>
                  </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
              </div>
              <div class="bottomCtrl" id="bottomCtrl" hidden="" style="display: none;">
                <div class="player-tip-box">
                  <div class="player-tip-item play-tip" hidden="">
                    <div class="text">Phát / Dừng</div>
                  </div>
                  <div class="player-tip-item volumn-tip" hidden="">
                    <div class="text">Điều chỉnh âm lượng</div>
                  </div>
                  <div class="player-tip-item hd-tip" hidden="">
                    <div class="text">Điều chỉnh chất lượng HD và SD</div>
                  </div>
                  <div class="player-tip-item danmu-tip" hidden="">
                    <div class="text">Mở / Tắt chạy chữ</div>
                  </div>
                  <div class="player-tip-item full-tip" hidden="">
                    <div class="text">Mở toàn màn hình</div>
                  </div>
                </div>
                <div class="ctrlBox"><a id="playBtn" class="video-botton video-pause"></a> <a id="volumnBtn"
                    class="video-botton icon-close-volume"></a>
                  <div class="volumn-slider"><span class="volumn-line"></span>
                    <div class="volumn-point"><span></span></div>
                  </div>
                  <div class="send-danmu" hidden="" style="display: none;">
                    <div class="send-danmu-input"><span class="send-danmu-login">Đăng nhập</span>
                      <div id="fullScreenInput" contenteditable="false"></div><img
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/face.png"
                        id="fullScreenEmoji" alt="">
                      <div class="emoji-panel" hidden="">
                        <div class="browBox">
                          <ul>
                            <li data-id="grinning">😀</li>
                            <li data-id="grin">😁</li>
                            <li data-id="smiley">😃</li>
                            <li data-id="smile">😄</li>
                            <li data-id="sweat_smile">😅</li>
                            <li data-id="laughing">😆</li>
                            <li data-id="innocent">😇</li>
                            <li data-id="wink">😉</li>
                            <li data-id="blush">😊</li>
                            <li data-id="slightly_smiling_face">🙂</li>
                            <li data-id="yum">😋</li>
                            <li data-id="heart_eyes">😍</li>
                            <li data-id="kissing_heart">😘</li>
                            <li data-id="kissing">😗</li>
                            <li data-id="kissing_smiling_eyes">😙</li>
                            <li data-id="kissing_closed_eyes">😚</li>
                            <li data-id="stuck_out_tongue_winking_eye">😜</li>
                            <li data-id="stuck_out_tongue_closed_eyes">😝</li>
                            <li data-id="stuck_out_tongue">😛</li>
                            <li data-id="sunglasses">😎</li>
                            <li data-id="roll_eyes">🙄</li>
                            <li data-id="flushed">😳</li>
                            <li data-id="rage">😡</li>
                            <li data-id="confused">😕</li>
                            <li data-id="tired_face">😫</li>
                            <li data-id="triumph">😤</li>
                            <li data-id="fearful">😨</li>
                            <li data-id="disappointed_relieved">😥</li>
                            <li data-id="sleepy">😪</li>
                            <li data-id="sweat">😓</li>
                            <li data-id="dizzy_face">😵</li>
                            <li data-id="astonished">😲</li>
                            <li data-id="sneezing_face">🤧</li>
                            <li data-id="mask">😷</li>
                            <li data-id="face_with_thermometer">🤒</li>
                            <li data-id="face_with_head_bandage">🤕</li>
                            <li data-id="sleeping">😴</li>
                            <li data-id="zzz">💤</li>
                            <li data-id="clap">👏</li>
                            <li data-id="call_me_hand">🤙</li>
                            <li data-id="+1">👍</li>
                            <li data-id="-1">👎</li>
                            <li data-id="facepunch">👊</li>
                            <li data-id="fist">✊</li>
                            <li data-id="v">✌</li>
                            <li data-id="ok_hand">👌</li>
                            <li data-id="raised_hand">✋</li>
                            <li data-id="raised_back_of_hand">🤚</li>
                            <li data-id="muscle">💪</li>
                            <li data-id="handshake">🤝</li>
                            <li data-id="point_left">👈</li>
                            <li data-id="point_right">👉</li>
                            <li data-id="fu">🖕</li>
                            <li data-id="raised_hand_with_fingers_splayed">🖐</li>
                            <li data-id="lips">👄</li>
                            <li data-id="ear">👂</li>
                            <li data-id="eyes">👀</li>
                            <li data-id="santa">🎅</li>
                            <li data-id="sun_with_face">🌞</li>
                            <li data-id="crescent_moon">🌙</li>
                            <li data-id="star">⭐</li>
                            <li data-id="zap">⚡</li>
                            <li data-id="fire">🔥</li>
                            <li data-id="snowflake">❄️</li>
                            <li data-id="soccer">⚽</li>
                            <li data-id="basketball">🏀</li>
                            <li data-id="football">🏈</li>
                            <li data-id="baseball">⚾</li>
                            <li data-id="gift">🎁</li>
                            <li data-id="tada">🎉</li>
                            <li data-id="black_nib">✒️</li>
                            <li data-id="memo">📝</li>
                            <li data-id="heart">❤️</li>
                            <li data-id="yellow_heart">💛</li>
                            <li data-id="green_heart">💚</li>
                            <li data-id="vs">🆚</li>
                            <li data-id="speech_balloon">💬</li>
                            <li data-id="clock1">🕐</li>
                          </ul>
                        </div>
                      </div>
                      <div class="message-tips show-tips" id="fullScreenTips" hidden="">Vui lòng không đăng nội dung
                        nhạy cảm và tài khoản sẽ bị chặn nếu vi phạm nhiều lần!</div>
                    </div><button class="send-danmu-enter cgcolor">Gửi</button>
                    <div class="send-danmu-gift"><img
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/gift.png"
                        id="fullScreenGift">
                      <div class="gift-block" hidden="">
                        <div class="gift-top">
                          <div class="gift" data-id="5">
                            <div class="img">
                              <img
                                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/d11f9bd71eebe3637faedde4aa7ef9b7"
                                alt="" srcset="">
                            </div>
                            <div class="gift-name">TV</div>
                            <div class="gift-score" data-number="50">50 điểm</div>
                          </div>
                          <div class="gift" data-id="6">
                            <div class="img">
                              <img
                                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/5a8a2ca78b4e45c66608bef7dbf92f53"
                                alt="" srcset="">
                            </div>
                            <div class="gift-name">Kho báu</div>
                            <div class="gift-score" data-number="100">100 điểm</div>
                          </div>
                          <div class="gift" data-id="7">
                            <div class="img">
                              <img
                                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/33a04170cb9f482bcf50cdd6859d986e"
                                alt="" srcset="">
                            </div>
                            <div class="gift-name">Hỏa tiễn</div>
                            <div class="gift-score" data-number="200">200 điểm</div>
                          </div>
                        </div>
                        <div class="gift-bottom">
                          <div class="gift-my-socre">Của tôiĐiểm:<span id="fullScreenSocre">0</span></div>
                          <div class="gift-send noScore" id="fullScreenGiftSend">Tặng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bottomCtrlRight inRoom" style="display: block;">
                    <div class="copy btn" style="display:none">Copy</div>
                    <div class="select-definition btn"><span>HD</span>
                      <div class="select-opt" hidden="">
                        <div data-id="1">SD</div>
                        <div class="active" data-id="2">HD</div>
                      </div>
                    </div><a id="danmuBtn" class="video-botton video-open-danmu"></a> <a
                      class="video-botton video-full"></a>
                  </div>
                  <div class="bottomCtrlRight" style="display: none;"><a class="goRoom" href="javascript:void(0)"
                      style="display:none">Vào phòng live</a> <a class="video-botton video-full"></a></div>
                </div>
              </div>
              <div class="refresh" hidden="">
                <div>Tải không thành công, hãy thử làm mới</div>
                <div id="refresh">Làm mới</div>
              </div>
              <div class="loading" id="videoLoading" hidden=""><img class="imgRotate"
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/loading.png"> <img
                  class="loading-logo"
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/loading-logo.png">
                <p>Đang tải...</p>
              </div>
              <div class="bullet-wrapper">
                <div
                  style="overflow: hidden; padding: 0px; margin: 0px; user-select: none; cursor: default; width: 1219px; height: 686px; position: relative;">
                </div>
              </div>
            </div>
            <script
            src="<?php echo get_template_directory_uri(); ?>/assets/js/BulletScreenEngine.all.min.js"></script>>
          </div>
          <div class="how-getpoints" hidden=""><i class="close-icon"><img
                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-close.png" alt=""></i>
            <div class="how">
              <h3 i18n-text="如何获取金币">Hướng dẫn nhận điểm</h3>
              <div class="step">
                <div class="step-icon"><img
                    src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/score-tip1.png"></div>
                <div class="step-msg">
                  <h5 i18n-text="登录获取金币">Đăng nhập để nhận điểm</h5>
                  <p i18n-text="每日登录可获得,连续登录天数越长,金币越多">Đăng nhập mỗi ngày để nhận điểm. Số ngày đăng nhập càng nhiều,
                    điểm càng nhiều.</p>
                </div>
              </div>
              <div class="step">
                <div class="step-icon"><img
                    src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/score-tip2.png"></div>
                <div class="step-msg">
                  <h5 i18n-text="观看直播获得金币">Xem BLV/MC live để nhận điểm</h5>
                  <p v-text="每观看十分钟直播，可以获得5点金币">10 phút xem live, nhận về 5 điểm</p>
                </div>
              </div>
            </div>
          </div>
          <div class="send-gift-error" hidden=""><i class="close-icon close"></i>
            <div class="gift-error-msg">
              <p>Điểm không đủ, chưa thể tặng quà</p>
              <div class="close">Tôi đã rõ</div>
            </div>
          </div>
        </div>
        <div class="chat">
          <div class="notice"><span class="notice-title"><img class="notice-icon"
                src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-announcement@2x.png"> <b
                i18n-text="公告">Thông báo:</b> </span><span class="notice-text">09h00 NBA - Golden State Warriors vs
              Philadelphia 76ers<br>Anh em nào muốn tham gia trải nghiệm b sport qua bty521 hoặc tham gia vào nhóm bóng
              rổ của Brian hãy nhớ kết bạn với Sóc qua thông tin bên góc phải dưới màn hình nhé.<br>Chúc anh em may
              mắn.</span></div>
          <div class="tab">
            <div class="tab-item tab-active" data-id="0"><span i18n-text="聊天室">Phòng trò chuyện</span></div>
            <div class="tab-item" data-id="1"><span i18n-text="排行榜">Bảng xếp hạng</span></div>
          </div>
          <div class="chat-center" style="height: 534.924px;">
            <div class="chat-panel" id="talkScroll">
              <div class="reconnect-tip" style="display: none;"><img
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/loading.gif"> <span>Đang kết
                  nối ... vui lòng đợi!</span></div>
              <div class="chat-list z-chat-list" id="chat-list">
                <div>
                  <div class="chat-item danmaku-item sys-msg active">


                    <!-- 系统消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/system_message.png"
                      class="system-img vertical-middle">




                    <!-- 系统消息名称 -->
                    <span class="user-name w-bold vertical-middle">Tin nhắn hệ thống: </span>

                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">🚩 Link dự phòng <a href="https://bit.ly/socolive"
                        target="_blank" style="color: blue; text-decoration: underline;">https://bit.ly/socolive</a>
                      Liên hệ nhận thưởng <a href="https://socolive.news/" target="_blank"
                        style="color: blue; text-decoration: underline;">https://socolive.news</a> Tele hỗ trợ: <a
                        href="https://t.me/socsansoc" target="_blank"
                        style="color: blue; text-decoration: underline;">https://t.me/socsansoc</a></span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073669" data-flag="1679718045301">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv5.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="195671">Hero one: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">hay hay hay&nbsp;</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073676" data-flag="1679718052711">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="193807">Chơi Sợ Thua: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">aa shibaaaaaaaaaaaa</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073683" data-flag="1679718054306">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv3.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="172385">Jumber: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">moá đẹp vl z</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073686" data-flag="1679718056852">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv3.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="223033">Hữu Danh: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">tài gsw 112.5 xin chết😀</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073695" data-flag="1679718061348">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="120311">Demon: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">tài 112 của tui</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073698" data-flag="1679718062443">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="212017">Jayce19: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">curryy&nbsp;</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073705" data-flag="1679718066831">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="120311">Demon: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">về đc k vậy</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073707" data-flag="1679718069677">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="211499">alvaro: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">curyyyyyyyyyyyyyyyy</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073710" data-flag="1679718067605">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="103685">Cậu ƠI Mưa kìa: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">hayyyyyyyyyyyyyyyyyyyyyyyyyyyyy\</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073720" data-flag="167971807332724260">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="174779">FrankyJR: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">trận này căng quá</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073727" data-flag="1679718081044">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="155600">Phi Điểu: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">cầu win 7đ đi tao&nbsp; hứa nghỉ quay tay tới hết
                      tháng&nbsp;</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073735" data-flag="1679718091820">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="103685">Cậu ƠI Mưa kìa: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">mé mấy thằng 76 , chắc xuất rồi mà nó còn cho thằng em bé
                      đánh đến hăng</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073738" data-flag="1679718095822">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="193807">Chơi Sợ Thua: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle"><img class="chat-point-img"
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/chat-point.svg">phi
                      điểu&nbsp; chắc ông tuyệt vọng lắm&nbsp; hahaa</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073740" data-flag="1679718094219">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="101655">Bicaoooooi: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">3 trận hay quá ae ơi đảo 3 vòng r :</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073741" data-flag="1679718094869">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="198668">ngocanh123: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">gsw đánh sân nhà tín thế</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073748" data-flag="167971810111979200">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="425749">Threee: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">goden áo màu gì briann ơi</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073760" data-flag="1679718107877">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="198668">ngocanh123: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">gsw đánh sân nhà cháy thế</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073770" data-flag="1679718112834">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="206387">trueyoung: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">hôm</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073775" data-flag="1679718113996">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="155600">Phi Điểu: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle"><img class="chat-point-img"
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/chat-point.svg">chơi
                      sợ thua&nbsp; cái gì cũng có thể xảy ra</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073785" data-flag="1679718117680">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="193807">Chơi Sợ Thua: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">golden trắng</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">emthichanbong vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073813" data-flag="1679718125118">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="193807">Chơi Sợ Thua: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle"><img class="chat-point-img"
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/chat-point.svg">phi
                      điểu&nbsp; ok tui khấn với ông nhé</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073817" data-flag="1679718126902">

                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="206387">trueyoung: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">hà đen chấn thương ah anh em</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073823" data-flag="167971812842598600">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="425749">Threee: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">ok</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073829" data-flag="1679718131155">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv2.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="155600">Phi Điểu: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle"><img class="chat-point-img"
                        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/chat-point.svg">chơi
                      sợ thua&nbsp; ok cảm ơn ông</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Sbhsjsjs vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">HeluTN vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Mr Kều 84 vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073854" data-flag="1679718141388">




                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="189564">Lumberr: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">clear keo k briann kk</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv4.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Vũ Sad Boy vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv3.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Carot vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv1.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Nguyentrung vào phòng trò chuyện</span>
                  </div>
                  <div class="chat-item danmaku-item  " data-id="18073883" data-flag="1679718002708">
                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv3.png"
                      class="v-class vertical-middle">

                    <!-- 普通发送人名称 -->
                    <span class="user-name forbidden-user vertical-middle" data-id="208016">Sóc bờ đê: </span>

                    <!-- 用户消息内容 -->
                    <span class="user-content vertical-middle">anh em nào vẫn chưa tìm được trang cược uy tín nạp rút
                      nhanh gọn thì hãy đến với 🔆B SPORT 🔆 đăng kí ngay tại đường link 👉<a
                        href="https://www.bty521.com/" target="_blank"
                        style="color: blue; text-decoration: underline;">https://www.bty521.com</a>👈👉<a
                        href="https://www.bty191.com/" target="_blank"
                        style="color: blue; text-decoration: underline;">https://www.bty191.com</a> 👈 hoặc kết bạn với
                      sóc qua ZALO ❤️ 0878.681.865 ❤️mã bufa 🦨 VEKNTC 🦨 telegram 💥 @socbode88 💋💋💋để được hỗ trợ
                      ạ🏆 <a href="http://www.bufa.chat/" target="_blank"
                        style="color: blue; text-decoration: underline;">http://www.bufa.chat</a> 🏆🏆&nbsp;</span>
                  </div>
                  <div class="chat-item danmaku-item sys-msg active">



                    <!-- 欢迎消息图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/hi.png" alt=""
                      class="hi vertical-middle">


                    <!-- 普通用户发送消息VIP图标 -->
                    <img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/lv3.png"
                      class="v-class vertical-middle">


                    <!-- 系统消息内容 -->
                    <span class="vertical-middle" style="color: #777">Minhquan66 vào phòng trò chuyện</span>
                  </div>
                </div>
              </div>
              <div class="gift-effects-wrapper">
              </div>
              <div class="forbidden-user-tip" hidden=""><img class="forbidden-close"
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-close.png" alt="关闭">
                <div class="user-msg">
                  <div class="user-avatar"><img
                      src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/avatar.png"
                      alt="avatar"></div>
                  <div class="user-name">***</div>
                </div>
                <div class="user-text" i18n-text="本直播间禁言至">Tắt tiếng phòng live này đến2099/12/12 00:00</div>
                <div class="user-btn" i18n-text="解除禁言" hidden="">Hủy tắt tiếng</div>
              </div>
              <div class="forbidden-tip" hidden=""><img class="forbidden-close"
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-close.png" alt="关闭">
                <div class="user-msg">
                  <div class="user-avatar"><img
                      src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/avatar.png"
                      alt="avatar"></div>
                  <div class="user-name">***</div>
                </div>
                <div class="forbidden-select">
                  <div class="forbidden-room">
                    <div class="forbidden-selected" i18n-text="直播间禁言">Tắt tiếng phòng live<span class="triangle"></span>
                    </div>
                    <div class="forbidden-select-opt" hidden="">
                      <div data-id="0" i18n-text="禁言2小时">Tắt tiếng2Giờ</div>
                      <div data-id="1" i18n-text="禁言1天">Tắt tiếng1Ngày</div>
                      <div data-id="2">Tắt tiếng3Ngày</div>
                      <div data-id="3">Tắt tiếng30Ngày</div>
                      <div data-id="4" i18n-text="永久禁言">Vĩnh viễnTắt tiếng</div>
                    </div>
                  </div>
                  <div class="forbidden-all" hidden="">
                    <div class="forbidden-selected" i18n-text="全站禁言">Tắt tiếng toàn bộ<span class="triangle"></span>
                    </div>
                    <div class="forbidden-select-opt" hidden="">
                      <div data-id="0" i18n-text="禁言2小时">Tắt tiếng2Giờ</div>
                      <div data-id="1" i18n-text="禁言1天">Tắt tiếng1Ngày</div>
                      <div data-id="2">Tắt tiếng3Ngày</div>
                      <div data-id="3">Tắt tiếng30Ngày</div>
                      <div data-id="4" i18n-text="永久禁言">Vĩnh viễnTắt tiếng</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="forbidden-sure-tip" hidden=""><img class="forbidden-sure-close"
                  src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/icon-close.png" alt="关闭">
                <div class="forbidden-sure-text" i18n-text="将该用户在全站禁言30天吗？">Người dùng này trong toàn bộ trang <span>Tắt
                    tiếng30Ngày</span> Đúng không ？</div>
                <div class="forbidden-sure-btn" i18n-text="确定">Xác nhận</div>
              </div>
              <div class="dele-msg" i18n-text="删除" data-id="">Xóa</div>
              <div class="newMsg-tips" hidden=""><span i18n-text="底部有新消息">Tin nhắn ở dưới cùng</span></div>
            </div>
            <div class="rank-list" hidden="">
              <ul hidden=""></ul>
              <div class="rank-list-null" i18n-text="还没有人给主播送贡献值呀！！" hidden="">Chưa có ai đóng góp cho bình luận viên
                nữa！！</div>
            </div>
            <div class="private-chat-btn" i18n-text="私信" hidden="">Trò chuyện riêng</div>
          </div>
          <div class="chat-bottom">
            <div class="gift-option">
              <div class="gift">
                <div class="gift-list">
                  <div class="gift-item">
                    <img
                      src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/d11f9bd71eebe3637faedde4aa7ef9b7"
                      class="gift-icon">
                    <div class="gift-block ts-dot arrow-bottom an-scale-in-ease">
                      <div class="subbox">
                        <div class="gift-msg">
                          <img class="gift-img"
                            src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/d11f9bd71eebe3637faedde4aa7ef9b7">
                          <div class="gift-text">
                            <div class="gift-name">TV</div>
                            <div class="gift-number" data-number="50">50 điểm</div>
                          </div>
                        </div>
                        <div class="send-button" data-id="5" i18n-text="赠送">Tặng</div>
                      </div>
                    </div>
                  </div>
                  <div class="gift-item">
                    <img
                      src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/5a8a2ca78b4e45c66608bef7dbf92f53"
                      class="gift-icon">
                    <div class="gift-block ts-dot arrow-bottom an-scale-in-ease">
                      <div class="subbox">
                        <div class="gift-msg">
                          <img class="gift-img"
                            src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/5a8a2ca78b4e45c66608bef7dbf92f53">
                          <div class="gift-text">
                            <div class="gift-name">Kho báu</div>
                            <div class="gift-number" data-number="100">100 điểm</div>
                          </div>
                        </div>
                        <div class="send-button" data-id="6" i18n-text="赠送">Tặng</div>
                      </div>
                    </div>
                  </div>
                  <div class="gift-item">
                    <img
                      src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/33a04170cb9f482bcf50cdd6859d986e"
                      class="gift-icon">
                    <div class="gift-block ts-dot arrow-bottom an-scale-in-ease">
                      <div class="subbox">
                        <div class="gift-msg">
                          <img class="gift-img"
                            src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/33a04170cb9f482bcf50cdd6859d986e">
                          <div class="gift-text">
                            <div class="gift-name">Hỏa tiễn</div>
                            <div class="gift-number" data-number="200">200 điểm</div>
                          </div>
                        </div>
                        <div class="send-button" data-id="7" i18n-text="赠送">Tặng</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="integral">
                <p class="integral-content"><span class="integral-num">0 </span><span class="integral-name"
                    i18n-text="我的金币">Điểm của tôi</span></p><span class="get-integral" i18n-text="如何获取金币">Hướng dẫn nhận
                  điểm</span>
              </div>
            </div>
            <div class="option"><a href="javascript:;" class="emoji"></a>
              <div class="emoji-panel">
                <div class="browBox">
                  <ul>
                    <li data-id="grinning">😀</li>
                    <li data-id="grin">😁</li>
                    <li data-id="smiley">😃</li>
                    <li data-id="smile">😄</li>
                    <li data-id="sweat_smile">😅</li>
                    <li data-id="laughing">😆</li>
                    <li data-id="innocent">😇</li>
                    <li data-id="wink">😉</li>
                    <li data-id="blush">😊</li>
                    <li data-id="slightly_smiling_face">🙂</li>
                    <li data-id="yum">😋</li>
                    <li data-id="heart_eyes">😍</li>
                    <li data-id="kissing_heart">😘</li>
                    <li data-id="kissing">😗</li>
                    <li data-id="kissing_smiling_eyes">😙</li>
                    <li data-id="kissing_closed_eyes">😚</li>
                    <li data-id="stuck_out_tongue_winking_eye">😜</li>
                    <li data-id="stuck_out_tongue_closed_eyes">😝</li>
                    <li data-id="stuck_out_tongue">😛</li>
                    <li data-id="sunglasses">😎</li>
                    <li data-id="roll_eyes">🙄</li>
                    <li data-id="flushed">😳</li>
                    <li data-id="rage">😡</li>
                    <li data-id="confused">😕</li>
                    <li data-id="tired_face">😫</li>
                    <li data-id="triumph">😤</li>
                    <li data-id="fearful">😨</li>
                    <li data-id="disappointed_relieved">😥</li>
                    <li data-id="sleepy">😪</li>
                    <li data-id="sweat">😓</li>
                    <li data-id="dizzy_face">😵</li>
                    <li data-id="astonished">😲</li>
                    <li data-id="sneezing_face">🤧</li>
                    <li data-id="mask">😷</li>
                    <li data-id="face_with_thermometer">🤒</li>
                    <li data-id="face_with_head_bandage">🤕</li>
                    <li data-id="sleeping">😴</li>
                    <li data-id="zzz">💤</li>
                    <li data-id="clap">👏</li>
                    <li data-id="call_me_hand">🤙</li>
                    <li data-id="+1">👍</li>
                    <li data-id="-1">👎</li>
                    <li data-id="facepunch">👊</li>
                    <li data-id="fist">✊</li>
                    <li data-id="v">✌</li>
                    <li data-id="ok_hand">👌</li>
                    <li data-id="raised_hand">✋</li>
                    <li data-id="raised_back_of_hand">🤚</li>
                    <li data-id="muscle">💪</li>
                    <li data-id="handshake">🤝</li>
                    <li data-id="point_left">👈</li>
                    <li data-id="point_right">👉</li>
                    <li data-id="fu">🖕</li>
                    <li data-id="raised_hand_with_fingers_splayed">🖐</li>
                    <li data-id="lips">👄</li>
                    <li data-id="ear">👂</li>
                    <li data-id="eyes">👀</li>
                    <li data-id="santa">🎅</li>
                    <li data-id="sun_with_face">🌞</li>
                    <li data-id="crescent_moon">🌙</li>
                    <li data-id="star">⭐</li>
                    <li data-id="zap">⚡</li>
                    <li data-id="fire">🔥</li>
                    <li data-id="snowflake">❄️</li>
                    <li data-id="soccer">⚽</li>
                    <li data-id="basketball">🏀</li>
                    <li data-id="football">🏈</li>
                    <li data-id="baseball">⚾</li>
                    <li data-id="gift">🎁</li>
                    <li data-id="tada">🎉</li>
                    <li data-id="black_nib">✒️</li>
                    <li data-id="memo">📝</li>
                    <li data-id="heart">❤️</li>
                    <li data-id="yellow_heart">💛</li>
                    <li data-id="green_heart">💚</li>
                    <li data-id="vs">🆚</li>
                    <li data-id="speech_balloon">💬</li>
                    <li data-id="clock1">🕐</li>
                  </ul>
                </div><b class="arrow-down pa"></b>
              </div>
              <div class="shield"><a href="javascript:;" class="danmu"></a>
                <div class="shield-checkbox">
                  <div class="checkbox"><input type="checkbox" name="shieldCheckbox" id="CheckboxAll" value="0"
                      class="input-check"> <label for="CheckboxAll" i18n-text="全部屏蔽">Chặn tất cả</label></div>
                  <div class="checkbox"><input type="checkbox" name="shieldCheckbox" id="CheckboxGift" value="1"
                      class="input-check"> <label for="CheckboxGift" i18n-text="屏蔽礼物动画">Chặn hình quà tặng</label></div>
                  <div class="checkbox"><input type="checkbox" name="shieldCheckbox" id="CheckboxWc" value="2"
                      class="input-check"> <label for="CheckboxWc" i18n-text="屏蔽进场欢迎">Chặn lời chào</label></div>
                </div>
              </div>
              <div class="inputBox">
                <div class="noLogin" i18n-text="登录后才可以发送消息哦~~"><span>Đăng nhập</span> để cùng chat nhé~~</div>
                <div hidden="" id="textarea" class="textarea-box">
                  <div class="textarea" contenteditable="true" placeholder="Cùng comment vui vẻ nhé ~~"></div>
                  <div class="count-box"><span class="text-count">0</span>/120</div>
                </div>
                <div class="send" i18n-text="发送">Gửi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="appoinment-list inner" hidden="" style="display: block;">
      <h4 class="title" i18n-text="主播日程">Lịch trình bình luận viên</h4>
      <div class="appoinment-swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div class="swiper-button-prev appoinment-prev swiper-button-disabled" tabindex="0" role="button"
        aria-label="Previous slide" aria-disabled="true"></div>
      <div class="swiper-button-next appoinment-next" tabindex="0" role="button" aria-label="Next slide"
        aria-disabled="false"></div>
    </div>
    <!-- category -->
    <div class="category inner" hidden="" style="display: block;">
      <h4 class="title" i18n-text="视频推荐">Đề xuất video</h4>
      <ul class="category-list">
      </ul>
    </div>
    <div class="feedback-window" hidden="">
      <div class="big-title">
        <img class="feedback-icon"
          src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/feedback.svg">
        <img class="close-icon" src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/close.svg">
        <span>Phản hồi<!--反馈--></span>
      </div>

      <div class="content">
        <div class="content-item nickname">
          <div class="title">Tài Khoản:<!-- 账户名称 --></div>
          <input i18n-placeholder="" placeholder="" readonly="">
        </div>
        <div class="content-item bufa">
          <div class="title">ID Bufa:</div>
          <input i18n-placeholder="" placeholder="">
        </div>
        <div class="content-item contact">
          <div class="title">Zalo:</div>
          <input i18n-placeholder="" placeholder="">
        </div>
        <div class="content-item msg">
          <div class="title">Nội Dung Phản Hồi:</div>
          <textarea i18n-placeholder="请尽量详细描述你要反馈的问题，以便我们尽快为你解决"
            placeholder="Vui lòng mô tả chi tiết vấn đề bạn muốn phản hồi để chúng tôi có thể giải quyết cho bạn trong thời gian sớm nhất"
            maxlength="500"></textarea>
          <div class="count-box"><span class="text-count">0</span>/500</div>
          <!-- <div class="error-tip">限制500个字以内</div> -->
        </div>
        <div class="submit">Phản Hồi<!--提交--></div>
      </div>
    </div>
    <div class="feedback-mode" hidden=""></div>
  </div>
  <link rel="stylesheet" href="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/chat.css">
  <div class="chat-wrapper private-chat private-chat-liveRoom" hidden="">
    <div class="opts"><img class="close"
        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/close(1).png"></div><img
      class="chat-loading" src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/loading.gif"
      hidden="">
    <div class="chat-tip" hidden=""><span i18n-text="消息同步中">Tin nhắn đang đồng bộ</span> <img
        src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/loading.gif" hidden=""></div>
    <div class="word-content"></div>
    <div class="send-word">
      <div class="send-word-opts">
        <div class="private-emoji-panel" hidden="">
          <ul>
            <li data-id="grinning">😀</li>
            <li data-id="grin">😁</li>
            <li data-id="smiley">😃</li>
            <li data-id="smile">😄</li>
            <li data-id="sweat_smile">😅</li>
            <li data-id="laughing">😆</li>
            <li data-id="innocent">😇</li>
            <li data-id="wink">😉</li>
            <li data-id="blush">😊</li>
            <li data-id="slightly_smiling_face">🙂</li>
            <li data-id="yum">😋</li>
            <li data-id="heart_eyes">😍</li>
            <li data-id="kissing_heart">😘</li>
            <li data-id="kissing">😗</li>
            <li data-id="kissing_smiling_eyes">😙</li>
            <li data-id="kissing_closed_eyes">😚</li>
            <li data-id="stuck_out_tongue_winking_eye">😜</li>
            <li data-id="stuck_out_tongue_closed_eyes">😝</li>
            <li data-id="stuck_out_tongue">😛</li>
            <li data-id="sunglasses">😎</li>
            <li data-id="roll_eyes">🙄</li>
            <li data-id="flushed">😳</li>
            <li data-id="rage">😡</li>
            <li data-id="confused">😕</li>
            <li data-id="tired_face">😫</li>
            <li data-id="triumph">😤</li>
            <li data-id="fearful">😨</li>
            <li data-id="disappointed_relieved">😥</li>
            <li data-id="sleepy">😪</li>
            <li data-id="sweat">😓</li>
            <li data-id="dizzy_face">😵</li>
            <li data-id="astonished">😲</li>
            <li data-id="sneezing_face">🤧</li>
            <li data-id="mask">😷</li>
            <li data-id="face_with_thermometer">🤒</li>
            <li data-id="face_with_head_bandage">🤕</li>
            <li data-id="sleeping">😴</li>
            <li data-id="zzz">💤</li>
            <li data-id="clap">👏</li>
            <li data-id="call_me_hand">🤙</li>
            <li data-id="+1">👍</li>
            <li data-id="-1">👎</li>
            <li data-id="facepunch">👊</li>
            <li data-id="fist">✊</li>
            <li data-id="v">✌</li>
            <li data-id="ok_hand">👌</li>
            <li data-id="raised_hand">✋</li>
            <li data-id="raised_back_of_hand">🤚</li>
            <li data-id="muscle">💪</li>
            <li data-id="handshake">🤝</li>
            <li data-id="point_left">👈</li>
            <li data-id="point_right">👉</li>
            <li data-id="fu">🖕</li>
            <li data-id="raised_hand_with_fingers_splayed">🖐</li>
            <li data-id="lips">👄</li>
            <li data-id="ear">👂</li>
            <li data-id="eyes">👀</li>
            <li data-id="santa">🎅</li>
            <li data-id="sun_with_face">🌞</li>
            <li data-id="crescent_moon">🌙</li>
            <li data-id="star">⭐</li>
            <li data-id="zap">⚡</li>
            <li data-id="fire">🔥</li>
            <li data-id="snowflake">❄️</li>
            <li data-id="soccer">⚽</li>
            <li data-id="basketball">🏀</li>
            <li data-id="football">🏈</li>
            <li data-id="baseball">⚾</li>
            <li data-id="gift">🎁</li>
            <li data-id="tada">🎉</li>
            <li data-id="black_nib">✒️</li>
            <li data-id="memo">📝</li>
            <li data-id="heart">❤️</li>
            <li data-id="yellow_heart">💛</li>
            <li data-id="green_heart">💚</li>
            <li data-id="vs">🆚</li>
            <li data-id="speech_balloon">💬</li>
            <li data-id="clock1">🕐</li>
          </ul><b class="arrow-down pa"></b>
        </div>
        <div class="private-emoji"></div>
        <div class="private-send" i18n-text="发送">Gửi</div>
      </div>
      <div class="send-content"><textarea type="text" maxlength="140"></textarea></div>
    </div>
    <div class="refresh"><img src="./NBA - Golden State Warriors vs Philadelphia 76ers - Socolive_files/refresh.svg">
      <div i18n-text="同步最新消息">Đồng bộ tin nhắn mới nhất</div>
    </div>
  </div>

<?php
get_footer();
?>
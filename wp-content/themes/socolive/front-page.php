<?php 
	get_header()
?>
  <div class="header-modal" hidden=""></div>
  <div class="index-wrapper">
    <div class="living-room" id="living-room">
      <div class="video-inner inner">
        <div class="marquee-container">
          <div class="marquee-box" style="animation-duration: 20.3616s;">
            <p><img src="<?php echo get_template_directory_uri(); ?>/assets/images/football.png"><img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/basketball.png">Link dự
              phòng <a href="https://bit.ly/socolive" rel="noopener noreferrer">bit.ly/socolive</a> , Clip triệu view
              &amp; Tin tức độc quyền: <a href="https://socolive.news/" rel="nofollow">socolive.news</a> , Youtube: <a
                href="https://www.youtube.com/c/SocoliveOfficial" rel="nofollow">SocoliveOfficial</a> , Chanel: <a
                href="https://t.me/socolive" rel="nofollow">t.me/socolive</a>, Tele hỗ trợ: <a
                href="https://t.me/socsansoc" rel="nofollow">@socsansoc</a> , Email: hoptacsocolive@gmail.com ! <img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/basketball.png"><img
                src="<?php echo get_template_directory_uri(); ?>/assets/images/football.png"></p>
          </div>
        </div>
        <div class="video-box">
          <link rel="stylesheet"
            href="<?php echo get_template_directory_uri(); ?>/assets/css/video.css">
          <link rel="stylesheet"
            href="<?php echo get_template_directory_uri(); ?>/assets/css/video(1).css">
          <div class="video-player">
            <div id="video-player-tag" tag="index"></div>
            <div id="dplayer" class="dplayer"><video name="videoElement" style="width:100%;height:100%"
                id="dplayerVideo" class="centeredVideo" autoplay=""
                src="blob:https://socolive10.tv/aa7a2cde-158a-47a6-9889-3b01e6650cef">Your browser is too old which
                doesn't support HTML5 video.</video>
            </div><img class="big-play-btn"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/play.png" hidden=""
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
              <div class="recommend-swiper-container">
                <div class="swiper-wrapper"></div>
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
                <div class="player-tip-item full-tip" hidden="">
                  <div class="text">Mở toàn màn hình</div>
                </div>
              </div>
              <div class="ctrlBox"><a id="playBtn" class="video-botton video-pause"></a> <a id="volumnBtn"
                  class="video-botton icon-close-volume"></a>
                <div class="volumn-slider"><span class="volumn-line" style="width: 35.4167%;"></span>
                  <div class="volumn-point" style="left: 35.4167%;"><span></span></div>
                </div>
                <div class="send-danmu" hidden="" style="display: none;">
                  <div class="send-danmu-input"><span class="send-danmu-login">Đăng nhập</span>
                    <div id="fullScreenInput" contenteditable="false"></div><img
                      src="<?php echo get_template_directory_uri(); ?>/assets/images/face.png"
                      id="fullScreenEmoji" alt="">
                    <div class="emoji-panel" hidden="">
                      <div class="browBox">
                        <ul></ul>
                      </div>
                    </div>
                    <div class="message-tips show-tips" id="fullScreenTips" hidden="">Vui lòng không đăng nội dung nhạy
                      cảm và tài khoản sẽ bị chặn nếu vi phạm nhiều lần!</div>
                  </div><button class="send-danmu-enter cgcolor">Gửi</button>
                  <div class="send-danmu-gift"><img
                      src="<?php echo get_template_directory_uri(); ?>/assets/images/gift.png"
                      id="fullScreenGift">
                    <div class="gift-block" hidden="">
                      <div class="gift-top"></div>
                      <div class="gift-bottom">
                        <div class="gift-my-socre">Của tôiĐiểm:<span id="fullScreenSocre">0</span></div>
                        <div class="gift-send noScore" id="fullScreenGiftSend">Tặng</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottomCtrlRight inRoom">
                  <div class="copy btn" style="display:none">Copy</div>
                  <div class="select-definition btn"><span>HD</span>
                    <div class="select-opt" hidden="">
                      <div data-id="1">SD</div>
                      <div class="active" data-id="2">HD</div>
                    </div>
                  </div><a id="danmuBtn" class="video-botton video-open-danmu"></a> <a
                    class="video-botton video-full"></a>
                </div>
                <div class="bottomCtrlRight"><a class="goRoom" href="javascript:void(0)" style="">Vào phòng live</a> <a
                    class="video-botton video-full"></a></div>
              </div>
            </div>
            <div class="refresh" hidden="">
              <div>Tải không thành công, hãy thử làm mới</div>
              <div id="refresh">Làm mới</div>
            </div>
            <div class="loading" id="videoLoading" hidden=""><img class="imgRotate"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/loading.png"> <img
                class="loading-logo"
                src="<?php echo get_template_directory_uri(); ?>/assets/images/loading-logo.png">
              <p>Đang tải...</p>
            </div>
            <div class="bullet-wrapper">
              <div
                style="overflow: hidden; padding: 0px; margin: 0px; user-select: none; cursor: default; width: 1015px; height: 567px; position: relative;">
              </div>
            </div>
          </div>
          <script
            src="<?php echo get_template_directory_uri(); ?>/assets/js/BulletScreenEngine.all.min.js"></script>
          <a class="inLiveRoom" href="javascript:void(0)" hidden="" i18n-text="进入直播间" style="display: inline;">Vào phòng
            live</a>
        </div>
        <div class="video-list">
          <ul class="room-list">
          </ul>
        </div>
      </div>
    </div>
    <div class="appoinment-list inner">
      <div class="appoinment-swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div class="swiper-button-prev appoinment-prev swiper-button-disabled" tabindex="0" role="button"
        aria-label="Previous slide" aria-disabled="true"><i class="iconfont ali-houtuismall"></i></div>
      <div class="swiper-button-next appoinment-next" tabindex="0" role="button" aria-label="Next slide"
        aria-disabled="false"><i class="iconfont ali-qianjinsmall"></i></div>
    </div>
    <div class="anchor inner">
      <div class="title-block"><img
          src="<?php echo get_template_directory_uri(); ?>/assets/images/hot-zb.png" alt="热门主播"></div>
      <div class="anchor-swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
        </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div class="swiper-button-prev anchor-prev swiper-button-disabled" tabindex="0" role="button"
        aria-label="Previous slide" aria-disabled="true"><i class="iconfont ali-houtuismall"></i></div>
      <div class="swiper-button-next anchor-next" tabindex="0" role="button" aria-label="Next slide"
        aria-disabled="false"><i class="iconfont ali-qianjinsmall"></i></div>
    </div>
    <div class="hot inner">
      <div class="hot-title"><span class="hot-live"><img
            src="<?php echo get_template_directory_uri(); ?>/assets/images/hot-live.png" alt=""></span>
        <ul class="live-type-list">
          <li class="live-type-item all-type active">Trực tiếp<b class="pa"></b></li>
          <li class="live-type-item">Bóng đá<b class="pa"></b></li>
          <li class="live-type-item">Bóng rổ<b class="pa"></b></li>
        </ul>
      </div>
      <ul class="hot-content all-content">
      </ul>
      <ul class="hot-content live-type-content" hidden=""></ul>
      <div class="none-data" hidden=""><img
          src="<?php echo get_template_directory_uri(); ?>/assets/images/none2.png" alt="" srcset="">
        <div class="text">Danh sách trống~</div>
      </div>
    </div>
    <div class="right-fix" hidden="" style="display: none;">
      <div class="icon-team"><a href="https://socolive10.tv/#living-room" class="backTop"><img class="icon"
            src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-top.png" alt="">
          <div class="text" i18n-text="返回顶部">Trở lại trang đầu</div>
        </a><a href="javascript:void(0)" class="code" style=""><img class="icon"
            src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-code.png" alt="">
          <div class="text" i18n-text="下载APP">Tải APP</div>
          <div class="sao-code" hidden="">
            <p><span i18n-text="扫码下载">Quét mã tải</span> Soco Live</p><img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/code.png" alt="logo">
          </div>
        </a><a href="javascript:void(0)" class="feedback"><img class="icon"
            src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-feedback.png" alt="">
          <div class="text" i18n-text="意见反馈">Phản hồi ý kiến</div>
        </a></div>
    </div>
    <style>
      .index-footer-wrapper {
        margin-top: 36px;
        padding: 15px;
        border-radius: 10px;
        background: #fff
      }

      .index-footer-wrapper .title {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 600;
        text-align: center
      }

      .index-footer-wrapper .content {
        font-size: 14px;
        color: #303030;
        text-indent: 2em
      }

      .index-footer-wrapper .content p {
        padding: 5px 0
      }

      .index-footer-wrapper .content .img-box {
        max-width: 100%;
        text-indent: 0;
        text-align: center;
        font-size: 0
      }

      .index-footer-wrapper .content .img-box img {
        max-width: 100%
      }

      .index-footer-wrapper .content p b {
        font-size: 140%;
        color: #000
      }
    </style>
    <div class="index-footer-wrapper inner">

    <?php 
      $id = 0; // add the ID of the page where the zero is
      $p = get_page($id);
      $t = $p->post_title;
      echo '<h1 class="title" style="font-size:260%">'.apply_filters('post_title', $t).'</h1>';
    ?> 

      <div class="content">
        <?php 
          echo apply_filters('the_content', $p->post_content);
        ?>
      </div>
    </div>
  </div>
   <?php 
    get_footer();
  ?>



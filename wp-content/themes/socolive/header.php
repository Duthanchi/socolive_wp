<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Blog Site Template">
	<meta name="author" content="socolive">
	<!-- <link rel="shortcut icon" href="/wp-content/theme/socolive/images/logo.jpg"> -->
	<?php
	wp_head()
		?>

</head>

<body>
	<div class="header-wrapper">
    <div class="header-inner clearfix">
      <div class="header-left">
        <div class="header-logo-box"><img class="header-logo"
            src="<?php echo get_template_directory_uri(); ?>/assets/images/logo1.png"
            alt="Soco Live"
            hidden="" style="display: inline !important;"> <img class="header-logo-active"
            src="<?php echo get_template_directory_uri(); ?>/assets/images/logo2.png" 
            alt="Soco Live"
            hidden="" style="display: none;"></div>
        <div class="header-menu">
              <?php
                    wp_nav_menu(
                      array(
                        'menu' => "primary",
                        'container' => "",
                        "theme_location" => "primary",
                      )
                    )
                ?>
        </div>
      </div>
      <div class="header-right">
        <div class="apply-menu"><a href="javascript:void(0)">Ứng tuyển BLV</a></div>
        <div class="no-login" style="display:none">
          <span class="header-login">
            <i class="iconfont ali-denglu"></i>
            <span i18n-text="登录">Đăng nhập</span>
          </span>
          <div class="division"></div>
          <span class="header-register" i18n-text="注册">Đăng ký</span>
        </div>
        <div class="had-login" style="display:none">
          <div class="header-subscribe"><i class="iconfont ali-wodeyuyue icon-subscribe"></i> <span i18n-text="预约">Đặt
              lịch</span>
            <div class="submenu subscribe-submenu" hidden="">
              <div class="submenu-box">
                <div class="subscribe-none" hidden=""><img
                    src="<?php echo get_template_directory_uri(); ?>/"> <span
                    i18n-text="预约列表空空如也~">Danh sách lịch hẹn trống~</span></div>
                <div class="subscribe-data" hidden="">
                  <div class="subscribe-data-box"></div>
                  <div class="more"><span i18n-text="查看更多">Xem thêm</span><i class="iconfont ali-moresmall"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-concern"><i class="iconfont ali-wodeguanzhu icon-concern"></i> <span
              i18n-text="关注">Follow</span>
            <div class="submenu concern-submenu" hidden="">
              <div class="submenu-box">
                <div class="concern-none"><img
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/none.png"> <span
                    i18n-text="关注列表空空如也~">Danh sách follow trống ~</span></div>
                <div class="concern-data" hidden="">
                  <div class="concern-data-box"></div>
                  <div class="more"><span i18n-text="查看更多">Xem thêm</span><i class="iconfont ali-moresmall"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-avatar"><img class="special-avatar avatar"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/avatar.png">
            <div class="newMsg" hidden=""></div>
            <div class="submenu avatar-submenu" hidden="">
              <div class="submenu-box">
                <div class="top float-clear">
                  <div class="top-up float-clear"><img class="avatar"
                      src="<?php echo get_template_directory_uri(); ?>/assets/images/avatar.png"> <span
                      class="nickname ellipsis" i18n-text="昵称">Biệt danh</span>
                    <div class="identity" hidden="" style="display:none" i18n-text="主播">Bình luận viên</div>
                    <div class="btn-logout" i18n-text="退出登录">Đăng xuất</div>
                  </div>
                  <div class="top-down"><progress class="grow-progress" value="0" max="0"></progress>
                    <div class="cur-lv"></div>
                    <div class="grow-box"><span class="text" i18n-text="经验">Kinh nghiệm</span> <span
                        class="cur-grow">1</span><span>/</span><span class="max-grow">200</span></div>
                    <div class="next-lv"></div>
                    <div class="grow-tip" hidden=""><span i18n-text="还差">Còn kém</span> <span class="diff-grow">0</span>
                      <span i18n-text="经验到下一等级">Kinh nghiệm lên cấp độ tiếp theo</span></div>
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-btn ucenter">
                    <div class="icon home-icon"></div><span i18n-text="个人中心">Trung tâm</span>
                    <div class="msg-num singular" hidden=""></div>
                  </div>
                  <div class="bottom-btn concern">
                    <div class="icon concern-icon"></div><span i18n-text="我的关注">Theo dõi</span>
                  </div>
                  <div class="bottom-btn subscribe">
                    <div class="icon subscribe-icon"></div><span i18n-text="我的预约">Lịch hẹn</span>
                  </div>
                  <div class="bottom-btn msg">
                    <div class="icon message-icon"></div><span i18n-text="我的消息">Tin nhắn</span>
                    <div class="msg-num singular" hidden=""></div>
                  </div>
                </div>
                <div class="anchor-center" hidden=""><i class="iconfont ali-zhubozhongxin1"></i> <span
                    i18n-text="主播中心">Trung tâm BLV</span></div>
              </div>
              <div class="logout-confirm" hidden="" style="display: none;">
                <div class="yes" i18n-text="确认退出">Xác nhận</div>
                <div class="no" i18n-text="取消">Hủy</div>
              </div>
            </div>
          </div>
          <div class="submenu subscribe-tip-submenu" hidden=""></div>
          <div class="submenu submenu-box grow-score-up-submenu float-clear" hidden=""><img
              src="<?php echo get_template_directory_uri(); ?>/assets/images/grow-score.png"> <span
              class="grow-score-tip"></span><br><span class="value"></span></div>
        </div>
      </div>
    </div>
  </div>
  
  <?php
    echo do_shortcode('[soco-user-forms-login]');
  ?>
  <?php  echo do_shortcode('[soco-user-forms-register]');?>
  <div class="level-mode" hidden="">
    <div>
      <div class="level-up"><span>0</span> <img
          src="<?php echo get_template_directory_uri(); ?>/assets/images/levelUp.png" alt="" srcset="">
      </div>
    </div>
  </div>
  <div class="header-modal" hidden=""></div>

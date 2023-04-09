<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php wp_head(); ?>
</head>

<?php
	$navbar_scheme   = get_theme_mod( 'navbar_scheme', 'navbar-light bg-light' ); // Get custom meta-value.
	$navbar_position = get_theme_mod( 'navbar_position', 'static' ); // Get custom meta-value.

	$search_enabled  = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.
?>

<body <?php body_class(); ?> style="">

<?php wp_body_open(); ?>

<a href="#main" class="visually-hidden-focusable"><?php esc_html_e( 'Skip to main content', 'socolive' ); ?></a>

<div id="wrapper">
	<header>
		<nav id="header" class="navbar navbar-expand-md <?php echo esc_attr( $navbar_scheme ); if ( isset( $navbar_position ) && 'fixed_top' === $navbar_position ) : echo ' fixed-top'; elseif ( isset( $navbar_position ) && 'fixed_bottom' === $navbar_position ) : echo ' fixed-bottom'; endif; if ( is_home() || is_front_page() ) : echo ' home'; endif; ?>">
			<div class="container">
				<a class="navbar-brand" href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php
						$header_logo = get_theme_mod( 'header_logo' ); // Get custom meta-value.

						if ( ! empty( $header_logo ) ) :
					?>
						<img src="<?php echo esc_url( $header_logo ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" />
					<?php
						else :
							echo esc_attr( get_bloginfo( 'name', 'display' ) );
						endif;
					?>
				</a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'socolive' ); ?>">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div id="navbar" class="collapse navbar-collapse">
					<?php
						// Loading WordPress Custom Menu (theme_location).
						wp_nav_menu(
							array(
								'menu_class'     => 'navbar-nav me-auto',
								'container'      => '',
								'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
								'walker'         => new WP_Bootstrap_Navwalker(),
								'theme_location' => 'main-menu',
							)
						);

						?>
							<div class="apply-menu"><a href="javascript:void(0)">Ứng tuyển BLV</a></div>
							<div class="no-login" style="">
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
										src="<?php echo get_template_directory_uri(); ?>/assets/images/none.png"> <span
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
						<?php
					?>
				</div><!-- /.navbar-collapse -->
			</div><!-- /.container -->
		</nav><!-- /#header -->
	</header>
  <?php
    echo do_shortcode('[soco-user-forms-login]');
    echo do_shortcode('[soco-user-forms-register]');
  ?>

</div>					
	<div class="header-modal" hidden="" style=""></div>					
	<main id="main" class="container"<?php if ( isset( $navbar_position ) && 'fixed_top' === $navbar_position ) : echo ' style="padding-top: 100px;"'; elseif ( isset( $navbar_position ) && 'fixed_bottom' === $navbar_position ) : echo ' style="padding-bottom: 100px;"'; endif; ?>>
		<?php
			// If Single or Archive (Category, Tag, Author or a Date based page).
			if ( is_single() || is_archive() ) :
		?>
			<div class="row">
				<div class="col-md-8 col-sm-12">
		<?php
			endif;
		?>

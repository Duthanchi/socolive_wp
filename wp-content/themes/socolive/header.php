<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Blog Site Template">
	<meta name="author" content="socolive">
	<link rel="shortcut icon" href="/wp-content/theme/socolive/images/logo.jpg">

	<?php
	wp_head()
		?>

</head>

<body>

	<!-- <header class="header text-center">	    
		<a class="site-title pt-lg-4 mb-0" href="index.html">Socolive</a>
		
		<nav class="navbar navbar-expand-lg navbar-dark" >
		   
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column" >
				<?php
				if (function_exists('the_custom_logo')) {
					$custom_logo_id = get_theme_mod('custom_logo');
					$logo = wp_get_attachment_image_src($custom_logo_id);
				}

				?>
				<img class="mb-3 mx-auto logo" src="<?php echo $logo[0] ?>" alt="logo" >
				
				<?php

				wp_nav_menu(
					array(
						'menu' => "primary",
						'container' => "",
						"them_location" => "primary",
						"items_wrap" => '<ul id="" class="navbar-nav flex-column text-sm-center text-md-left">%3$s</ul>',
					)
				)

					?>
			</div>
		</nav>
	</header> -->

	<nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<?php
				if (function_exists('the_custom_logo')) {
					$custom_logo_id = get_theme_mod('custom_logo');
					$logo = wp_get_attachment_image_src($custom_logo_id);
				}

				?>
				<img class="mb-3 mx-auto logo" src="<?php echo $logo[0] ?>" alt="logo">
			</div>

			<?php

			wp_nav_menu(
				array(
					'menu' => "primary",
					'container' => "",
					"them_location" => "primary",
					"items_wrap" => '<ul id="" class="navbar-nav flex-column text-sm-center text-md-left">%3$s</ul>',
				)
			)

				?>

			<!-- <button class="btn btn-danger navbar-btn singin">Đăng nhập</button>
	<button class="btn btn-danger navbar-btn signup">Đăng Ký</button> -->

	</nav>

	<div class="main-wrapper">
		<!-- <header class="page-title theme-bg-light text-center gradient py-5">
			<h1 class="heading"><?php the_title(); ?></h1>
		</header> -->
		<div class="living-room" id="living-room">

			<div class="video-inner inner">
				<div class="marquee-container" >
					<div class="marquee-box" style="animation-duration: 20.3616s;">
						<p>
							<img src="wp-content/themes/socolive/assets/images/football.png">
							<img src="wp-content/themes/socolive/assets/images/basketball.png">Link dự phòng <a
								href="https://bit.ly/socolive" rel="noopener noreferrer">bit.ly/socolive</a> ,
							Clip triệu view &amp; Tin tức độc quyền: <a href="https://socolive.news/"
								rel="nofollow">socolive.news</a> , Youtube: <a
								href="https://www.youtube.com/c/SocoliveOfficial" rel="nofollow">SocoliveOfficial</a> ,
							Chanel: <a href="https://t.me/socolive" rel="nofollow">t.me/socolive</a>, Tele hỗ trợ: <a
								href="https://t.me/socsansoc" rel="nofollow">@socsansoc</a> , Email:
							hoptacsocolive@gmail.com !
							<img src="wp-content/themes/socolive/assets/images/basketball.png">
							<img src="wp-content/themes/socolive/assets/images/football.png">
						</p>
					</div>
				</div>
				<div class="video-box">
					<link rel="stylesheet" href="//sta.vnres.co/web/css/public/include/video.css?v=1679056435186">
					<link rel="stylesheet" href="//sta.vnres.co/web/css/soco/include/video.css?v=1679056435186">
					<div class="video-player">
						<div id="video-player-tag" tag="index"></div>
						<div id="dplayer" class="dplayer"><video name="videoElement" style="width:100%;height:100%"
								id="dplayerVideo" class="centeredVideo" autoplay=""
								src="https://www.youtube.com/watch?v=OGPSgPZ9tlE&ab_channel=Arsenal">Your browser is
								too old which doesn't support HTML5 video.</video>
						</div><img class="big-play-btn" src="wp-content/themes/socolive/assets/images/play.png" hidden="" style="display: inline;">
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
							<div class="text schedule-text" flex="main:center cross:center">BLV hiện tại không có
								mặt~Đợi một chút quay lại nhé~</div>
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
								<div class="volumn-slider"><span class="volumn-line"></span>
									<div class="volumn-point"><span></span></div>
								</div>
								<div class="send-danmu" hidden="" style="display: none;">
									<div class="send-danmu-input"><span class="send-danmu-login">Đăng nhập</span>
										<div id="fullScreenInput" contenteditable="false"></div><img
											src="//sta.vnres.co/web/assets/soco/img/face.png" id="fullScreenEmoji"
											alt="">
										<div class="emoji-panel" hidden="">
											<div class="browBox">
												<ul></ul>
											</div>
										</div>
										<div class="message-tips show-tips" id="fullScreenTips" hidden="">Vui lòng không
											đăng nội dung nhạy cảm và tài khoản sẽ bị chặn nếu vi phạm nhiều lần!</div>
									</div><button class="send-danmu-enter cgcolor">Gửi</button>
									<div class="send-danmu-gift"><img src="//sta.vnres.co/web/assets/soco/img/gift.png"
											id="fullScreenGift">
										<div class="gift-block" hidden="">
											<div class="gift-top"></div>
											<div class="gift-bottom">
												<div class="gift-my-socre">Của tôiĐiểm:<span
														id="fullScreenSocre">0</span></div>
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
								<div class="bottomCtrlRight"><a class="goRoom" href="javascript:void(0)" style="">Vào
										phòng live</a> <a class="video-botton video-full"></a></div>
							</div>
						</div>
						<div class="refresh" hidden="">
							<div>Tải không thành công, hãy thử làm mới</div>
							<div id="refresh">Làm mới</div>
						</div>
						<div class="loading" id="videoLoading" hidden=""><img class="imgRotate"
								src="//sta.vnres.co/web/assets/soco/img/loading.png"> <img class="loading-logo"
								src="//sta.vnres.co/web/assets/soco/img/loading-logo.png">
							<p>Đang tải...</p>
						</div>
						<div class="bullet-wrapper">
							<div
								style="overflow: hidden; padding: 0px; margin: 0px; user-select: none; cursor: default; width: 810px; height: 454px; position: relative;">
							</div>
						</div>
					</div>
					<script src="//sta.vnres.co/web/js/lib/BulletScreenEngine.all.min.js"></script><a class="inLiveRoom"
						href="javascript:void(0)" hidden="" i18n-text="进入直播间" style="display: inline;">Vào phòng
						live</a>
				</div>
				<div class="video-list">
					<ul class="room-list">
					</ul>
				</div>
			</div>
		</div>

		<!-- <div class="appoinment-list inner">
			<div class="appoinment-swiper-container swiper-container-initialized swiper-container-horizontal">
				<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
					<div class="swiper-slide game swiper-slide-active">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/common/20210503/fca5954ec22137ad05325506d6645592"
									class="icon">
								<span>KAZ CUP</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								14:00
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230319/2a30e14fef1aaa6a421f623a854105db.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/2a30e14fef1aaa6a421f623a854105db.png">
									<span class="ellipsis">Kyran Shymkent</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230319/18f2b5046e644cd7f2d7ec29b9925b20.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/18f2b5046e644cd7f2d7ec29b9925b20.png"
										alt="">
									<span class="ellipsis">SD Family</span>
								</p>
							</div>
							<a href="javascript:;" data-id="0" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game swiper-slide-next">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/common/20210503/fca5954ec22137ad05325506d6645592"
									class="icon">
								<span>TALK SHOW</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								15:00
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230219/6a1426c9c7f9d3ac1ddda103e79cc11b.png"
										data-src="https://sta.cvndnss.com/file/common/20230219/6a1426c9c7f9d3ac1ddda103e79cc11b.png">
									<span class="ellipsis">Bàn Luận Bóng Đá</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230219/604ebfb46a9c9bcb4888250e278ecefb.png"
										data-src="https://sta.cvndnss.com/file/common/20230219/604ebfb46a9c9bcb4888250e278ecefb.png"
										alt="">
									<span class="ellipsis">Bàn Luận Bóng Đá</span>
								</p>
							</div>
							<a href="javascript:;" data-id="1" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/default/202202/11/f3ca56f46baa72406815281470283bb8"
									class="icon">
								<span>PBGC</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								15:00
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230321/b275fe8ab42f413f6b1cd4c76ab77c0a.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/b275fe8ab42f413f6b1cd4c76ab77c0a.png">
									<span class="ellipsis">Phoenix Fuelmasters</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230321/95c1d50d25d4b8b638ac6703e27983ba.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/95c1d50d25d4b8b638ac6703e27983ba.png"
										alt="">
									<span class="ellipsis">TNT Tropang Giga</span>
								</p>
							</div>
							<a href="javascript:;" data-id="2" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/default/202202/11/f3ca56f46baa72406815281470283bb8"
									class="icon">
								<span>WNBL</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								15:30
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230321/e9d1c38151a2f7a08ad8eabf78b74a9a.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/e9d1c38151a2f7a08ad8eabf78b74a9a.png">
									<span class="ellipsis">Southside W</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230321/0b18181f82b239d2952b6cec8964e382.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/0b18181f82b239d2952b6cec8964e382.png"
										alt="">
									<span class="ellipsis">Townsville W</span>
								</p>
							</div>
							<a href="javascript:;" data-id="3" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/common/20210503/fca5954ec22137ad05325506d6645592"
									class="icon">
								<span>KAZ CUP</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								17:00
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230319/325ecc9a4f009f8ec5329ccc1a9f7554.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/325ecc9a4f009f8ec5329ccc1a9f7554.png">
									<span class="ellipsis">Ulytau Zhezkazgan</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="https://sta.cvndnss.com/file/common/20230319/c5b1c1466036b6449584093be33490a6.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/c5b1c1466036b6449584093be33490a6.png"
										alt="">
									<span class="ellipsis">Akademiya Ontustik</span>
								</p>
							</div>
							<a href="javascript:;" data-id="4" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/default/202202/11/f3ca56f46baa72406815281470283bb8"
									class="icon">
								<span>PBGC</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								17:45
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="//sta.vnres.co/web/assets/soco/img/match-cover.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/3dac49701f7e321b020ab99caf6ab77f.jpg">
									<span class="ellipsis">Magnolia Hotshots</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="//sta.vnres.co/web/assets/soco/img/match-cover.png"
										data-src="https://sta.cvndnss.com/file/common/20230321/65ca0943e62230460ef6169e486bd2af.jpg"
										alt="">
									<span class="ellipsis">Meralco Bolts</span>
								</p>
							</div>
							<a href="javascript:;" data-id="5" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
					<div class="swiper-slide game">
						<div class="title">
							<div class="fl">
								<img src="https://sta.cvndnss.com/file/common/20210503/fca5954ec22137ad05325506d6645592"
									class="icon">
								<span>UEFA U19</span>
							</div>

							<div class="fr match-time">
								<span style="padding-right:5px;" i18n-text="今天">Hôm nay</span>
								18:00
							</div>
						</div>
						<div class="box">
							<div class="battle-team fl">
								<p>
									<img class="logo match-cover"
										src="//sta.vnres.co/web/assets/soco/img/match-cover.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/e6a4482d4295ed0a7b973ed439aab78b.png">
									<span class="ellipsis">Serbia(U19)(N)</span>
								</p>
								<p>
									<img class="logo match-cover"
										src="//sta.vnres.co/web/assets/soco/img/match-cover.png"
										data-src="https://sta.cvndnss.com/file/common/20230319/7660b5c75deedb46fcd12cf53dda24c0.png"
										alt="">
									<span class="ellipsis">Latvia(U19)</span>
								</p>
							</div>
							<a href="javascript:;" data-id="6" class="appoinment ">
								<span class="already-appoinment" i18n-text="已预约">Đã đặt trước</span>
								<span class="no-appoinment" i18n-text="预约">Đặt lịch</span>
							</a>
						</div>
					</div>
				</div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
			</div>
			<div class="swiper-button-prev appoinment-prev swiper-button-disabled" tabindex="0" role="button"
				aria-label="Previous slide" aria-disabled="true"><i class="iconfont ali-houtuismall"></i></div>
			<div class="swiper-button-next appoinment-next" tabindex="0" role="button" aria-label="Next slide"
				aria-disabled="false"><i class="iconfont ali-qianjinsmall"></i></div>
		</div> -->
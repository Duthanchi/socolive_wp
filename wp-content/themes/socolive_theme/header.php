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

	<!-- Form login -->
    <!-- <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/login.js"></script> -->
	<div class="login-window header-window" hidden=""><img class="close" id="close-login"
        src="<?php echo get_template_directory_uri(); ?>/assets/images/close.png">
        <div class="window-inner">
            <section class="content type-content">
            <div class="form"><input type="password " autocomplete="new-password" hidden="">
                <div class="form-title">Đăng nhập</div>
                <div class="phone-box">
                <div class="input-group">
                    <div class="country-code-box"><span class="country-code">+84</span>
                    <div class="triangle"></div>
                    </div>
                    <div class="country-code-list float-clear" hidden="" style="display: none;">
                    <ul>
                        <li class="country-code-title"><span>A</span></li>
                        <li class="country-code-item"><span class="left">Austria</span><span class="right">+43</span></li>
                        <li class="country-code-item"><span class="left">Argentina</span><span class="right">+54</span></li>
                        <li class="country-code-item"><span class="left">Australia</span><span class="right">+61</span></li>
                        <li class="country-code-item"><span class="left">Afghanistan</span><span class="right">+93</span></li>
                        <li class="country-code-item"><span class="left">Algeria</span><span class="right">+213</span></li>
                        <li class="country-code-item"><span class="left">Angola</span><span class="right">+244</span></li>
                        <li class="country-code-item"><span class="left">Ascension</span><span class="right">+247</span></li>
                        <li class="country-code-item"><span class="left">Albania</span><span class="right">+355</span></li>
                        <li class="country-code-item"><span class="left">Armenia</span><span class="right">+374</span></li>
                        <li class="country-code-item"><span class="left">Andorra</span><span class="right">+376</span></li>
                        <li class="country-code-item"><span class="left">Azerbaijan</span><span class="right">+994</span></li>
                        <li class="country-code-item"><span class="left">Anguilla</span><span class="right">+1264</span></li>
                        <li class="country-code-item"><span class="left">Antigua and Barbuda</span><span
                            class="right">+1268</span></li>
                        <li class="country-code-title"><span>B</span></li>
                        <li class="country-code-item"><span class="left">Belgium</span><span class="right">+32</span></li>
                        <li class="country-code-item"><span class="left">Brazil</span><span class="right">+55</span></li>
                        <li class="country-code-item"><span class="left">Burkina Faso</span><span class="right">+226</span>
                        </li>
                        <li class="country-code-item"><span class="left">Benin</span><span class="right">+229</span></li>
                        <li class="country-code-item"><span class="left">Burundi</span><span class="right">+257</span></li>
                        <li class="country-code-item"><span class="left">Botswana</span><span class="right">+267</span></li>
                        <li class="country-code-item"><span class="left">Bulgaria</span><span class="right">+359</span></li>
                        <li class="country-code-item"><span class="left">Belarus</span><span class="right">+375</span></li>
                        <li class="country-code-item"><span class="left">Belize</span><span class="right">+501</span></li>
                        <li class="country-code-item"><span class="left">Bolivia</span><span class="right">+591</span></li>
                        <li class="country-code-item"><span class="left">Brunei</span><span class="right">+673</span></li>
                        <li class="country-code-item"><span class="left">Bangladesh</span><span class="right">+880</span></li>
                        <li class="country-code-item"><span class="left">Bahrain</span><span class="right">+973</span></li>
                        <li class="country-code-item"><span class="left">Bahamas</span><span class="right">+1242</span></li>
                        <li class="country-code-item"><span class="left">Barbados</span><span class="right">+1246</span></li>
                        <li class="country-code-item"><span class="left">Bermuda Islands</span><span
                            class="right">+1441</span></li>
                        <li class="country-code-title"><span>C</span></li>
                        <li class="country-code-item"><span class="left">Canada</span><span class="right">+1</span></li>
                        <li class="country-code-item"><span class="left">Cuba</span><span class="right">+53</span></li>
                        <li class="country-code-item"><span class="left">Chile</span><span class="right">+56</span></li>
                        <li class="country-code-item"><span class="left">Colombia</span><span class="right">+57</span></li>
                        <li class="country-code-item"><span class="left">China</span><span class="right">+86</span></li>
                        <li class="country-code-item"><span class="left">Chad</span><span class="right">+235</span></li>
                        <li class="country-code-item"><span class="left">Central African Republic</span><span
                            class="right">+236</span></li>
                        <li class="country-code-item"><span class="left">Cameroon</span><span class="right">+237</span></li>
                        <li class="country-code-item"><span class="left">Congo</span><span class="right">+242</span></li>
                        <li class="country-code-item"><span class="left">Cyprus</span><span class="right">+357</span></li>
                        <li class="country-code-item"><span class="left">Czech Republic</span><span class="right">+420</span>
                        </li>
                        <li class="country-code-item"><span class="left">Costa Rica</span><span class="right">+506</span></li>
                        <li class="country-code-item"><span class="left">Cook Islands</span><span class="right">+682</span>
                        </li>
                        <li class="country-code-item"><span class="left">Cambodia </span><span class="right">+855</span></li>
                        <li class="country-code-item"><span class="left">Cayman Islands</span><span class="right">+1345</span>
                        </li>
                        <li class="country-code-title"><span>D</span></li>
                        <li class="country-code-item"><span class="left">Denmark</span><span class="right">+45</span></li>
                        <li class="country-code-item"><span class="left">Djibouti</span><span class="right">+253</span></li>
                        <li class="country-code-item"><span class="left">Dominica Republic</span><span
                            class="right">+1890</span></li>
                        <li class="country-code-title"><span>E</span></li>
                        <li class="country-code-item"><span class="left">Egypt</span><span class="right">+20</span></li>
                        <li class="country-code-item"><span class="left">Ethiopia</span><span class="right">+251</span></li>
                        <li class="country-code-item"><span class="left">Estonia</span><span class="right">+372</span></li>
                        <li class="country-code-item"><span class="left">EISalvador</span><span class="right">+503</span></li>
                        <li class="country-code-item"><span class="left">Ecuador</span><span class="right">+593</span></li>
                        <li class="country-code-title"><span>F</span></li>
                        <li class="country-code-item"><span class="left">France</span><span class="right">+33</span></li>
                        <li class="country-code-item"><span class="left">Finland</span><span class="right">+358</span></li>
                        <li class="country-code-item"><span class="left">French Guiana</span><span class="right">+594</span>
                        </li>
                        <li class="country-code-item"><span class="left">Fiji</span><span class="right">+679</span></li>
                        <li class="country-code-item"><span class="left">French Polynesia</span><span
                            class="right">+689</span></li>
                        <li class="country-code-title"><span>G</span></li>
                        <li class="country-code-item"><span class="left">Greece</span><span class="right">+30</span></li>
                        <li class="country-code-item"><span class="left">Germany</span><span class="right">+49</span></li>
                        <li class="country-code-item"><span class="left">Gambia</span><span class="right">+220</span></li>
                        <li class="country-code-item"><span class="left">Guinea</span><span class="right">+224</span></li>
                        <li class="country-code-item"><span class="left">Ghana</span><span class="right">+233</span></li>
                        <li class="country-code-item"><span class="left">Gabon</span><span class="right">+241</span></li>
                        <li class="country-code-item"><span class="left">Gibraltar</span><span class="right">+350</span></li>
                        <li class="country-code-item"><span class="left">Guatemala</span><span class="right">+502</span></li>
                        <li class="country-code-item"><span class="left">Guyana</span><span class="right">+592</span></li>
                        <li class="country-code-item"><span class="left">Georgia</span><span class="right">+995</span></li>
                        <li class="country-code-item"><span class="left">Guam</span><span class="right">+1671</span></li>
                        <li class="country-code-item"><span class="left">Grenada</span><span class="right">+1809</span></li>
                        <li class="country-code-title"><span>H</span></li>
                        <li class="country-code-item"><span class="left">Hungary</span><span class="right">+36</span></li>
                        <li class="country-code-item"><span class="left">Honduras</span><span class="right">+504</span></li>
                        <li class="country-code-item"><span class="left">Haiti</span><span class="right">+509</span></li>
                        <li class="country-code-item"><span class="left">Hong Kong</span><span class="right">+852</span></li>
                        <li class="country-code-title"><span>I</span></li>
                        <li class="country-code-item"><span class="left">Italy</span><span class="right">+39</span></li>
                        <li class="country-code-item"><span class="left">Indonesia</span><span class="right">+62</span></li>
                        <li class="country-code-item"><span class="left">India</span><span class="right">+91</span></li>
                        <li class="country-code-item"><span class="left">Iran</span><span class="right">+98</span></li>
                        <li class="country-code-item"><span class="left">Ivory Coast</span><span class="right">+225</span>
                        </li>
                        <li class="country-code-item"><span class="left">Ireland</span><span class="right">+353</span></li>
                        <li class="country-code-item"><span class="left">Iceland</span><span class="right">+354</span></li>
                        <li class="country-code-item"><span class="left">Iraq</span><span class="right">+964</span></li>
                        <li class="country-code-item"><span class="left">Israel</span><span class="right">+972</span></li>
                        <li class="country-code-title"><span>J</span></li>
                        <li class="country-code-item"><span class="left">Japan</span><span class="right">+81</span></li>
                        <li class="country-code-item"><span class="left">Jordan</span><span class="right">+962</span></li>
                        <li class="country-code-item"><span class="left">Jamaica</span><span class="right">+1876</span></li>
                        <li class="country-code-title"><span>K</span></li>
                        <li class="country-code-item"><span class="left">South Korea</span><span class="right">+82</span></li>
                        <li class="country-code-item"><span class="left">Kenya</span><span class="right">+254</span></li>
                        <li class="country-code-item"><span class="left">Kazakstan</span><span class="right">+327</span></li>
                        <li class="country-code-item"><span class="left">Kyrgyzstan</span><span class="right">+331</span></li>
                        <li class="country-code-item"><span class="left">Kuwait</span><span class="right">+965</span></li>
                        <li class="country-code-title"><span>L</span></li>
                        <li class="country-code-item"><span class="left">Libya</span><span class="right">+218</span></li>
                        <li class="country-code-item"><span class="left">Liberia</span><span class="right">+231</span></li>
                        <li class="country-code-item"><span class="left">Lesotho</span><span class="right">+266</span></li>
                        <li class="country-code-item"><span class="left">Luxembourg</span><span class="right">+352</span></li>
                        <li class="country-code-item"><span class="left">Lithuania</span><span class="right">+370</span></li>
                        <li class="country-code-item"><span class="left">Latvia</span><span class="right">+371</span></li>
                        <li class="country-code-item"><span class="left">Liechtenstein</span><span class="right">+423</span>
                        </li>
                        <li class="country-code-item"><span class="left">Laos</span><span class="right">+856</span></li>
                        <li class="country-code-item"><span class="left">Lebanon</span><span class="right">+961</span></li>
                        <li class="country-code-title"><span>M</span></li>
                        <li class="country-code-item"><span class="left">Mexico</span><span class="right">+52</span></li>
                        <li class="country-code-item"><span class="left">Malaysia</span><span class="right">+60</span></li>
                        <li class="country-code-item"><span class="left">Myanmar</span><span class="right">+95</span></li>
                        <li class="country-code-item"><span class="left">Morocco</span><span class="right">+212</span></li>
                        <li class="country-code-item"><span class="left">Mali</span><span class="right">+223</span></li>
                        <li class="country-code-item"><span class="left">Mauritius</span><span class="right">+230</span></li>
                        <li class="country-code-item"><span class="left">Mozambique</span><span class="right">+258</span></li>
                        <li class="country-code-item"><span class="left">Madagascar</span><span class="right">+261</span></li>
                        <li class="country-code-item"><span class="left">Malawi</span><span class="right">+265</span></li>
                        <li class="country-code-item"><span class="left">Malta</span><span class="right">+356</span></li>
                        <li class="country-code-item"><span class="left">Moldova</span><span class="right">+373</span></li>
                        <li class="country-code-item"><span class="left">Monaco</span><span class="right">+377</span></li>
                        <li class="country-code-item"><span class="left">Martinique</span><span class="right">+596</span></li>
                        <li class="country-code-item"><span class="left">Macao</span><span class="right">+853</span></li>
                        <li class="country-code-item"><span class="left">Maldives</span><span class="right">+960</span></li>
                        <li class="country-code-item"><span class="left">Mongolia</span><span class="right">+976</span></li>
                        <li class="country-code-item"><span class="left">Montserrat Islands</span><span
                            class="right">+1664</span></li>
                        <li class="country-code-item"><span class="left">Mariana Islands</span><span
                            class="right">+1670</span></li>
                        <li class="country-code-item"><span class="left">Montenegro</span><span class="right">+382</span></li>
                        <li class="country-code-title"><span>N</span></li>
                        <li class="country-code-item"><span class="left">Netherlands</span><span class="right">+31</span></li>
                        <li class="country-code-item"><span class="left">Norway</span><span class="right">+47</span></li>
                        <li class="country-code-item"><span class="left">New Zealand</span><span class="right">+64</span></li>
                        <li class="country-code-item"><span class="left">Niger</span><span class="right">+227</span></li>
                        <li class="country-code-item"><span class="left">Nigeria</span><span class="right">+234</span></li>
                        <li class="country-code-item"><span class="left">Namibia</span><span class="right">+264</span></li>
                        <li class="country-code-item"><span class="left">Nicaragua</span><span class="right">+505</span></li>
                        <li class="country-code-item"><span class="left">Netherlands Antilles</span><span
                            class="right">+599</span></li>
                        <li class="country-code-item"><span class="left">Nauru</span><span class="right">+674</span></li>
                        <li class="country-code-item"><span class="left">North Korea</span><span class="right">+850</span>
                        </li>
                        <li class="country-code-item"><span class="left">Nepal</span><span class="right">+977</span></li>
                        <li class="country-code-title"><span>O</span></li>
                        <li class="country-code-item"><span class="left">Oman</span><span class="right">+968</span></li>
                        <li class="country-code-title"><span>P</span></li>
                        <li class="country-code-item"><span class="left">Poland</span><span class="right">+48</span></li>
                        <li class="country-code-item"><span class="left">Peru</span><span class="right">+51</span></li>
                        <li class="country-code-item"><span class="left">Philippines</span><span class="right">+63</span></li>
                        <li class="country-code-item"><span class="left">Pakistan</span><span class="right">+92</span></li>
                        <li class="country-code-item"><span class="left">Portugal</span><span class="right">+351</span></li>
                        <li class="country-code-item"><span class="left">Panama</span><span class="right">+507</span></li>
                        <li class="country-code-item"><span class="left">Paraguay</span><span class="right">+595</span></li>
                        <li class="country-code-item"><span class="left">Papua New Cuinea</span><span
                            class="right">+675</span></li>
                        <li class="country-code-item"><span class="left">PuertoRico</span><span class="right">+1787</span>
                        </li>
                        <li class="country-code-title"><span>Q</span></li>
                        <li class="country-code-item"><span class="left">Qatar</span><span class="right">+974</span></li>
                        <li class="country-code-title"><span>R</span></li>
                        <li class="country-code-item"><span class="left">Russia</span><span class="right">+7</span></li>
                        <li class="country-code-item"><span class="left">Romania</span><span class="right">+40</span></li>
                        <li class="country-code-item"><span class="left">Reunion</span><span class="right">+262</span></li>
                        <li class="country-code-title"><span>S</span></li>
                        <li class="country-code-item"><span class="left">South Africa</span><span class="right">+27</span>
                        </li>
                        <li class="country-code-item"><span class="left">Spain</span><span class="right">+34</span></li>
                        <li class="country-code-item"><span class="left">Switzerland</span><span class="right">+41</span></li>
                        <li class="country-code-item"><span class="left">Sweden</span><span class="right">+46</span></li>
                        <li class="country-code-item"><span class="left">Singapore</span><span class="right">+65</span></li>
                        <li class="country-code-item"><span class="left">Sri Lanka</span><span class="right">+94</span></li>
                        <li class="country-code-item"><span class="left">Senegal</span><span class="right">+221</span></li>
                        <li class="country-code-item"><span class="left">Sierra Leone</span><span class="right">+232</span>
                        </li>
                        <li class="country-code-item"><span class="left">Sao Tome and Principe</span><span
                            class="right">+239</span></li>
                        <li class="country-code-item"><span class="left">Seychelles</span><span class="right">+248</span></li>
                        <li class="country-code-item"><span class="left">Sudan</span><span class="right">+249</span></li>
                        <li class="country-code-item"><span class="left">Somali</span><span class="right">+252</span></li>
                        <li class="country-code-item"><span class="left">Swaziland</span><span class="right">+268</span></li>
                        <li class="country-code-item"><span class="left">San Marino</span><span class="right">+378</span></li>
                        <li class="country-code-item"><span class="left">Slovenia</span><span class="right">+386</span></li>
                        <li class="country-code-item"><span class="left">Slovakia</span><span class="right">+421</span></li>
                        <li class="country-code-item"><span class="left">Suriname</span><span class="right">+597</span></li>
                        <li class="country-code-item"><span class="left">Solomon Islands</span><span class="right">+677</span>
                        </li>
                        <li class="country-code-item"><span class="left">Samoa Eastern</span><span class="right">+684</span>
                        </li>
                        <li class="country-code-item"><span class="left">Samoa Western</span><span class="right">+685</span>
                        </li>
                        <li class="country-code-item"><span class="left">Syria</span><span class="right">+963</span></li>
                        <li class="country-code-item"><span class="left">Saudi Arabia</span><span class="right">+966</span>
                        </li>
                        <li class="country-code-item"><span class="left">Saint Lucia</span><span class="right">+1758</span>
                        </li>
                        <li class="country-code-item"><span class="left">Saint Vincent</span><span class="right">+1784</span>
                        </li>
                        <li class="country-code-item"><span class="left">Serbia</span><span class="right">+382</span></li>
                        <li class="country-code-title"><span>T</span></li>
                        <li class="country-code-item"><span class="left">Thailand</span><span class="right">+66</span></li>
                        <li class="country-code-item"><span class="left">Turkey</span><span class="right">+90</span></li>
                        <li class="country-code-item"><span class="left">Tunisia</span><span class="right">+216</span></li>
                        <li class="country-code-item"><span class="left">Togo</span><span class="right">+228</span></li>
                        <li class="country-code-item"><span class="left">Tanzania</span><span class="right">+255</span></li>
                        <li class="country-code-item"><span class="left">Tonga</span><span class="right">+676</span></li>
                        <li class="country-code-item"><span class="left">Taiwan</span><span class="right">+886</span></li>
                        <li class="country-code-item"><span class="left">Tajikstan</span><span class="right">+992</span></li>
                        <li class="country-code-item"><span class="left">Turkmenistan</span><span class="right">+993</span>
                        </li>
                        <li class="country-code-item"><span class="left">Trinidad and Tobago</span><span
                            class="right">+1809</span></li>
                        <li class="country-code-title"><span>U</span></li>
                        <li class="country-code-item"><span class="left">United States of America</span><span
                            class="right">+1</span></li>
                        <li class="country-code-item"><span class="left">United Kiongdom</span><span class="right">+44</span>
                        </li>
                        <li class="country-code-item"><span class="left">Uzbekistan</span><span class="right">+233</span></li>
                        <li class="country-code-item"><span class="left">Uganda</span><span class="right">+256</span></li>
                        <li class="country-code-item"><span class="left">Ukraine</span><span class="right">+380</span></li>
                        <li class="country-code-item"><span class="left">Uruguay</span><span class="right">+598</span></li>
                        <li class="country-code-item"><span class="left">United Arab Emirates</span><span
                            class="right">+971</span></li>
                        <li class="country-code-title"><span>V</span></li>
                        <li class="country-code-item"><span class="left">Venezuela</span><span class="right">+58</span></li>
                        <li class="country-code-item"><span class="left">Vietnam</span><span class="right">+84</span></li>
                        <li class="country-code-title"><span>Y</span></li>
                        <li class="country-code-item"><span class="left">Yemen</span><span class="right">+967</span></li>
                        <li class="country-code-title"><span>Z</span></li>
                        <li class="country-code-item"><span class="left">Zaire</span><span class="right">+243</span></li>
                        <li class="country-code-item"><span class="left">Zambia</span><span class="right">+260</span></li>
                        <li class="country-code-item"><span class="left">Zimbabwe</span><span class="right">+263</span></li>
                    </ul>
                    </div><input class="input-phone" i18n-placeholder="请输入手机号码" placeholder="Nhập số điện thoại" type="tel"
                    maxlength="11">
                </div>
                <div class="error-tip"><span hidden="">Định dạng sai số điện thoại(vd: 987654321)</span></div>
                </div>
                <div class="or">Hoặc</div>
                <div class="account-box">
                <div class="input-group"><img class="icon"
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/user.svg"> <input
                    class="input-account" type="text" placeholder="Nhập tên đăng nhập" required=""></div>
                <div class="error-tip"><span hidden="">Nhập tên đăng nhập</span></div>
                </div>
                <div class="password-box">
                <div class="input-group"><img class="icon"
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/password.svg"> <input
                    class="input-password" type="password" placeholder="Nhập mật khẩu" required="">
                    <div class="eye"><i class="iconfont ali-zhenyan" hidden=""></i> <i class="iconfont ali-biyan"></i></div>
                </div>
                <div class="error-tip"><span hidden="">Nhập mật khẩu</span></div>
                </div>
                <div class="remeber-box"><img class="gou"
                    src="<?php echo get_template_directory_uri(); ?>/assets/images/gou.png"> <span
                    class="login-agree">Ghi nhớ đăng nhập</span></div>
                <div class="bottom"><input class="submit left-submit" type="submit" value="Đăng nhập" id="login">
                <div class="right-btn"><span class="register-jump">Đăng ký</span></div>
                </div>
            </div>
            </section>
        </div>
        </div>
	<!-- register -->
	<div class="register-window header-window" hidden=""><img class="close" id="close-register"
    src="<?php echo get_template_directory_uri(); ?>/assets/images/close.png">
    <div class="window-inner input-container">
    <section class="content type-content">
      <div class="form"><input type="password" autocomplete="new-password" hidden="">
        <div class="form-title">Đăng ký</div>
        <div class="phone-box">
          <div class="input-group">
            <div class="country-code-box"><span class="country-code">+84</span>
              <div class="triangle"></div>
            </div>
            <div class="country-code-list float-clear" hidden="" style="display: none;">
              <ul>
                <li class="country-code-title"><span>A</span></li>
                <li class="country-code-item"><span class="left">Austria</span><span class="right">+43</span></li>
                <li class="country-code-item"><span class="left">Argentina</span><span class="right">+54</span></li>
                <li class="country-code-item"><span class="left">Australia</span><span class="right">+61</span></li>
                <li class="country-code-item"><span class="left">Afghanistan</span><span class="right">+93</span></li>
                <li class="country-code-item"><span class="left">Algeria</span><span class="right">+213</span></li>
                <li class="country-code-item"><span class="left">Angola</span><span class="right">+244</span></li>
                <li class="country-code-item"><span class="left">Ascension</span><span class="right">+247</span></li>
                <li class="country-code-item"><span class="left">Albania</span><span class="right">+355</span></li>
                <li class="country-code-item"><span class="left">Armenia</span><span class="right">+374</span></li>
                <li class="country-code-item"><span class="left">Andorra</span><span class="right">+376</span></li>
                <li class="country-code-item"><span class="left">Azerbaijan</span><span class="right">+994</span></li>
                <li class="country-code-item"><span class="left">Anguilla</span><span class="right">+1264</span></li>
                <li class="country-code-item"><span class="left">Antigua and Barbuda</span><span
                    class="right">+1268</span></li>
                <li class="country-code-title"><span>B</span></li>
                <li class="country-code-item"><span class="left">Belgium</span><span class="right">+32</span></li>
                <li class="country-code-item"><span class="left">Brazil</span><span class="right">+55</span></li>
                <li class="country-code-item"><span class="left">Burkina Faso</span><span class="right">+226</span>
                </li>
                <li class="country-code-item"><span class="left">Benin</span><span class="right">+229</span></li>
                <li class="country-code-item"><span class="left">Burundi</span><span class="right">+257</span></li>
                <li class="country-code-item"><span class="left">Botswana</span><span class="right">+267</span></li>
                <li class="country-code-item"><span class="left">Bulgaria</span><span class="right">+359</span></li>
                <li class="country-code-item"><span class="left">Belarus</span><span class="right">+375</span></li>
                <li class="country-code-item"><span class="left">Belize</span><span class="right">+501</span></li>
                <li class="country-code-item"><span class="left">Bolivia</span><span class="right">+591</span></li>
                <li class="country-code-item"><span class="left">Brunei</span><span class="right">+673</span></li>
                <li class="country-code-item"><span class="left">Bangladesh</span><span class="right">+880</span></li>
                <li class="country-code-item"><span class="left">Bahrain</span><span class="right">+973</span></li>
                <li class="country-code-item"><span class="left">Bahamas</span><span class="right">+1242</span></li>
                <li class="country-code-item"><span class="left">Barbados</span><span class="right">+1246</span></li>
                <li class="country-code-item"><span class="left">Bermuda Islands</span><span
                    class="right">+1441</span></li>
                <li class="country-code-title"><span>C</span></li>
                <li class="country-code-item"><span class="left">Canada</span><span class="right">+1</span></li>
                <li class="country-code-item"><span class="left">Cuba</span><span class="right">+53</span></li>
                <li class="country-code-item"><span class="left">Chile</span><span class="right">+56</span></li>
                <li class="country-code-item"><span class="left">Colombia</span><span class="right">+57</span></li>
                <li class="country-code-item"><span class="left">China</span><span class="right">+86</span></li>
                <li class="country-code-item"><span class="left">Chad</span><span class="right">+235</span></li>
                <li class="country-code-item"><span class="left">Central African Republic</span><span
                    class="right">+236</span></li>
                <li class="country-code-item"><span class="left">Cameroon</span><span class="right">+237</span></li>
                <li class="country-code-item"><span class="left">Congo</span><span class="right">+242</span></li>
                <li class="country-code-item"><span class="left">Cyprus</span><span class="right">+357</span></li>
                <li class="country-code-item"><span class="left">Czech Republic</span><span class="right">+420</span>
                </li>
                <li class="country-code-item"><span class="left">Costa Rica</span><span class="right">+506</span></li>
                <li class="country-code-item"><span class="left">Cook Islands</span><span class="right">+682</span>
                </li>
                <li class="country-code-item"><span class="left">Cambodia </span><span class="right">+855</span></li>
                <li class="country-code-item"><span class="left">Cayman Islands</span><span class="right">+1345</span>
                </li>
                <li class="country-code-title"><span>D</span></li>
                <li class="country-code-item"><span class="left">Denmark</span><span class="right">+45</span></li>
                <li class="country-code-item"><span class="left">Djibouti</span><span class="right">+253</span></li>
                <li class="country-code-item"><span class="left">Dominica Republic</span><span
                    class="right">+1890</span></li>
                <li class="country-code-title"><span>E</span></li>
                <li class="country-code-item"><span class="left">Egypt</span><span class="right">+20</span></li>
                <li class="country-code-item"><span class="left">Ethiopia</span><span class="right">+251</span></li>
                <li class="country-code-item"><span class="left">Estonia</span><span class="right">+372</span></li>
                <li class="country-code-item"><span class="left">EISalvador</span><span class="right">+503</span></li>
                <li class="country-code-item"><span class="left">Ecuador</span><span class="right">+593</span></li>
                <li class="country-code-title"><span>F</span></li>
                <li class="country-code-item"><span class="left">France</span><span class="right">+33</span></li>
                <li class="country-code-item"><span class="left">Finland</span><span class="right">+358</span></li>
                <li class="country-code-item"><span class="left">French Guiana</span><span class="right">+594</span>
                </li>
                <li class="country-code-item"><span class="left">Fiji</span><span class="right">+679</span></li>
                <li class="country-code-item"><span class="left">French Polynesia</span><span
                    class="right">+689</span></li>
                <li class="country-code-title"><span>G</span></li>
                <li class="country-code-item"><span class="left">Greece</span><span class="right">+30</span></li>
                <li class="country-code-item"><span class="left">Germany</span><span class="right">+49</span></li>
                <li class="country-code-item"><span class="left">Gambia</span><span class="right">+220</span></li>
                <li class="country-code-item"><span class="left">Guinea</span><span class="right">+224</span></li>
                <li class="country-code-item"><span class="left">Ghana</span><span class="right">+233</span></li>
                <li class="country-code-item"><span class="left">Gabon</span><span class="right">+241</span></li>
                <li class="country-code-item"><span class="left">Gibraltar</span><span class="right">+350</span></li>
                <li class="country-code-item"><span class="left">Guatemala</span><span class="right">+502</span></li>
                <li class="country-code-item"><span class="left">Guyana</span><span class="right">+592</span></li>
                <li class="country-code-item"><span class="left">Georgia</span><span class="right">+995</span></li>
                <li class="country-code-item"><span class="left">Guam</span><span class="right">+1671</span></li>
                <li class="country-code-item"><span class="left">Grenada</span><span class="right">+1809</span></li>
                <li class="country-code-title"><span>H</span></li>
                <li class="country-code-item"><span class="left">Hungary</span><span class="right">+36</span></li>
                <li class="country-code-item"><span class="left">Honduras</span><span class="right">+504</span></li>
                <li class="country-code-item"><span class="left">Haiti</span><span class="right">+509</span></li>
                <li class="country-code-item"><span class="left">Hong Kong</span><span class="right">+852</span></li>
                <li class="country-code-title"><span>I</span></li>
                <li class="country-code-item"><span class="left">Italy</span><span class="right">+39</span></li>
                <li class="country-code-item"><span class="left">Indonesia</span><span class="right">+62</span></li>
                <li class="country-code-item"><span class="left">India</span><span class="right">+91</span></li>
                <li class="country-code-item"><span class="left">Iran</span><span class="right">+98</span></li>
                <li class="country-code-item"><span class="left">Ivory Coast</span><span class="right">+225</span>
                </li>
                <li class="country-code-item"><span class="left">Ireland</span><span class="right">+353</span></li>
                <li class="country-code-item"><span class="left">Iceland</span><span class="right">+354</span></li>
                <li class="country-code-item"><span class="left">Iraq</span><span class="right">+964</span></li>
                <li class="country-code-item"><span class="left">Israel</span><span class="right">+972</span></li>
                <li class="country-code-title"><span>J</span></li>
                <li class="country-code-item"><span class="left">Japan</span><span class="right">+81</span></li>
                <li class="country-code-item"><span class="left">Jordan</span><span class="right">+962</span></li>
                <li class="country-code-item"><span class="left">Jamaica</span><span class="right">+1876</span></li>
                <li class="country-code-title"><span>K</span></li>
                <li class="country-code-item"><span class="left">South Korea</span><span class="right">+82</span></li>
                <li class="country-code-item"><span class="left">Kenya</span><span class="right">+254</span></li>
                <li class="country-code-item"><span class="left">Kazakstan</span><span class="right">+327</span></li>
                <li class="country-code-item"><span class="left">Kyrgyzstan</span><span class="right">+331</span></li>
                <li class="country-code-item"><span class="left">Kuwait</span><span class="right">+965</span></li>
                <li class="country-code-title"><span>L</span></li>
                <li class="country-code-item"><span class="left">Libya</span><span class="right">+218</span></li>
                <li class="country-code-item"><span class="left">Liberia</span><span class="right">+231</span></li>
                <li class="country-code-item"><span class="left">Lesotho</span><span class="right">+266</span></li>
                <li class="country-code-item"><span class="left">Luxembourg</span><span class="right">+352</span></li>
                <li class="country-code-item"><span class="left">Lithuania</span><span class="right">+370</span></li>
                <li class="country-code-item"><span class="left">Latvia</span><span class="right">+371</span></li>
                <li class="country-code-item"><span class="left">Liechtenstein</span><span class="right">+423</span>
                </li>
                <li class="country-code-item"><span class="left">Laos</span><span class="right">+856</span></li>
                <li class="country-code-item"><span class="left">Lebanon</span><span class="right">+961</span></li>
                <li class="country-code-title"><span>M</span></li>
                <li class="country-code-item"><span class="left">Mexico</span><span class="right">+52</span></li>
                <li class="country-code-item"><span class="left">Malaysia</span><span class="right">+60</span></li>
                <li class="country-code-item"><span class="left">Myanmar</span><span class="right">+95</span></li>
                <li class="country-code-item"><span class="left">Morocco</span><span class="right">+212</span></li>
                <li class="country-code-item"><span class="left">Mali</span><span class="right">+223</span></li>
                <li class="country-code-item"><span class="left">Mauritius</span><span class="right">+230</span></li>
                <li class="country-code-item"><span class="left">Mozambique</span><span class="right">+258</span></li>
                <li class="country-code-item"><span class="left">Madagascar</span><span class="right">+261</span></li>
                <li class="country-code-item"><span class="left">Malawi</span><span class="right">+265</span></li>
                <li class="country-code-item"><span class="left">Malta</span><span class="right">+356</span></li>
                <li class="country-code-item"><span class="left">Moldova</span><span class="right">+373</span></li>
                <li class="country-code-item"><span class="left">Monaco</span><span class="right">+377</span></li>
                <li class="country-code-item"><span class="left">Martinique</span><span class="right">+596</span></li>
                <li class="country-code-item"><span class="left">Macao</span><span class="right">+853</span></li>
                <li class="country-code-item"><span class="left">Maldives</span><span class="right">+960</span></li>
                <li class="country-code-item"><span class="left">Mongolia</span><span class="right">+976</span></li>
                <li class="country-code-item"><span class="left">Montserrat Islands</span><span
                    class="right">+1664</span></li>
                <li class="country-code-item"><span class="left">Mariana Islands</span><span
                    class="right">+1670</span></li>
                <li class="country-code-item"><span class="left">Montenegro</span><span class="right">+382</span></li>
                <li class="country-code-title"><span>N</span></li>
                <li class="country-code-item"><span class="left">Netherlands</span><span class="right">+31</span></li>
                <li class="country-code-item"><span class="left">Norway</span><span class="right">+47</span></li>
                <li class="country-code-item"><span class="left">New Zealand</span><span class="right">+64</span></li>
                <li class="country-code-item"><span class="left">Niger</span><span class="right">+227</span></li>
                <li class="country-code-item"><span class="left">Nigeria</span><span class="right">+234</span></li>
                <li class="country-code-item"><span class="left">Namibia</span><span class="right">+264</span></li>
                <li class="country-code-item"><span class="left">Nicaragua</span><span class="right">+505</span></li>
                <li class="country-code-item"><span class="left">Netherlands Antilles</span><span
                    class="right">+599</span></li>
                <li class="country-code-item"><span class="left">Nauru</span><span class="right">+674</span></li>
                <li class="country-code-item"><span class="left">North Korea</span><span class="right">+850</span>
                </li>
                <li class="country-code-item"><span class="left">Nepal</span><span class="right">+977</span></li>
                <li class="country-code-title"><span>O</span></li>
                <li class="country-code-item"><span class="left">Oman</span><span class="right">+968</span></li>
                <li class="country-code-title"><span>P</span></li>
                <li class="country-code-item"><span class="left">Poland</span><span class="right">+48</span></li>
                <li class="country-code-item"><span class="left">Peru</span><span class="right">+51</span></li>
                <li class="country-code-item"><span class="left">Philippines</span><span class="right">+63</span></li>
                <li class="country-code-item"><span class="left">Pakistan</span><span class="right">+92</span></li>
                <li class="country-code-item"><span class="left">Portugal</span><span class="right">+351</span></li>
                <li class="country-code-item"><span class="left">Panama</span><span class="right">+507</span></li>
                <li class="country-code-item"><span class="left">Paraguay</span><span class="right">+595</span></li>
                <li class="country-code-item"><span class="left">Papua New Cuinea</span><span
                    class="right">+675</span></li>
                <li class="country-code-item"><span class="left">PuertoRico</span><span class="right">+1787</span>
                </li>
                <li class="country-code-title"><span>Q</span></li>
                <li class="country-code-item"><span class="left">Qatar</span><span class="right">+974</span></li>
                <li class="country-code-title"><span>R</span></li>
                <li class="country-code-item"><span class="left">Russia</span><span class="right">+7</span></li>
                <li class="country-code-item"><span class="left">Romania</span><span class="right">+40</span></li>
                <li class="country-code-item"><span class="left">Reunion</span><span class="right">+262</span></li>
                <li class="country-code-title"><span>S</span></li>
                <li class="country-code-item"><span class="left">South Africa</span><span class="right">+27</span>
                </li>
                <li class="country-code-item"><span class="left">Spain</span><span class="right">+34</span></li>
                <li class="country-code-item"><span class="left">Switzerland</span><span class="right">+41</span></li>
                <li class="country-code-item"><span class="left">Sweden</span><span class="right">+46</span></li>
                <li class="country-code-item"><span class="left">Singapore</span><span class="right">+65</span></li>
                <li class="country-code-item"><span class="left">Sri Lanka</span><span class="right">+94</span></li>
                <li class="country-code-item"><span class="left">Senegal</span><span class="right">+221</span></li>
                <li class="country-code-item"><span class="left">Sierra Leone</span><span class="right">+232</span>
                </li>
                <li class="country-code-item"><span class="left">Sao Tome and Principe</span><span
                    class="right">+239</span></li>
                <li class="country-code-item"><span class="left">Seychelles</span><span class="right">+248</span></li>
                <li class="country-code-item"><span class="left">Sudan</span><span class="right">+249</span></li>
                <li class="country-code-item"><span class="left">Somali</span><span class="right">+252</span></li>
                <li class="country-code-item"><span class="left">Swaziland</span><span class="right">+268</span></li>
                <li class="country-code-item"><span class="left">San Marino</span><span class="right">+378</span></li>
                <li class="country-code-item"><span class="left">Slovenia</span><span class="right">+386</span></li>
                <li class="country-code-item"><span class="left">Slovakia</span><span class="right">+421</span></li>
                <li class="country-code-item"><span class="left">Suriname</span><span class="right">+597</span></li>
                <li class="country-code-item"><span class="left">Solomon Islands</span><span class="right">+677</span>
                </li>
                <li class="country-code-item"><span class="left">Samoa Eastern</span><span class="right">+684</span>
                </li>
                <li class="country-code-item"><span class="left">Samoa Western</span><span class="right">+685</span>
                </li>
                <li class="country-code-item"><span class="left">Syria</span><span class="right">+963</span></li>
                <li class="country-code-item"><span class="left">Saudi Arabia</span><span class="right">+966</span>
                </li>
                <li class="country-code-item"><span class="left">Saint Lucia</span><span class="right">+1758</span>
                </li>
                <li class="country-code-item"><span class="left">Saint Vincent</span><span class="right">+1784</span>
                </li>
                <li class="country-code-item"><span class="left">Serbia</span><span class="right">+382</span></li>
                <li class="country-code-title"><span>T</span></li>
                <li class="country-code-item"><span class="left">Thailand</span><span class="right">+66</span></li>
                <li class="country-code-item"><span class="left">Turkey</span><span class="right">+90</span></li>
                <li class="country-code-item"><span class="left">Tunisia</span><span class="right">+216</span></li>
                <li class="country-code-item"><span class="left">Togo</span><span class="right">+228</span></li>
                <li class="country-code-item"><span class="left">Tanzania</span><span class="right">+255</span></li>
                <li class="country-code-item"><span class="left">Tonga</span><span class="right">+676</span></li>
                <li class="country-code-item"><span class="left">Taiwan</span><span class="right">+886</span></li>
                <li class="country-code-item"><span class="left">Tajikstan</span><span class="right">+992</span></li>
                <li class="country-code-item"><span class="left">Turkmenistan</span><span class="right">+993</span>
                </li>
                <li class="country-code-item"><span class="left">Trinidad and Tobago</span><span
                    class="right">+1809</span></li>
                <li class="country-code-title"><span>U</span></li>
                <li class="country-code-item"><span class="left">United States of America</span><span
                    class="right">+1</span></li>
                <li class="country-code-item"><span class="left">United Kiongdom</span><span class="right">+44</span>
                </li>
                <li class="country-code-item"><span class="left">Uzbekistan</span><span class="right">+233</span></li>
                <li class="country-code-item"><span class="left">Uganda</span><span class="right">+256</span></li>
                <li class="country-code-item"><span class="left">Ukraine</span><span class="right">+380</span></li>
                <li class="country-code-item"><span class="left">Uruguay</span><span class="right">+598</span></li>
                <li class="country-code-item"><span class="left">United Arab Emirates</span><span
                    class="right">+971</span></li>
                <li class="country-code-title"><span>V</span></li>
                <li class="country-code-item"><span class="left">Venezuela</span><span class="right">+58</span></li>
                <li class="country-code-item"><span class="left">Vietnam</span><span class="right">+84</span></li>
                <li class="country-code-title"><span>Y</span></li>
                <li class="country-code-item"><span class="left">Yemen</span><span class="right">+967</span></li>
                <li class="country-code-title"><span>Z</span></li>
                <li class="country-code-item"><span class="left">Zaire</span><span class="right">+243</span></li>
                <li class="country-code-item"><span class="left">Zambia</span><span class="right">+260</span></li>
                <li class="country-code-item"><span class="left">Zimbabwe</span><span class="right">+263</span></li>
              </ul>
            </div><input class="input-phone" i18n-placeholder="请输入手机号码" placeholder="Nhập số điện thoại" type="tel"
              maxlength="11">
          </div>
          <div class="error-tip"><span hidden="">Định dạng sai số điện thoại(vd: 987654321)</span></div>
        </div>
        <div class="verify-box" hidden="">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/password.svg"> <input
              class="input-check" i18n-placeholder="获取并输入验证码" placeholder="Nhận và nhập mã xác minh" type="tel"
              maxlength="5">
            <div class="btn-verify"><span class="verify-text" i18n-text="获取验证码">Nhận mã xác minh</span></div>
            <!-- <img class="check-img" src="https://socolive10.tv/webApi/api/kaptcha?t=1679981279483&mobile=1"> -->
          </div>
          <div class="error-tip"><span i18n-text="请输入4位验证码" hidden="">Nhập 4 ký tự mã xác minh</span></div>
        </div>
        <div class="check-box" hidden="" style="display:none">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/password.svg"> <input
              class="input-check" i18n-placeholder="请输入图片上的验证码" placeholder="Nhập mã xác minh trong hình" type="text"
              maxlength="5"> <img class="check-img" src="https://socolive10.tv/webApi/api/kaptcha?t=1679981279483&mobile=1"></div>
          <div class="error-tip"><span i18n-text="请输入5位验证码" hidden="">Nhập 5 ký tự mã xác minh</span></div>
        </div>
        <div class="or" style="display:none">Hoặc</div>
        <div class="account-box">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/user.svg"> <input
              class="input-account" type="text" placeholder="Nhập tên đăng nhập" required=""></div>
          <div class="error-tip"><span hidden="">Nhập tên đăng nhập</span></div>
        </div>
        <div class="captcha-box" hidden="">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/password.svg"> <input
              class="input-check" i18n-placeholder="请输入图片上的验证码" placeholder="Nhập mã xác minh trong hình" type="text"
              maxlength="5"> <img class="check-img" src="https://socolive10.tv/webApi/api/kaptcha?t=1679981279483&mobile=1"></div>
          <div class="error-tip"><span i18n-text="请输入5位验证码" hidden="">Nhập 5 ký tự mã xác minh</span></div>
        </div>
        <div class="nickname-box">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/user.svg"> <input
              class="input-nickname" i18n-placeholder="请输入用户名" placeholder="Đặt biệt danh" type="text" maxlength="15">
          </div>
          <div class="error-tip"><span i18n-text="请输入2~15位用户名" hidden="">Nhập 2~15 ký tự đăng nhập</span></div>
        </div>
        <div class="password-box">
          <div class="input-group"><img class="icon"
              src="<?php echo get_template_directory_uri(); ?>/assets/images/password.svg"> <input
              class="input-password" type="password" placeholder="Nhập mật khẩu" required="">
            <div class="eye"><i class="iconfont ali-zhenyan" hidden=""></i> <i class="iconfont ali-biyan"></i></div>
          </div>
          <div class="error-tip"><span hidden="">Nhập mật khẩu</span></div>
        </div>
        <div class="bottom">
          <div class="left-btn"><span class="login-jump">Đăng nhập</span></div><input class="submit right-submit"
            type="submit" value="Đăng ký">
        </div>
      </div>
    </section>
  </div>
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

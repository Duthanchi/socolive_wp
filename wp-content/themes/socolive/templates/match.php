<?php /* Template Name: Match */?>
<?php

get_header();

?>
<div class="header-modal" hidden=""></div>
<div class="match-wrapper">
  <div class="date-list">
    <ul>
      <li class="item today active" data-tag="1" data-date=""><span class="day">Hôm nay</span><br><span
          class="date"></span></li>
      <li class="item" data-tag="2" data-date=""><span class="day"></span><br><span class="date"></span></li>
      <li class="item" data-tag="3" data-date=""><span class="day"></span><br><span class="date"></span></li>
      <li class="item" data-tag="4" data-date=""><span class="day"></span><br><span class="date"></span></li>
      <li class="item" data-tag="5" data-date=""><span class="day"></span><br><span class="date"></span></li>
      <li class="item" data-tag="6" data-date=""><span class="day"></span><br><span class="date"></span></li>
      <li class="item" data-tag="7" data-date=""><span class="day"></span><br><span class="date"></span></li>
    </ul>
  </div>
  <div class="match-box">
    <div class="match-loading" style="display: none;"><img
        src="<?php echo get_template_directory_uri(); ?>/assets/images/loading.gif"></div>
    <div class="match-none" hidden="" style="display: none;"><img
        src="<?php echo get_template_directory_uri(); ?>/assets/images/none2.png"><br><span>Danh sách
        trống~</span></div>
    <div class="match-data active" data-tag="1" hidden="">
    </div>
    <div class="match-data" data-tag="2" hidden=""></div>
    <div class="match-data" data-tag="3" hidden=""></div>
    <div class="match-data" data-tag="4" hidden=""></div>
    <div class="match-data" data-tag="5" hidden=""></div>
    <div class="match-data" data-tag="6" hidden=""></div>
    <div class="match-data" data-tag="7" hidden=""></div>
  </div>
</div>

<?php

get_footer();

?>
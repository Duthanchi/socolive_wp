<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/footer.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/footer(1).css">
  <footer class="footer-wrapper">
    <div class="inner clearfix">
      <div class="logo-footer">
         <?php dynamic_sidebar( 'first-footer-widget-area' ); ?>
      </div>
      <div class="guide" >
        <?php dynamic_sidebar( 'second-footer-widget-area' ); ?>
      </div>
      <div class="desc" style=" display: flex; justify-content: center; color: #fff;">
        <?php dynamic_sidebar( 'third-footer-widget-area' ); ?>
      </div>
    </div>
  </footer>  
  
  </div>
    </footer> 
        </div>
        <script type="text/javascript" defer="" data-pmdelayedscript="https://s4.cnzz.com/z_stat.php?id=1280574579" data-cfasync="false" data-no-optimize="1" data-no-defer="1" data-no-minify="1" src="https://s4.cnzz.com/z_stat.php?id=1280574579"></script>
        <?php 
            wp_footer();
        ?>
    </body>
</html> 
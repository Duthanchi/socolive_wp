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
        <?php 
            wp_footer();
        ?>
    </body>
</html> 
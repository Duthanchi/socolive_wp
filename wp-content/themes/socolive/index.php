<?php

get_header(); ?>
<main id="content">
    <!--container-->
    <div class="container">
        <!--row-->
        <div class="row">
                    <!--col-lg-8-->
                    <?php 
                    $Socolive_content_layout = esc_attr(get_theme_mod('Socolive_content_layout','align-content-right'));
                    if($Socolive_content_layout == "align-content-left")
                    { ?>
                    <aside class="col-lg-4 sidebar-left">
                        <?php get_sidebar();?>
                    </aside>
                    <?php }
                    elseif($Socolive_content_layout == "grid-left-sidebar")
                    { ?>
                    <aside class="col-lg-4 sidebar-left">
                        <?php get_sidebar();?>
                    </aside>
                    <?php }
                    if($Socolive_content_layout == "align-content-right"){ ?>
                    <div class="col-lg-8 content-right">
                        <?php get_template_part('template-parts/content', get_post_format()); ?>
                    </div>
                    <?php } elseif($Socolive_content_layout == "align-content-left") { ?>
                    <div class="col-lg-8 content-right">
                        <?php get_template_part('template-parts/content', get_post_format()); ?>
                    </div>
                    <?php } elseif($Socolive_content_layout == "full-width-content") { ?>
                     <div class="col-lg-12">
                        <?php get_template_part('template-parts/content', get_post_format()); ?>
                    </div>
                     <?php }  if($Socolive_content_layout == "grid-left-sidebar"){ ?>
                    <div class="col-lg-8 content-right">
                        <?php get_template_part('content','grid'); ?>
                    </div>
                    <?php } elseif($Socolive_content_layout == "grid-right-sidebar") { ?>
                    <div class="col-lg-8 content-right">
                        <?php get_template_part('content','grid'); ?>
                    </div>
                    <?php } elseif($Socolive_content_layout == "grid-fullwidth") { ?>
                     <div class="col-lg-12">
                       <?php get_template_part('content','grid'); ?>
                    </div>
                     <?php }  ?>
                    
                    <!--/col-lg-8-->
                    <?php if($Socolive_content_layout == "align-content-right")  { ?>
                    <!--col-lg-4-->
                    <aside class="col-lg-4 sidebar-right">
                        <?php get_sidebar();?>
                    </aside>
                    <!--/col-lg-4-->
                    <?php } 
                    elseif($Socolive_content_layout == "grid-right-sidebar")
                    { ?>
                    <aside class="col-lg-4 sidebar-right">
                        <?php get_sidebar();?>
                    </aside>
                    <?php }?>
        </div><!--/row-->
    </div><!--/container-->
</main>                
<?php
get_footer();
?>
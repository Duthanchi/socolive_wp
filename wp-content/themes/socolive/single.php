<?php 
	get_header()
?>
	<article class="content px-3 py-5 p-md-5">
	<header class="content-header">
            <div class="meta mb-3"><span class="date"><?php the_date(); ?></span>
            <?php 
                the_tags('<span class="tag"><i class="fa fa-tag"></i>', '</span><span class="tag"><i class="fa fa-tag"></i>','</span>');
            ?>
            
            <span class="comment"><a href="#comments"><i class='fa fa-comment'></i> 3 comments</a></span></div>
    </header>
	<?php 
		if(have_posts()){
			while( have_posts() ){
				the_post();
                get_template_part('template-parts/content', 'page'); 
			}
		}
	?>

	</article>
    
    <?php 
    	wp_footer();
    ?>



<div class="col-md-12 bs-card-box padding-20">
	<div class="col-lg-8">
		<div class="bs-card-box padding-20">
			<?php if( have_posts()) :  the_post(); ?>
			<?php the_content(); ?>
			<?php endif; 
				while ( have_posts() ) : the_post();
				// Include the page
				the_content();
				comments_template( '', true ); // show comments
				
				endwhile;
			?>	
		</div>
	</div>

<?php
/*Template Name: News*/
get_header();
query_posts(array(
   'post_type' => 'news'
)); ?>
<?php
while (have_posts()) : the_post(); ?>
<h2 class="news-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
<?php $price_base = get_post_meta( get_the_ID(), 'score', true ); ?>
<p><?php echo $price_base; ?></p>
<p class="news-excerpt"><?php the_excerpt(); ?></p>

<?php endwhile;

get_footer();
?>

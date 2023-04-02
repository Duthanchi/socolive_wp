<?php
/**
 * Template Name: Live
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @package Blogus
 */ 
get_header();
?>
<?php echo do_shortcode('[soco_chat_form]') ?>
<?php 
get_footer();
?>
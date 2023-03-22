<?php
    # Adds dynamic title tag support
    function socolive_theme_support(){
        add_theme_support('title-tag');
        add_theme_support('custom-logo');
        add_theme_support('post-thumbnails');

    }

    add_action('after_setup_theme', 'socolive_theme_support');

    function socolive_menus(){
        $locations = array(
            'primary'=>"Desktop primary menu Left sidebar",
            'footer'=>"Footer Menu Items",
        );
        register_nav_menus($locations);    
    }

    add_action('init', "socolive_menus");

    # Regiester styles
    function socolive_register_styles(){
        $wp_version = wp_get_theme()->get('Version');
        wp_enqueue_style('socolive-style', get_template_directory_uri() . "/style.css", array('socolive-bootstrap'),  $wp_version, 'all');
        wp_enqueue_style('socolive-bootstrap',"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", array(), '4.4.1', 'all');
        wp_enqueue_style('socolive-fontawesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css", array(), '5.13.0', 'all');
    }

    add_action('wp_enqueue_scripts', 'socolive_register_styles');

    # Regiester script
    function socolive_register_scripts(){
        wp_enqueue_script('socolive-jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", array(), '3.4.1',true);
        wp_enqueue_script('socolive-popper', "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), '1.16.0',true);
        wp_enqueue_script('socolive-bootstrap', "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js", array(), '4.4.1',true);
        wp_enqueue_script('socolive-main', get_template_directory_uri() . "/assets/js/main.js",array(), '1.0',true);
        wp_enqueue_script('socolive-dplayer',"https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.10.2/DPlayer.min.js",array(), '1.0',true);
       
    }

    add_action('wp_enqueue_scripts', 'socolive_register_scripts');

    /*Custom Post type start*/
    function cw_post_type_footballs() {
        $supports = array(
        'title', // post title
        'editor', // post content
        'author', // post author
        'thumbnail', // featured images
        'excerpt', // post excerpt
        'custom-fields', // custom fields
        'comments', // post comments
        'revisions', // post revisions
        'post-formats', // post formats
        );
        $labels = array(
        'name' => _x('football', 'plural'),
        'singular_name' => _x('footballs', 'singular'),
        'menu_name' => _x('Football', 'admin menu'),
        'name_admin_bar' => _x('Football', 'admin bar'),
        'add_new' => _x('Add New', 'add new'),
        'add_new_item' => __('Add New Football'),
        'new_item' => __('New football'),
        'edit_item' => __('Edit football'),
        'view_item' => __('View nefootballws'),
        'all_items' => __('All football'),
        'search_items' => __('Search football'),
        'not_found' => __('No football found.'),
        );
        $args = array(
        'supports' => $supports,
        'labels' => $labels,
        'public' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'footballs'),
        'has_archive' => true,
        'hierarchical' => false,
        );
        register_post_type('footballs', $args);
    }
    add_action('init', 'cw_post_type_footballs');
    /*Custom Post type end*/

    /*Custom Post type start*/
function cw_post_type_news() {
    $supports = array(
    'title', // post title
    'editor', // post content
    'author', // post author
    'thumbnail', // featured images
    'excerpt', // post excerpt
    'custom-fields', // custom fields
    'comments', // post comments
    'revisions', // post revisions
    'post-formats', // post formats
    );
    $labels = array(
    'name' => _x('news', 'plural'),
    'singular_name' => _x('news', 'singular'),
    'menu_name' => _x('News', 'admin menu'),
    'name_admin_bar' => _x('News', 'admin bar'),
    'add_new' => _x('Add New', 'add new'),
    'add_new_item' => __('Add New News'),
    'new_item' => __('New news'),
    'edit_item' => __('Edit news'),
    'view_item' => __('View news'),
    'all_items' => __('All news'),
    'search_items' => __('Search news'),
    'not_found' => __('No news found.'),
    );
    $args = array(
    'supports' => $supports,
    'labels' => $labels,
    'public' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'news'),
    'has_archive' => true,
    'hierarchical' => false,
    );
    register_post_type('news', $args);
    }
    add_action('init', 'cw_post_type_news');
    /*Custom Post type end*/


    function cw_post_type_highlights() {
        $supports = array(
        'title', // post title
        'editor', // post content
        'author', // post author
        'thumbnail', // featured images
        'excerpt', // post excerpt
        'custom-fields', // custom fields
        'comments', // post comments
        'revisions', // post revisions
        'post-formats', // post formats
        );
        $labels = array(
        'name' => _x('highlights', 'plural'),
        'singular_name' => _x('highlights', 'singular'),
        'menu_name' => _x('Highlights', 'admin menu'),
        'name_admin_bar' => _x('Highlights', 'admin bar'),
        'add_new' => _x('Add New', 'add new'),
        'add_new_item' => __('Add New Highlights'),
        'new_item' => __('New highlights'),
        'edit_item' => __('Edit highlights'),
        'view_item' => __('View highlights'),
        'all_items' => __('All highlights'),
        'search_items' => __('Search highlights'),
        'not_found' => __('No highlights found.'),
        );
        $args = array(
        'supports' => $supports,
        'labels' => $labels,
        'public' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'highlights'),
        'has_archive' => true,
        'hierarchical' => false,
        );
        register_post_type('highlights', $args);
        }
        add_action('init', 'cw_post_type_highlights');
        /*Custom Post type end*/

?>
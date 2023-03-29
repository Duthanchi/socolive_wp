<?php
# Adds dynamic title tag support
function socolive_theme_support()
{
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    // add_theme_support('post-thumbnails');
    add_theme_support('widgets');

}

add_action('after_setup_theme', 'socolive_theme_support');

function socolive_menus()
{
    $locations = array(
        'primary' => "Header primary menu",
        'footer' => "Footer Menu Items",
    );
    register_nav_menus($locations);
}

add_action('init', "socolive_menus");

#Dynamic banner 
function socolive_inline_styles()
{
    $body_bg_image = "/wp-content/uploads/banner.jpg"; //here i would get your value from ACF
    ?>
    <style type="text/css">
        .index-wrapper .living-room {
            background-image: url('<?= $body_bg_image ?>')
        };
    </style>
    <?php
}

// add_action('wp_head', 'socolive_inline_styles');

# Regiester styles
function socolive_register_styles()
{
    $wp_version = wp_get_theme()->get('Version');
    wp_enqueue_style('socolive-style', get_template_directory_uri() . "/style.css", array('socolive-bootstrap'), $wp_version, 'all');
    // wp_enqueue_style('socolive-bootstrap',"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", array(), '4.4.1', 'all');
    wp_enqueue_style('socolive-fontawesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css", array(), '5.13.0', 'all');
    wp_enqueue_style('socolive-common', get_template_directory_uri() . "/assets/css/common.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-iconfont', get_template_directory_uri() . "/assets/css/iconfont.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-iconfont(1)', get_template_directory_uri() . "/assets/css/iconfont(1).css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-swiper', get_template_directory_uri() . "/assets/css/swiper.min.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-index', get_template_directory_uri() . "/assets/css/index.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-index(1)', get_template_directory_uri() . "/assets/css/index(1).css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-header', get_template_directory_uri() . "/assets/css/header.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-match', get_template_directory_uri() . "/assets/css/match.css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-match(1)', get_template_directory_uri() . "/assets/css/match(1).css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-liveRoom', get_template_directory_uri() . "/assets/css/liveRoom.css", array(), '1.0', 'all');
    wp_enqueue_style('socoliveliveRoom(1)', get_template_directory_uri() . "/assets/css/liveRoom(1).css", array(), '1.0', 'all');
    wp_enqueue_style('socolive-chat', get_template_directory_uri() . "/assets/css/chat.css", array(), '1.0', 'all');
    wp_enqueue_script('socolive-jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", array(), '3.4.1', true);
}

add_action('wp_enqueue_scripts', 'socolive_register_styles');

# Regiester script
function socolive_register_scripts()
{

    // wp_enqueue_script('socolive-popper', "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), '1.16.0',true);
    // wp_enqueue_script('socolive-bootstrap', "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js", array(), '4.4.1',true);
    wp_enqueue_script('socolive-runtime', get_template_directory_uri() . "/assets/js/runtime.js", array(), '1.0', true);
    wp_enqueue_script('socolive-vendors', get_template_directory_uri() . "/assets/js/vendors.js", array(), '1.0', true);

    wp_enqueue_script('socolive-jq', get_template_directory_uri() . "/assets/js/jq.js", array(), '1.0', true);
    wp_enqueue_script('socolive-swiper', get_template_directory_uri() . "/assets/js/swiper.min.js", array(), '1.0', true);
    wp_enqueue_script('socolive-match', get_template_directory_uri() . "/assets/js/match.js", array(), '1.0', true);
    wp_enqueue_script('socolive-flv', get_template_directory_uri() . "/assets/js/flv.min.js", array(), '1.0', true);
    wp_enqueue_script('socolive-hls', get_template_directory_uri() . "/assets/js/hls.js", array(), '1.0', true);
    wp_enqueue_script('socolive-DPlayer', get_template_directory_uri() . "/assets/js/DPlayer.min.js", array(), '1.0', true);
    wp_enqueue_script('socolive-header', get_template_directory_uri() . "/assets/js/header.js", array(), '1.0', true);
    wp_enqueue_script('socolive-utils', get_template_directory_uri() . "/assets/js/utils.js", array(), '1.0', true);
    wp_enqueue_script('socolive-index', get_template_directory_uri() . "/assets/js/index.js", array(), '1.0', true);
    wp_enqueue_script('socolive-footer', get_template_directory_uri() . "/assets/js/footer.js", array(), '1.0', true);
    wp_enqueue_script('socolive-foot', get_template_directory_uri() . "/assets/js/foot.js", array(), '1.0', true);
    wp_enqueue_script('socolive-js', get_template_directory_uri() . "/assets/js/js", array(), '1.0', true);
    wp_enqueue_script('socolive-liveRoom', get_template_directory_uri() . "/assets/js/liveRoom.js", array(), '1.0', true);
    wp_enqueue_script('socolive-chat', get_template_directory_uri() . "/assets/js/chat.js", array(), '1.0', true);
}

add_action('wp_enqueue_scripts', 'socolive_register_scripts');

//Add footer widgets for socolive
function socolive_widgets_init()
{
    // First footer widget area, located in the footer. Empty by default. 
    register_sidebar(
        array(
            'name' => __('First Footer Widget Area', 'socolive'),
            'id' => 'first-footer-widget-area',
            'description' => __('The first footer widget area', 'socolive'),
            'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
    // Second Footer Widget Area, located in the footer. Empty by default. 
    register_sidebar(
        array(
            'name' => __('Second Footer Widget Area', 'socolive'),
            'id' => 'second-footer-widget-area',
            'description' => __('The second footer widget area', 'socolive'),
            'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
    // Third Footer Widget Area, located in the footer. Empty by default. 
    register_sidebar(
        array(
            'name' => __('Third Footer Widget Area', 'socolive'),
            'id' => 'third-footer-widget-area',
            'description' => __('The third footer widget area', 'socolive'),
            'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
    // Fourth Footer Widget Area, located in the footer. Empty by default. 
    register_sidebar(
        array(
            'name' => __('Fourth Footer Widget Area', 'socolive'),
            'id' => 'fourth-footer-widget-area',
            'description' => __('The fourth footer widget area', 'socolive'),
            'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

}

add_action('widgets_init', 'socolive_widgets_init');



/*Custom Post type start*/
function cw_post_type_footballs()
{
    $supports = array(
        'title',
        // post title
        'editor',
        // post content
        'author',
        // post author
        'thumbnail',
        // featured images
        'excerpt',
        // post excerpt
        'custom-fields',
        // custom fields
        'comments',
        // post comments
        'revisions',
        // post revisions
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
function cw_post_type_news()
{
    $supports = array(
        'title',
        // post title
        'editor',
        // post content
        'author',
        // post author
        'thumbnail',
        // featured images
        'excerpt',
        // post excerpt
        'custom-fields',
        // custom fields
        'comments',
        // post comments
        'revisions',
        // post revisions
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


function cw_post_type_highlights()
{
    $supports = array(
        'title',
        // post title
        'editor',
        // post content
        'author',
        // post author
        'thumbnail',
        // featured images
        'excerpt',
        // post excerpt
        'custom-fields',
        // custom fields
        'comments',
        // post comments
        'revisions',
        // post revisions
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
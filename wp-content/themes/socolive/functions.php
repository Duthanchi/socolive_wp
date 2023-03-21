<?php
    
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
        // $wp_version = wp_get_theme()->get('Version');
        wp_enqueue_script('socolive-jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", array(), '3.4.1',true);
        wp_enqueue_script('socolive-popper', "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), '1.16.0',true);
        wp_enqueue_script('socolive-bootstrap', "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js", array(), '4.4.1',true);
        wp_enqueue_script('socolive-main', get_template_directory_uri() . "/assets/js/main.js",array(), '1.0',true);
       
    }

    add_action('wp_enqueue_scripts', 'socolive_register_scripts');

?>
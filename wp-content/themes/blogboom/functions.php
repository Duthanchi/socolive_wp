<?php
/**
 * Theme functions and definitions
 *
 * @package Blogboom
 */
if ( ! function_exists( 'blogboom_enqueue_styles' ) ) :
	/**
	 * @since 0.1
	 */
	function blogboom_enqueue_styles() {
		wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css');
		wp_enqueue_style( 'blogus-style-parent', get_template_directory_uri() . '/style.css' );
		wp_enqueue_style( 'blogboom-style', get_stylesheet_directory_uri() . '/style.css', array( 'blogus-style-parent' ), '1.0' );
		wp_dequeue_style( 'blogus-default',get_template_directory_uri() .'/css/colors/default.css');
		wp_enqueue_style( 'blogboom-default-css', get_stylesheet_directory_uri()."/css/colors/default.css" );
		//wp_enqueue_style( 'blogboom-dark', get_template_directory_uri() . '/css/colors/dark.css');

		if(is_rtl()){
		wp_enqueue_style( 'blogus_style_rtl', trailingslashit( get_template_directory_uri() ) . 'style-rtl.css' );
	    }
		
	}

endif;
add_action( 'wp_enqueue_scripts', 'blogboom_enqueue_styles', 9999 );

function blogboom_theme_setup() {

//Load text domain for translation-ready
load_theme_textdomain('blogboom', get_stylesheet_directory() . '/languages');
}

add_action( 'customize_register', 'blogboom_customizer_rid_values', 1000 );
function blogboom_customizer_rid_values($wp_customize) {

  $wp_customize->remove_control('blogus_content_layout');
  $wp_customize->remove_control('blogus_title_font_size');      

 }

 if ( ! function_exists( 'blogboom_admin_scripts' ) ) :
function blogboom_admin_scripts() {

    wp_enqueue_style('blogboom-admin-style-css', get_stylesheet_directory_uri() . '/css/customizer-controls.css');
}
endif;
add_action( 'admin_enqueue_scripts', 'blogboom_admin_scripts' );

/**
* banner additions.
*/
require get_stylesheet_directory().'/hooks/hook-front-page-main-banner-section.php';

if (!function_exists('blogboom_get_block')) :
    /**
     *
     * @param null
     *
     * @return null
     *
     * @since Blogboom 1.0.0
     *
     */
    function blogboom_get_block($block = 'grid', $section = 'post')
    {

        get_template_part('hooks/blocks/block-' . $section, $block);

    }
endif;



function blogboom_theme_option( $wp_customize )
{

    /**
 * Customize Control for Radio Image.
 *
 * @since 1.0.0
 *
 * @see WP_Customize_Control
 */
class Blogboom_Radio_Image_Control extends WP_Customize_Control {

    /**
     * Control type.
     *
     * @access public
     * @var string
     */
    public $type = 'radio-image';

    /**
     * Render content.
     *
     * @since 1.0.0
     */
    public function render_content() {

        if ( empty( $this->choices ) ) {
            return;
        }

        $name = '_customize-radio-' . $this->id;

        ?>
        <label>
            <?php if ( ! empty( $this->label ) ) : ?>
                <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
            <?php endif; ?>
            <?php if ( ! empty( $this->description ) ) : ?>
                <span class="description customize-control-description"><?php echo esc_html($this->description); ?></span>
            <?php endif; ?>

            <?php foreach ( $this->choices as $value => $label ) : ?>
                <label>
                    <input type="radio" value="<?php echo esc_attr( $value ); ?>" <?php $this->link();
                    checked( $this->value(), $value ); ?> class="np-radio-image" name="<?php echo esc_attr( $name ); ?>"/>
                    <span><img src="<?php echo esc_url( $label ); ?>" alt="<?php echo esc_attr( $value ); ?>" /></span>
                </label>
            <?php endforeach; ?>
        </label>
        <?php
    }
}

/**
 * Customizer Control: toggle.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'Blogboom_Toggle_Control' ) ) {

    /**
     * Toggle control (modified checkbox).
     */
    class Blogboom_Toggle_Control extends Wp_Customize_Control {

        public $type = 'toggle';
        
        public $tooltip = '';
        
        public function to_json() {
            parent::to_json();
            
            if ( isset( $this->default ) ) {
                $this->json['default'] = $this->default;
            } else {
                $this->json['default'] = $this->setting->default;
            }
            
            $this->json['value']   = $this->value();
            $this->json['link']    = $this->get_link();
            $this->json['id']      = $this->id;
            $this->json['tooltip'] = $this->tooltip;
                        
            $this->json['inputAttrs'] = '';
            foreach ( $this->input_attrs as $attr => $value ) {
                $this->json['inputAttrs'] .= $attr . '="' . esc_attr( $value ) . '" ';
            }
        }
        
        public function enqueue() {            
            wp_enqueue_style( 'blogus-toggle', get_template_directory_uri() . '/inc/ansar/custom-control/toggle/toggle.css', null );
            wp_enqueue_script( 'blogus-toggle', get_template_directory_uri() . '/inc/ansar/custom-control/toggle/toggle.js', array( 'jquery' ), false, true ); //for toggle        
        }
        
        protected function content_template() {
            ?>
            <# if ( data.tooltip ) { #>
                <a href="#" class="tooltip hint--left" data-hint="{{ data.tooltip }}"><span class='dashicons dashicons-info'></span></a>
            <# } #>
            <label for="toggle_{{ data.id }}">
                <span class="customize-control-title">
                    {{{ data.label }}}
                </span>
                <# if ( data.description ) { #>
                    <span class="description customize-control-description">{{{ data.description }}}</span>
                <# } #>
                <input {{{ data.inputAttrs }}} name="toggle_{{ data.id }}" id="toggle_{{ data.id }}" type="checkbox" value="{{ data.value }}" {{{ data.link }}}<# if ( '1' == data.value ) { #> checked<# } #> hidden />
                <span class="switch"></span>
            </label>
            <?php
        }
    }
}
    
    

    /*--- Site title Font size **/
    $wp_customize->add_setting('blogboom_title_font_size',
        array(
            'default'           => 30,
            'capability'        => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
            'priority' => 50,
        )
    );

    $wp_customize->add_control('blogboom_title_font_size',
        array(
            'label'    => esc_html__('Site Title Size', 'blogboom'),
            'section'  => 'title_tagline',
            'type'     => 'number',
        )
    );



            // Setting - show_main_news_section.
        $wp_customize->add_setting('show_main_news_section',
            array(
                'default' => 1,
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'blogus_sanitize_checkbox',
            )
        );

        $wp_customize->add_control('show_main_news_section',
            array(
                'label' => esc_html__('Enable Slider Banner Section', 'blogboom'),
                'section' => 'frontpage_main_banner_section_settings',
                'type' => 'checkbox',
                'priority' => 10,

            )
        ); 

    $wp_customize->add_setting(
        'blogboom_content_layout', array(
        'default'           => 'grid-right-sidebar',
        'sanitize_callback' => 'blogus_sanitize_radio',
    ) );
    
    
    $wp_customize->add_control(
        new Blogboom_Radio_Image_Control( 
            // $wp_customize object
            $wp_customize,
            // $id
            'blogboom_content_layout',
            // $args
            array(
                'settings'      => 'blogboom_content_layout',
                'section'       => 'blog_layout_section',
                'priority' => 50,
                'choices'       => array(
                    'align-content-left' => get_template_directory_uri() . '/images/fullwidth-left-sidebar.png',  
                    'full-width-content'    => get_template_directory_uri() . '/images/fullwidth.png',
                    'align-content-right'    => get_template_directory_uri() . '/images/right-sidebar.png',
                    'grid-left-sidebar' => get_template_directory_uri() . '/images/grid-left-sidebar.png',
                    'grid-fullwidth' => get_template_directory_uri() . '/images/grid-fullwidth.png',
                    'grid-right-sidebar' => get_template_directory_uri() . '/images/grid-right-sidebar.png',
                )
            )
        )
    );
}
add_action('customize_register','blogboom_theme_option');

if ( ! function_exists( 'blogboom_header_color' ) ) :
function blogboom_header_color() {
    $blogus_logo_text_color = get_header_textcolor();
    $blogboom_title_font_size = get_theme_mod('blogboom_title_font_size',30);

    ?>
    <style type="text/css">
    <?php
        if ( ! display_header_text() ) :
    ?>
        .site-title,
        .site-description {
            position: absolute;
            clip: rect(1px, 1px, 1px, 1px);
        }
    <?php
        else :
    ?>
        .site-title a,
        .site-description {
            color: #<?php echo esc_attr( $blogus_logo_text_color ); ?>;
        }

        .site-branding-text .site-title a {
                font-size: <?php echo esc_attr( $blogboom_title_font_size,30 ); ?>px;
            }

            @media only screen and (max-width: 640px) {
                .site-branding-text .site-title a {
                    font-size: 26px;

                }
            }

            @media only screen and (max-width: 375px) {
                .site-branding-text .site-title a {
                    font-size: 26px;

                }
            }

    <?php endif; ?>
    </style>
    <?php
}
endif;


function blogboom_limit_content_chr( $content, $limit=100 ) {
    return mb_strimwidth( strip_tags($content), 0, $limit, '...' );
}
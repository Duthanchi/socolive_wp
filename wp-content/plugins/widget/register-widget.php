<?php
/**
 * Plugin Name: Latest Posts Widget
 * Description: A widget that displays the latest posts, with category selection.
 * Version: 1.0
 * Author: Luke
 */

class Latest_Posts_Widget extends WP_Widget {

  function __construct() {
    parent::__construct(
      'latest_posts_widget',
      __('Latest Posts Widget', 'latest_posts_widget_domain'),
      array( 'description' => __( 'A widget that displays the latest posts, with category selection.', 'latest_posts_widget_domain' ), )
    );
  }

  public function widget( $args, $instance ) {
    $title = apply_filters( 'widget_title', $instance['title'] );
    $category = $instance['category'];

    echo $args['before_widget'];
    if ( ! empty( $title ) )
      echo $args['before_title'] . $title . $args['after_title'];

    $args = array(
      'post_type' => 'post',
      'post_status' => 'publish',
      'orderby' => 'date',
      'order' => 'DESC',
      'posts_per_page' => 5,
    );

    if ($category != 'all') {
      $args['category_name'] = $category;
    }

    $query = new WP_Query( $args );

    if ( $query->have_posts() ) {
      echo '<ul>';

      while ( $query->have_posts() ) {
        $query->the_post();

        echo '<li>';

        if ( has_post_thumbnail() ) {
          echo '<div class="post-thumbnail">';
          the_post_thumbnail( 'thumbnail' );
          echo '</div>';
        }

        echo '<div class="post-content">';
        echo '<h3 class="post-title"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h3>';
        echo '<span class="post-category">' . get_the_category_list( ', ' ) . '</span>';
        echo '</div>';

        echo '</li>';
      }

      echo '</ul>';
      wp_reset_postdata();
    }

    echo $args['after_widget'];
  }

  public function form( $instance ) {
    if ( isset( $instance[ 'title' ] ) ) {
      $title = $instance[ 'title' ];
    } else {
      $title = __( 'Latest Posts', 'latest_posts_widget_domain' );
    }

    if ( isset( $instance[ 'category' ] ) ) {
      $category = $instance[ 'category' ];
    } else {
      $category = 'all';
    }
    ?>

    <p>
      <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
      <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
    </p>

    <p>
      <label for="<?php echo $this->get_field_id( 'category' ); ?>"><?php _e( 'Category:' ); ?></label>
      <select class='widefat' id="<?php echo $this->get_field_id( 'category' ); ?>" name="<?php echo $this->get_field_name( 'category' ); ?>">
      <option value='all' <?php selected( $category, 'all' ); ?>><?php _e( 'All Categories' ); ?></option>

<?php
$categories = get_categories();

foreach ( $categories as $cat ) {
  echo "<option value='" . $cat->slug . "' " . selected( $category, $cat->slug ) . ">" . $cat->name . "</option>";
}
?>

</select>
</p>

<?php
}

public function update( $new_instance, $old_instance ) {
$instance = array();
$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
$instance['category'] = ( ! empty( $new_instance['category'] ) ) ? strip_tags( $new_instance['category'] ) : '';
return $instance;
}

}

function register_latest_posts_widget() {
register_widget( 'Latest_Posts_Widget' );
}
add_action( 'widgets_init', 'register_latest_posts_widget' );
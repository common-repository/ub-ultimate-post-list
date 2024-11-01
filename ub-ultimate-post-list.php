<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @since             1.0.0
 * @package           UB_Ultimate_Post_List
 *
 * @wordpress-plugin
 * Plugin Name:       UB Ultimate Post List
 * Description:       This plugin registers a block named "Ultimate Post List" which can be used for dynamic listing of selected posts of all custom post types and default post type "Post".
 * Version:           1.0.0
 * Author:            Umang Bhanvadia
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ub-ultimate-post-list
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'UB_Ultimate_Post_List_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ub-ultimate-post-list-activator.php
 */
function activate_UB_Ultimate_Post_List() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ub-ultimate-post-list-activator.php';
	UB_Ultimate_Post_List_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ub-ultimate-post-list-deactivator.php
 */
function deactivate_UB_Ultimate_Post_List() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-ub-ultimate-post-list-deactivator.php';
	UB_Ultimate_Post_List_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_UB_Ultimate_Post_List' );
register_deactivation_hook( __FILE__, 'deactivate_UB_Ultimate_Post_List' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-ub-ultimate-post-list.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_UB_Ultimate_Post_List() {

	$plugin = new UB_Ultimate_Post_List();
	$plugin->run();

}
run_UB_Ultimate_Post_List();

function umlst_rest_get_all_post_types(){
    $optionArray = array();
    $args = array(
        'public'   => true,
    );

    $operator = 'and';

    $post_types = get_post_types( $args, $operator );
    foreach ($post_types as $postValue) {
        if ( in_array( $postValue->name, array('page','attachment') ) ) {
            continue;
        }
        $optionArray[] = array('name' => $postValue->label, 'value' => $postValue->name);
    }
    return $optionArray;
}

function umlst_rest_get_all_posts($data){
    $optionArray = array();
    $pType = $data['post_type'];
    $args = array(
        'post_type'   => $pType,
        'post_status' => 'publish',
        'posts_per_page' => '-1'
    );

    $post_type = new WP_Query( $args );

    foreach ($post_type->posts as $postValue) {
        $optionArray[] = array('name' => $postValue->post_title, 'value' => $postValue->ID);
    }
    return $optionArray;
}

function umlst_get_post_data($attributes){
    if ( isset($attributes['postType']) ) {

        $postId = $attributes['postId'];
        $postType = $attributes['postType'];
        $postLayout = $attributes['postLayout'];
        $postPerPage = $attributes['postPerPage'];
        $displayThumb = $attributes['displayPostThumbnail'];
        $displayExc = $attributes['displayPostExcerpt'];
        $displayDate = $attributes['displayPostDate'];
        $displayAuth = $attributes['displayPostAuthor'];
        $displayPage = $attributes['displayPagination'];
        $displayReadMore = $attributes['displayReadMore'];
        $orderBy = $attributes['orderBy'];
        $order = $attributes['order'];

        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

        if( '' !== $postType ) {
            if($attributes['postDisplay'] != 'selected') {
                $args = array(
                    'post_type' => $postType,
                    'posts_per_page' => $postPerPage,
                    'orderby' => $orderBy,
                    'order' => $order,
                    //'paged' => $paged
                  );
            } else {
                $args = array(
                    'post__in' => $postId,
                    'post_type' => $postType,
                    'posts_per_page' => $postPerPage,
                    'orderby' => $orderBy,
                    'order' => $order,
                    //'paged' => $paged
                );
            }

            $my_query = new wp_query( $args );

            if($attributes['postDisplay'] != 'selected' || [] != $postId) {
                ob_start();?>
                <div class="post-<?php echo $postLayout; ?> col-thumbnail <?php echo $attributes['className'];?>">
                <?php
                $big = 999999999; // need an unlikely integer
                $pagination = paginate_links( array(
                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                    'format' => '?paged=%#%',
                    'current' => max( 1, get_query_var('paged') ),
                    'total' => $my_query->max_num_pages,
                    'prev_text' => '<span>Previous</span>',
                    'next_text' => '<span>Next</span>',
                    'mid_size' => 2,
                ) );
                if(!empty($pagination) && $displayPage == true){
                    $args['paged'] = $paged;
                }
                $my_query = new wp_query( $args );
                if($my_query->have_posts()){
                while ($my_query->have_posts()) : $my_query->the_post();
                    $postFeaturedImage_url = wp_get_attachment_url( get_post_thumbnail_id() );
                    ?>
                    <div class="post-item">
                        <?php if($displayThumb == true){ ?>
                        <a href="<?php echo get_the_permalink(get_the_ID()); ?>" class="post-featured-img" style="background-image: url(<?php echo $postFeaturedImage_url ? esc_url($postFeaturedImage_url) : plugin_dir_url( __FILE__ ).'images/dummy-img.jpg'; ?>)"></a>

                        <?php } ?>
                        <div class="post-details">
                        <h3><a href="<?php the_permalink(get_the_ID()); ?>"><?php echo get_the_title(); ?></a></h3>
                            <?php if($displayDate == true || $displayAuth == true ){ ?><div class="date-details"><div class="date-time-area"><?php } if($displayDate == true){ ?><span class="date"><?php echo get_the_date( 'F j, Y' );?></span><?php } if($displayAuth == true){?><span class="author"> - By <?php echo get_the_author(); ?></span><?php } if($displayDate == true || $displayAuth == true ){ ?></div></div> <?php } ?>
                        <?php if($displayExc == true){ ?>
                        <p><?php echo get_the_excerpt(get_the_ID()); ?></p>
                        <?php } if($displayReadMore == true){ ?>
                            <p class="read-more"><a class="read-more-btn" href="<?php the_permalink(get_the_ID()); ?>">Read More</a></p>
                        <?php } ?>
                        </div>
                    </div>
                <?php endwhile;
                } else { ?>
                <h2>Posts Not Available. Please Publish Some Posts</h2>
                <?php } ?>
                </div>
                <?php if(!empty($pagination) && $displayPage == true){ ?>
                    <div class="pagination">
                        <?php
                        echo wp_kses_post($pagination);
                        ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
                $output_string = ob_get_contents();
                ob_end_clean();
                return $output_string;
            } else {
                ob_start();?>
                <h2>Please Select Posts</h2>
                <?php $output_string = ob_get_contents();
                ob_end_clean();
                return $output_string;
            }
        } else {
            ob_start();?>
            <h2>Please Select Post Type</h2>
            <?php $output_string = ob_get_contents();
            ob_end_clean();
            return $output_string;
        }
    }
}
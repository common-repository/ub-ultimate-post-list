<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.multidots.com/
 * @since      1.0.0
 *
 * @package    UB_Ultimate_Post_List
 * @subpackage UB_Ultimate_Post_List/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    UB_Ultimate_Post_List
 * @subpackage UB_Ultimate_Post_List/admin
 * @author     Multidots <umang.bhanvadia@multidots.com>
 */
class UB_Ultimate_Post_List_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in UB_Ultimate_Post_List_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The UB_Ultimate_Post_List_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ub-ultimate-post-list-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in UB_Ultimate_Post_List_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The UB_Ultimate_Post_List_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ub-ultimate-post-list-admin.js', array( 'jquery' ), $this->version, false );
        wp_enqueue_script('umlst-posts-list-block', plugin_dir_url(__FILE__) . 'js/block/block.build.js', array( 'jquery', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor', 'wp-core-data', 'wp-api-fetch' ), $this->version, false);

    }

    public function rest_api_callback() {
        register_rest_route('post_type/v1', '/post_data/', array(
            'methods' => 'GET',
            'callback' => 'umlst_rest_get_all_post_types',
        ));
        register_rest_route('post_type/v1', '/post_list/', array(
            'methods' => 'GET',
            'callback' => 'umlst_rest_get_all_posts',
        ));
    }

    public function md_custom_post_all_posts() {

        register_block_type('select-post-list/post-list-block',
            array(
                'editor_script' => 'umlst-posts-list-block',
                'render_callback' => 'umlst_get_post_data',
                'attributes' => array(
                    'postDisplay' => array(
                        'type' => 'string',
                        'default' => 'all'
                    ),
                    'postId' => array(
                        'type' => 'object',
                        'default' => []
                    ),
                    'postType' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'postLayout' => array(
                        'type' => 'string',
                        'default' => 'list'
                    ),
                    'orderBy' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'order' => array(
                        'type' => 'string',
                        'default' => ''
                    ),
                    'postPerPage' => array(
                        'type' => 'string',
                        'default' => '12'
                    ),
                    'displayPostThumbnail' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'displayPostExcerpt' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'displayPostDate' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'displayPostAuthor' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'displayPagination' => array(
                        'type' => 'boolean',
                        'default' => true
                    ),
                    'displayReadMore' => array(
                        'type' => 'boolean',
                        'default' => false
                    )
                )
            )
        );
    }


}

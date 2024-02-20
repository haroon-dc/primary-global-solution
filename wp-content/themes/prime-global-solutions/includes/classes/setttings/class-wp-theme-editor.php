<?php
/**
 * Functions for editor styles
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

namespace BaseTheme\Editor;

/**
 * Template Class For Acf Settings
 *
 * Template Class
 *
 * @category Setting_Class
 * @package  Base Theme Package
 */
class WP_Theme_Editor {
	/**
	 * Define class Constructor
	 **/
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'editor_css_support' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'custom_editor_assets' ) );
		add_filter( 'block_editor_settings_all', array( $this, 'wp_block_editor_settings' ), 10, 2 );
	}

	/**
	 * Add support for editor styles
	 *
	 * @return void
	 */
	public function editor_css_support() {
		add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added.
	}

	/**
	 * Add CSS to Gutenberg Editor and the Blocks
	 *
	 * @return void
	 */
	public function custom_editor_assets() {

		// Custom block styles.
		$version = filemtime( get_template_directory() . '/assets/build/editor.min.js' );
		wp_enqueue_script( 'editor-js', esc_url( get_stylesheet_directory_uri() ) . '/assets/build/editor.min.js', array( 'jquery' ), $version, true );
	}


	/**
	 * Filter by global settings or user roles.
	 *
	 *  SUGGEST: USE THIS CODE TO CONTROL BLOCK SETTINGS, THEN USE THEME.JSON TO CONTROL DEFAULT STYLES.
	 *
	 * @param object $editor_settings .
	 * @param object $editor_context .
	 *
	 * @return object
	 */
	public function wp_block_editor_settings( $editor_settings, $editor_context ) {

		$theme_json                                = \WP_Theme_JSON_Resolver::get_merged_data();
		$editor_settings['__experimentalFeatures'] = $theme_json->get_settings();

		$block_types = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		$types       = array();
		foreach ( $block_types as $key => $item ) {
			if ( 'acf' === explode( '/', $key )[0] ) {
				$types[] = $key;
			}
		}
		$allowed = array(
			'core/paragraph',
			'core/heading',
			'core/buttons',
			'core/button',
			'core/button',
			'core/html',
			'core/list',
			'core/list-item',
			'core/table',
			'core/quote',
			'core/pullquote',
			'core/image',
			'core/video',
			'core/gallery',
			'core/columns',
			'core/column',
			'core/group',
			'core/spacer',
			'core/separator',
			'core/spacer',
			'core/shortcode',
			'basethemepack/section-container',
			'gravityforms/form',
			'core/block',

		);
		$editor_settings['allowedBlockTypes'] = array_merge( $allowed, $types );

		return $editor_settings;
	}

}
new WP_Theme_Editor();

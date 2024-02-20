<?php
/**
 * Functions for advanced custom fields plugin
 *
 * @link https://www.advancedcustomfields.com/resources/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

namespace BaseTheme\Acf;

/**
 * Template Class For Acf Settings
 *
 * Template Class
 *
 * @category Setting_Class
 * @package  Base Theme Package
 */
class WP_Theme_Acf {
	/**
	 * Define class Constructor
	 **/
	public function __construct() {

		/**
		 * Build ACF based theme Options page
		 */
		if ( function_exists( 'acf_add_options_page' ) ) {
			$option_page = acf_add_options_page(
				array(
					'page_title' => __( 'Theme Options', 'basetheme_td' ),
					'menu_title' => __( 'Theme Options', 'basetheme_td' ),
					'menu_slug'  => 'acf-options',
					'capability' => 'edit_posts',
					'redirect'   => false,
					'position'   => 2,
				)
			);
		}

		add_filter( 'block_categories_all', array( $this, 'blocks_category' ), 10, 2 );
		add_action( 'init', array( $this, 'include_acf_fields' ) );
		add_action( 'acf/render_field_settings/type=wysiwyg', array( $this, 'wysiwyg_render_field_settings' ), 10, 1 );
		add_action( 'acf/render_field/type=wysiwyg', array( $this, 'wysiwyg_render_field' ), 10, 1 );
	}

	/**
	 * Register custom Gutenberg blocks category
	 *
	 *  @param array $categories is a array of theme categories.
	 *
	 *  @return array
	 */
	public function blocks_category( $categories ) {
		$custom_block = array(
			'slug'  => 'theme-blocks',
			'title' => __( 'Theme Blocks', 'basetheme_td' ),
			'icon'  => 'theme-blocks',
		);

		$categories_sorted    = array();
		$categories_sorted[0] = $custom_block;

		foreach ( $categories as $category ) {
			$categories_sorted[] = $category;
		}

		return $categories_sorted;
	}

	/**
	 * Render height on ACF WYSIWYG
	 *
	 *  @param array $field is a array field data.
	 */
	public function wysiwyg_render_field( $field ) {
		$field_class    = '.acf-' . str_replace( '_', '-', $field['key'] );
		$wysiwyg_height = ( isset( $field['wysiwyg_height'] ) ) ? $field['wysiwyg_height'] : null;
		if ( ! $wysiwyg_height ) {
			$custom_acf_wysiwyg_height = '200';
		} else {
			$custom_acf_wysiwyg_height = $field['wysiwyg_height'];
		}
		?>
		<script>
			jQuery(document).ready(function(){
				setTimeout(() => {
					jQuery('<?php echo esc_html( $field_class ); ?>').find('iframe').css('height','<?php echo esc_html( $custom_acf_wysiwyg_height ); ?>px');
				}, 1000);
			});
		</script>

		<?php
	}


	/**
	 * Set Wysiwyg Height
	 *
	 *  @param array $field is a array field data.
	 */
	public function wysiwyg_render_field_settings( $field ) {
		acf_render_field_setting(
			$field,
			array(
				'label'        => __( 'Height of Editor', 'basetheme_td' ),
				'instructions' => __( 'Height of Editor after Init', 'basetheme_td' ),
				'name'         => 'wysiwyg_height',
				'type'         => 'number',
			)
		);
	}



	/**
	 * Registers the ACF field type.
	 */
	public function include_acf_fields() {
		if ( ! function_exists( 'acf_register_field_type' ) ) {
			return;
		}
		require_once __DIR__ . '/acf-field-types/class-acf-field-block-label.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-headings.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-spacer.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-spacers.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-block-title.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-relational-taxonomy.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-advance-form.php';
		require_once __DIR__ . '/acf-field-types/class-acf-field-advance-video.php';

		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Block_Label' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Headings' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Spacer' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Spacers' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Block_Title' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Relational_Taxonomy' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Advance_Form' );
		acf_register_field_type( '\BaseTheme\Acf\Acf_Fields\Acf_Field_Advance_Video' );
	}


}
if ( ! function_exists( 'is_plugin_active' ) ) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
}
if ( is_plugin_active( 'advanced-custom-fields-pro/acf.php' ) ) {
	new WP_Theme_Acf();
}

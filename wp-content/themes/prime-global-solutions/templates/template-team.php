<?php
/**
 * Template Name: Team
 * Template Post Type: page
 *
 * This template is for displaying team page.
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

// Include header.
get_header();

list( $bst_var_post_id, $bst_fields, $bst_option_fields ) = BaseTheme::defaults();

$bst_var_pagetitle          = $bst_fields['bst_var_pagetitle'] ?? get_the_title();
$bst_var_trcho_feature_post = $bst_fields['bst_var_trcho_feature_post'] ?? null;

?>

<section id="hero-section" class="hero-section hero-section-default">
	<div class="blog-hero">
		<div class="wrapper">
			<div class="banner-content ">
				<h1><?php echo esc_html( $bst_var_pagetitle ); ?></h1>
			</div>
		</div>
	</div>
	<!-- Hero End -->
</section>

<section id="page-section" class="page-section">
	<!-- Content Start -->
	<div class="wrapper">
		<?php
			// WP_Query.
			$bst_query = Boilerplate::query(
				array(
					'post_type'     => 'team',
					'template'      => 'archive-team',
					'template_none' => 'none',
				)
			);
			?>

		<div class="ts-80"></div>
		<!-- Content End -->
	</div>
</section>

<?php
get_footer();

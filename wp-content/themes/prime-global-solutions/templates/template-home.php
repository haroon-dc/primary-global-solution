<?php
/**
 * Template Name: Home
 * Template Post Type: page
 *
 * This template is for displaying home page.
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

// Include header.
get_header();

list( $bst_var_post_id, $bst_fields, $bst_option_fields ) = BaseTheme::defaults();

$bst_var_tmp_home_title  = $bst_fields['bst_var_tmp_home_title'] ?? get_the_title();
$bst_var_tmp_home_text   = $bst_fields['bst_var_tmp_home_text'] ?? null;
$bst_var_tmp_home_button = $bst_fields['bst_var_tmp_home_button'] ?? null;

?>
<section id="hero-section" class="hero-section hero-section-default">
	<!-- Hero Start -->
	<div class="hero-ctn">
		<div class="wrapper">
			<h1><?php echo esc_html( $bst_var_tmp_home_title ); ?></h1>
		</div>
	</div>
	<!-- Hero End -->
</section>
<section id="page-section" class="page-section">
	<!-- Content Start -->
	<?php $bst_query = Boilerplate::query(); ?>
	<div class="ts-80"></div>
	<!-- Content End -->
</section>
<?php get_footer(); ?>

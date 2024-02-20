<?php
/**
 * The template for displaying all pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

// Include header.
get_header();


list( $bst_var_post_id, $bst_fields, $bst_option_fields ) = BaseTheme::defaults();

$bst_var_tmp_def_title  = $bst_fields['bst_var_tmp_def_title'] ?? get_the_title();
$bst_var_tmp_def_text   = $bst_fields['bst_var_tmp_def_text'] ?? null;
$bst_var_tmp_def_button = $bst_fields['bst_var_tmp_def_button'] ?? null;

?>

<section id="hero-section" class="hero-section hero-section-default">
	<!-- Hero Start -->

	<div class="hero-ctn">
		<div class="wrapper">
			<h1><?php echo html_entity_decode( $bst_var_tmp_def_title ); ?></h1>
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

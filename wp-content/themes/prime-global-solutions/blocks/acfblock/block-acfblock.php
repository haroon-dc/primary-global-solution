<?php
/**
 * Block Name: BlockName
 *
 * The template for displaying the custom gutenberg block named BlockName.
 *
 * @link https://www.advancedcustomfields.com/resources/blocks/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

Boilerplate::block(
	$block,
	function ( $bst_block_fields, $bst_option_fields ) {

		// Block variables.
		$bst_var_blkacf_title        = $bst_block_fields['bst_var_blkacf_title'] ?? null;
		$bst_var_blkacf_spcr         = $bst_block_fields['bst_var_blkacf_spcr'] ?? null;
		$bst_var_blkacf_image        = $bst_block_fields['bst_var_blkacf_image'] ?? null;
		$bst_var_blkacf_text         = $bst_block_fields['bst_var_blkacf_text'] ?? null;
		$bst_var_blkacf_btn          = $bst_block_fields['bst_var_blkacf_btn'] ?? null;
		$bst_var_blkacf_advance_form = $bst_block_fields['bst_var_blkacf_advance_form'] ?? null;
		$bst_var_blkacf_video        = $bst_block_fields['bst_var_blkacf_video'] ?? null;

		?>
		<?php if ( BaseTheme::is_block_title( $bst_var_blkacf_title ) ) { ?>
			<div class="section-head">
				<?php BaseTheme::the_block_title( $bst_var_blkacf_title ); ?>
			</div>
		<?php } ?>

		<?php BaseTheme::the_attachment_image( $bst_var_blkacf_image, 1000 ); ?>
		<?php
		if ( $bst_var_blkacf_text ) {
			echo html_entity_decode( $bst_var_blkacf_text );
		}
		?>
		<?php
		if ( $bst_var_blkacf_btn ) {
			echo BaseTheme::button( $bst_var_blkacf_btn, 'button' );
		}
		?>
		<?php
		if ( $bst_var_blkacf_advance_form ) {
			echo BaseTheme::advance_form( $bst_var_blkacf_advance_form );
		}
		?>

		<?php
	}
);


<?php
/**
 * Custom functions added to current project
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Base Theme Package
 * @since 1.0.0
 */


 // For empty submit gravity form scroll to bottom disabled.
add_filter( 'gform_confirmation_anchor', '__return_false' );

<?php
/**
 * The template for displaying all posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Base Theme Package
 * @since 1.0.0
 */

// Include header.
get_header();
$bst_query = Boilerplate::query();
get_footer();

/**
 * Sticky Header
 * Adds a class to header on scroll
 */
import magnificPopup from '../vendors/jquery-magnificpopup';
import organicTabs from '../vendors/organic-tab';
import slick from '../vendors/slick.min';
import Owl from '../vendors/owl.carousel.min';
jQuery( document ).on( 'scroll', function() {
	if ( jQuery( document ).scrollTop() > 0 ) {
		jQuery( 'header, body' ).addClass( 'shrink' );
	} else {
		jQuery( 'header, body' ).removeClass( 'shrink' );
	}
} );

// Header Section Data Sets
let lastScrollTop = 0,
	delta = 15,
	headerSection = jQuery( '.header-section' ),
	heroFixedVavCtn = jQuery( '.hero-fixed-nav-ctn' ),
	topBar = jQuery( '.top-bar' ),
	navOverlay = jQuery( '.nav-overlay' ),
	body_header = jQuery( 'header,body' )
	;

// jQuery( window ).on( 'scroll', function( event ) {
// 	if ( jQuery( window ).width() > 1003 ) {
// 		const headerHight = -1 * parseInt( headerSection.height() );
// 		let adjustment = 0;
// 		if ( jQuery( 'body' ).hasClass( 'logged-in' ) ) {
// 			adjustment = 32;
// 		}

// 		if ( jQuery( window ).width() < 783 ) {
// 			adjustment = 46;
// 		}

// 		// Identifying window scrolled Up or Down
// 		const st = jQuery( this ).scrollTop();
// 		if ( Math.abs( lastScrollTop - st ) <= delta ) {
// 			return;
// 		}
// 		if ( st > lastScrollTop && lastScrollTop > 50 ) {
// 			body_header.addClass( 'nav-up' );
// 			body_header.removeClass( 'nav-down' );
// 			headerSection.css( 'top', headerHight + adjustment );
// 			heroFixedVavCtn.css( 'top', 0 + adjustment );
// 		} else {
// 			body_header.removeClass( 'nav-up' );
// 			body_header.addClass( 'nav-down' );
// 			headerSection.css( 'top', 0 + adjustment );
// 			heroFixedVavCtn.css( 'top', -headerHight + adjustment );
// 		}
// 		lastScrollTop = st;
// 	}
// } );
jQuery.noConflict();

adjustHeader();

// Function to handle load event
function handleLoad() {
    adjustTopBar();
}

// Function to handle resize event
function handleResize() {
    // Check if top bar is hidden, if it is, do not show it on resize
    if (!jQuery('.top-bar').hasClass('hide-top-bar')) {
        adjustTopBar();
    }
}

// Function to handle click event on top bar cross
function handleTopBarCrossClick() {
    hideTopBar();
}

// Function to adjust top bar
function adjustTopBar() {
    // Your existing code to adjust top bar goes here
}

// Function to show top bar
function adjustHeader() {
    const $topBar = jQuery('.top-bar');
    const $headerSection = jQuery('.header-section');
    const $headerInner = jQuery('.header-inner');

    $headerSection.css('top', '0');
    jQuery('.hero-section').css('padding-top', $headerSection.outerHeight() + 'px');
}

// Function to hide top bar
function hideTopBar() {
    const $topBar = jQuery('.top-bar');
    const $headerSection = jQuery('.header-section');
    const $topBarCross = jQuery('.top-bar-cross');

    $topBar.addClass('hide-top-bar');
    $headerSection.css('top', '-' + $topBar.outerHeight() + 'px');
    jQuery('.hero-section').css('padding-top', $headerSection.outerHeight()-$topBar.outerHeight() + 'px');
}

// Bind load event handler
jQuery(window).on('load', handleLoad);

// Bind resize event handler
jQuery(window).on('resize', handleResize);

// Bind click event handler for top bar cross
jQuery('.top-bar-cross').on('click', handleTopBarCrossClick);




// jQuery( window ).on( 'load resize', function() {
// 			// if (!jQuery('.top-bar').hasClass('hide-top-bar')) {
// 			const topBar_height = jQuery( '.top-bar' ).outerHeight();
// 			let logedin_topBar_height = jQuery( '.top-bar' ).outerHeight();
// 			const $header_height = jQuery( '.header-section' ).outerHeight();
// 			const $header_inner = jQuery( '.header-inner' ).outerHeight();
// 			const $wpAdminBar = jQuery( '#wpadminbar' ).outerHeight();
// 			const $paddingTopValue = jQuery( '.hero--home' ).css( 'padding-top' );

// 			let adjustment = 0;
// 			if ( jQuery( 'body' ).hasClass( 'logged-in' ) ) {
// 				adjustment = 32;
// 				logedin_topBar_height = topBar_height - adjustment;

// 				if ( jQuery( window ).width() < 783 ) {
// 					adjustment = 46;
// 					logedin_topBar_height = topBar_height - adjustment;
// 				}
// 			}

// 	// Update styles for .hero-section
// 	jQuery( '.hero-section' ).css( 'padding-top', ( $header_height ) + 'px' );
// 	jQuery( '.header-section' ).css( 'top', adjustment + 'px' );
// 	// Update styles for elements with classes .have-topbar and .hide-topbar

// 	jQuery( '.nav-overlay' ).css( 'padding-top', '0' );
// 	// if ( jQuery( window ).width() > 1179 ) {
// 	// 	jQuery( '.nav-overlay' ).css( 'padding-top', '0' );
// 	// }

// 	if ( jQuery( window ).width() < 1003 ) {
// 		jQuery( '.nav-overlay' ).css( 'top', ( adjustment + topBar_height ) + 'px' );
// 		jQuery( '.nav-overlay' ).css( 'padding-top', $header_inner + 'px' );

// 		jQuery( '.top-bar-cross' ).on( 'click', function() {
// 			jQuery( '.nav-overlay' ).css( 'top', ( adjustment ) + 'px' );
// 		} );
// 	}

// 	jQuery( '.top-bar-cross' ).on( 'click', function() {
// 		jQuery( '.top-bar' ).addClass( 'hide-top-bar' );
// 		jQuery( '.header-section' ).css( 'top', '-' + ( logedin_topBar_height ) + 'px' );
// 		jQuery( '.hero-section' ).css( 'padding-top', ( $header_height - topBar_height ) + 'px' );
// 	} );
// } );


/**
 * Document Ready Function
 * Triggered when document get's ready
 */
// jQuery( window ).load( function() {
// 	if ( jQuery( document ).scrollTop() > 0 ) {
// 		const $header_height = jQuery( 'header' ).outerHeight();
// 		jQuery( 'body' ).css( 'padding-top', $header_height + 'px' );
// 	} else {
// 		const $header_height = jQuery( 'header' ).outerHeight();
// 		jQuery( 'body' ).css( 'padding-top', $header_height + 'px' );
// 	}
// } );

jQuery( function() {
	/**
	 * Toggle menu for mobile
	 */
	// accessible sub menu
	jQuery( '.menu-item-has-children > a' )
		.focus( function() {
			jQuery( this ).siblings( '.sub-menu' ).addClass( 'focused' );
		} )
		.blur( function() {
			jQuery( this ).siblings( '.sub-menu' ).removeClass( 'focused' );
		} );

	jQuery( '.menu-btn' ).on( 'click', function() {
		jQuery( this ).toggleClass( 'active' );
		navOverlay.toggleClass( 'open' );
		jQuery( 'html, body' ).toggleClass( 'no-overflow' );
		jQuery( '.header-nav ul li.active' ).removeClass( 'active' );
		jQuery( '.header-nav ul.sub-menu' ).slideUp();
	} );
	jQuery.noConflict();

	/**
	 * Add span tag to multi-level accordion menu for mobile menus
	 */
	jQuery( 'li' ).each( function() {
		if ( jQuery( this ).hasClass( 'menu-item-has-children' ) ) {
			jQuery( this )
				.find( 'a:first' )
				.after( '<span class="submenu-icon"></span>' );
		}
	} );
	/**
	 * Slide Up/Down internal sub-menu when mobile menu arrow clicked
	 */
	jQuery( document ).on( 'click', '.header-nav .menu-item span', function() {
		const link = jQuery( this ).parents( 'li' );

		link.siblings( '.active' ).removeClass( 'active' ).find( 'ul' ).slideUp();

		if ( link.hasClass( 'active' ) ) {
			link.removeClass( 'active' );
			link.parents( 'ul' ).removeClass( 'disabled-menu' );
			link.find( 'ul' ).slideUp();
		} else {
			link.addClass( 'active' );
			link.parents( 'ul' ).addClass( 'disabled-menu' );
			link.find( 'ul' ).slideDown();
		}
	} );
} );


wp.blocks.registerBlockStyle( 'core/button', {
	label: 'Fill Boxed',
	name: 'fill-boxed',
} );
wp.blocks.registerBlockStyle( 'core/button', {
	label: 'Outline Boxed',
	name: 'outline-boxed',
} );
wp.domReady( () => {
	wp.blocks.unregisterBlockStyle( 'core/button', 'outline' );
	wp.blocks.unregisterBlockStyle( 'core/button', 'fill' );
} );

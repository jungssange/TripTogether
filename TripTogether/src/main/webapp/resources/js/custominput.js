/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML,
			fileName = "";

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
//			if( this.files && this.files.length > 1 )
//				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
//			else
//				fileName = e.target.value.split( '\\' ).pop();
			
			if( this.files )
			{
				for(var i = 0; i < this.files.length; i++)
				{
					fileName += this.files[i].name;
					fileName += ( i < (this.files.length - 1) ) ? "<br />" : "";
				}
			}

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));
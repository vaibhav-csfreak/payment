function OTP( pre, first, last, ev ) {
    if ( first.value.length ) {
        document.getElementById( last ).focus();
    }
    if ( ( ev.keyCode === 8 ) && ( first.value.length === 0 ) ) {
        document.getElementById( pre ).focus();

    }

}
// document.addEventListener( "keydown", back );
// function back( pre, event ) {
//     var KeyID = event.keyCode;
//     if ( keyID === 8 ) {
//         alert( "oooo" );
//         document.getElementById( pre ).focus();
//     }
//    switch(KeyID)
//    {
//       case 8:
//       alert("backspace");
//       break; 
//       case 46:
//       alert("delete");
//       break;
//       default:
//       break;
//    }
// }
// for ( var i = 0; i < 6; i++ ) {
//     document.querySelectorAll( ".otpNum" )[ i ].addEventListener( "keypress", function ( event ) {
//         console.log( event );
//         var KeyID = event.keyCode;
//         if ( keyID === 8 ) {
//             alert( "oooo" );
//             document.getElementById( pre ).focus();
//         }
//     } );
    // function handleHover() {
    //     console.log( this );
    //     document.getElementById( "payTitle" ).innerHTML = this.innerHTML;
    //     alert( "It's hovering" );
    // }
// }
console.log("It's me, ya boii... Javascript");


$( "#window" ).keypress(function(e) {
    if(e.which == 13) {
        console.log('You pressed enter!');
}});



$( "#racer2" ).keyup(function(p) {
  console.log( "Handler for .keypress() called." );
});
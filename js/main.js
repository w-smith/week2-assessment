console.log("It's me, ya boii... Javascript");


var arr1 = 0;


var arr2 = 0;

$(document).keypress(function(q) {
	if(q.keyCode == 113)
     arr1 += 1; 
	if (arr1 === 20) {alert("player 1 wins!"); }
});

$(document).keypress(function(p) {
	if(p.keyCode == 112)
     arr2 += 1; 
 	if (arr2 === 20) {alert("player 2 wins!"); }
});






// player 1 keypress function

$(window).keypress(function(q) {
    if(q.keyCode == 113)
    // console.log("racer1");
$("#racer1").animate({marginLeft: "+=4%"},-200);

});



// player 2 keypress function


$(window).keypress(function(p) {
    if(p.keyCode == 112)
    // console.log("racer2");
$("#racer2").animate({marginLeft: "+=4%"},-200);
});






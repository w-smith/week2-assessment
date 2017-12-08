console.log("It's me, ya boii... Javascript");


// player 1 keypress function

$(window).keypress(function(q) {
    if(q.keyCode == 113)
    // console.log("racer1");
$("#racer1").animate({marginLeft: "+=50px"},-150);

});



// player 2 keypress function


$(window).keypress(function(p) {
    if(p.keyCode == 112)
    // console.log("racer2");
$("#racer2").animate({marginLeft: "+=50px"},-150);
});



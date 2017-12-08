console.log("It's me, ya boii... Javascript");


// player 1 keypress function

$(window).keypress(function(q) {
    if(q.which == 113)
    console.log("racer1");
 $("#racer1").animate({width: "+=100px"});
});



// player 2 keypress function


$(window).keypress(function(p) {
    if(p.which == 112)
    console.log("racer2");
$("#racer2").animate({width: "+=100px"});
});



console.log("Your index.js file is loaded correctly!");

function fade(){
    $(".preloader").fadeOut("slow");
}

setTimeout(fade, 3000);

$("#toTop").click(function(){
    $("html, body").animate({ scrollTop: 0}, "slow");
    return false;
});

$(".workGTG").mouseover(function(){
    $(".activeGTG").show("slow");
});
$(".workGTG").mouseout(function(){
    $(".activeGTG").hide("slow");
});




$(".workE").mouseover(function(){
    $(".activeEnergy").show("slow");
});
$(".workE").mouseout(function(){
    $(".activeEnergy").hide("slow");
});

$(".workHH").mouseover(function(){
    $(".activeHH").show("slow");
});
$(".workHH").mouseout(function(){
    $(".activeHH").hide("slow");
});
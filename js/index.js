console.log("Your index.js file is loaded correctly!");

function fade(){
    $(".preloader").fadeOut("slow");
}

setTimeout(fade, 3000);

$("#toTop").click(function(){
    $("html, body").animate({ scrollTop: 0}, "slow");
    return false;
})
$(".toBottom").click(function() {
    $('html, body').animate({
        scrollTop: $(".services").offset().top-55
    }, 1000);

});
$(".message").click(function(prevent) {

    $('html, body').animate({

        scrollTop: $("footer").offset().top-95
    }, 1000);
           prevent.preventDefault();
});

$(".mob1").click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);

});

$(".mob2").click(function() {
    $('html, body').animate({
        scrollTop: $(".services").offset().top-55
    }, 1000);

});
$(".mob3").click(function() {
    $('html, body').animate({
        scrollTop: $(".our-staff").offset().top-55
    }, 1000);

});
$(".mob4").click(function() {
    $('html, body').animate({
        scrollTop: $(".blog").offset().top-55
    }, 1000);

});
$(".mob5").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer-wrap").offset().top-45
    }, 1000);

});


$(document).ready(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoPlaySpeed: 3000,
        autoPlayTimeout: 3000,
        autoplayHoverPause: true
    });
});

//collapse icon change

$('.faq-links').click(function() {
    var collapsed = $(this).find('span').hasClass('glyphicon-plus');

    $('.faq-links').find('span').removeClass('glyphicon-minus');

    $('.faq-links').find('span').addClass('glyphicon-plus');
    if (collapsed)
        $(this).find('span').toggleClass('glyphicon-plus glyphicon-minus')
});
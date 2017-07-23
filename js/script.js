$(document).ready(function() {
    $(".main-body").hide();
    $('.mc').hide();


    // var owl = $(".owl-carousel");
    // owl.owlCarousel({
    //     items: 4,
    //     loop: true,
    //     autoplay: true,
    //     autoPlaySpeed: 3000,
    //     autoPlayTimeout: 1000,
    //     autoplayHoverPause: true
    // });
});



//collapse icon change

// $('.faq-links').click(function() {
//     var collapsed = $(this).find('span').hasClass('glyphicon-plus');

//     $('.faq-links').find('span').removeClass('glyphicon-minus');

//     $('.faq-links').find('span').addClass('glyphicon-plus');
//     if (collapsed)
//         $(this).find('span').toggleClass('glyphicon-plus glyphicon-minus')
// });

$('.list-group li a').click(function() {
    $(this).next('ul').slideToggle('500');
    $(this).find('span').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    $(this).find('i').toggleClass('fa-plus fa-minus');
});

$(".btn-circle").click(function() {

    $('.main-body').show();
    $(' .btnHide').hide();
});



// $(document).on('DOMMouseScroll mousewheel', function(event) { //on scroll down
//     if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {

//         $('.main-body').show();
//        
//     }

// });


//navbar
var navbarHeight = $('.navbar').height();

$(window).scroll(function() {



    var navbarColor = "62,195,246"; //color attr for rgba
    var smallLogoHeight = $('.small-logo').height();
    var bigLogoHeight = $('.big-logo').height();


    var smallLogoEndPos = 0;
    var smallSpeed = (smallLogoHeight / bigLogoHeight);

    var ySmall = ($(window).scrollTop() * smallSpeed);

    var smallPadding = navbarHeight - ySmall;
    if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
    if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
    if (smallPadding < 0) { smallPadding = 0; }

    $('.small-logo-container ').css({ "padding-top": smallPadding });

    var navOpacity = ySmall / smallLogoHeight;
    if (navOpacity > 1) { navOpacity = 1; }
    if (navOpacity < 0) { navOpacity = 0; }
    var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
    $('.navbar').css({ "background-color": navBackColor });

    var shadowOpacity = navOpacity * 0.4;
    if (ySmall > 1) {
        $('.navbar').css({ "box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")" });
    } else {
        $('.navbar').css({ "box-shadow": "none" });
    }


    if ($(this).scrollTop() > 0) {
        $('.mc').fadeIn();
    } else {
        $('.mc').hide();
    }


});



//contact Form

var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: '//formspree.io/ashwin1014@yahoo.co.in',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert-warning"><strong>Sending Message</strong></div>');
        },
        success: function(data) {
            $contactForm.find('.alert-warning').hide();
            $contactForm.append('<div class="alert alert-success"><strong>Success!</strong></div>');
        },
        error: function(err) {
            $contactForm.find('.alert-warning').hide();
            $contactForm.append('<div class="alert alert-danger">Ops, there was an error.</div>');
        }
    });
});
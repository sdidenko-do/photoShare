$(document).ready(function() {

    // $('.your-class').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     variableWidth: true,
    //     autoplay: true,
    //     autoplaySpeed: 3500,
    // });


    // $('.top-image').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.your-class'
    // });
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        autoplayspeed: 3500,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // asNavFor: '.top-image',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true
    });
});
$(document).ready(function() {
    console.log('------------------------------------');
    console.log("JS READY");
    console.log('------------------------------------');
    // $('.your-class').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 4,
    //     centerMode: true,
    //     variableWidth: true
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
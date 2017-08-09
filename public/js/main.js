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


    $('.hero-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.your-class',
        lazyLoad: 'ondemand',
    });
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        autoplayspeed: 3500,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.hero-image',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        lazyLoad: 'ondemand',
    });
});
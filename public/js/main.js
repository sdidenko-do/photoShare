$(document).ready(function() {
    console.log("JS READY");

    $('.hero-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.your-class',
        variableWidth: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
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
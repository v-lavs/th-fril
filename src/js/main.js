/*
* to include js file write: `//= include ./path-to-file`
* */


// CUSTOM SCRIPTS

$(document).ready(function () {
    // $('.slider-for img').ezPlus({
    //     zoomType: 'inner',
    //     cursor: 'crosshair',
    //     responsive: true,
    // });


//SLIDER
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplaySpeed:4000,
        asNavFor: '.slider-nav',

            });


    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });

});


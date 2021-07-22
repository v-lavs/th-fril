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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogdG8gaW5jbHVkZSBqcyBmaWxlIHdyaXRlOiBgLy89IGluY2x1ZGUgLi9wYXRoLXRvLWZpbGVgXHJcbiogKi9cclxuXHJcblxyXG4vLyBDVVNUT00gU0NSSVBUU1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gJCgnLnNsaWRlci1mb3IgaW1nJykuZXpQbHVzKHtcclxuICAgIC8vICAgICB6b29tVHlwZTogJ2lubmVyJyxcclxuICAgIC8vICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxyXG4gICAgLy8gICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4vL1NMSURFUlxyXG4gICAgJCgnLnNsaWRlci1mb3InKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOjQwMDAsXHJcbiAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLW5hdicsXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==

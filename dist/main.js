/*
* to include js file write: `//= include ./path-to-file`
* */


// CUSTOM SCRIPTS

$(document).ready(function () {
    $('.slider-for img').ezPlus({
        zoomType: 'inner',
        cursor: 'crosshair'
    });
//SLIDER
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true
    });

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogdG8gaW5jbHVkZSBqcyBmaWxlIHdyaXRlOiBgLy89IGluY2x1ZGUgLi9wYXRoLXRvLWZpbGVgXHJcbiogKi9cclxuXHJcblxyXG4vLyBDVVNUT00gU0NSSVBUU1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnNsaWRlci1mb3IgaW1nJykuZXpQbHVzKHtcclxuICAgICAgICB6b29tVHlwZTogJ2lubmVyJyxcclxuICAgICAgICBjdXJzb3I6ICdjcm9zc2hhaXInXHJcbiAgICB9KTtcclxuLy9TTElERVJcclxuICAgICQoJy5zbGlkZXItZm9yJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLW5hdidcclxuICAgIH0pO1xyXG4gICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==

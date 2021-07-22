/*
* to include js file write: `//= include ./path-to-file`
* */


// CUSTOM SCRIPTS

$(document).ready(function () {
    $('#zoom_img').ezPlus({
        zoomType: 'inner',
        responsive : true,
        gallery: 'gal_1',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: false,
    });

    function addInterVal() {
        setInterval(function () {

        }, 4000);
    }

});


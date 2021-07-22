/*
* to include js file write: `//= include ./path-to-file`
* */


// CUSTOM SCRIPTS

$(document).ready(function () {
    function initZoomImage() {
        return $('#zoom_img').ezPlus({
            zoomType: 'inner',
            responsive: true,
            gallery: 'gal_1',
            cursor: 'pointer',
            galleryActiveClass: 'active',
            imageCrossfade: false,
        });
    }

    let zoomImage = initZoomImage();

    function reInitZoomImage() {
        // ReInit zoom plugin
        const plugin = $(zoomImage).data('ezPlus');
        const action = 'hide';

        if (plugin) {
            plugin.showHideZoomContainer(action);
            plugin.showHideWindow(action);
        }

        $('.zoomContainer').remove();
        zoomImage = initZoomImage()
    }

    function addInterVal() {
        return setInterval(function () {
            const $gallery_thumbs = $('#gal_1 a');
            const activeIndex = $('#gal_1 .active').index();
            $gallery_thumbs.removeClass('active');
            const next_index = (activeIndex + 1) < $gallery_thumbs.length ? (activeIndex + 1) : 0;
            $gallery_thumbs.eq(next_index).addClass('active').trigger('click');
        }, 4000);
    }

    let intervalId = addInterVal();

    $('#gal_1 a').click(function () {
        clearInterval(intervalId);
        intervalId = addInterVal();
    });

    $(document).on('mouseover', '.zoomContainer', function over() {
        clearInterval(intervalId);
        intervalId = null;
    });

    $(document).on('mouseleave', '.zoomContainer', function over() {
        intervalId = addInterVal();
    });


    // wait resize event end
    let rtime;
    let timeout = false;
    const delta = 150;

    function resize_end() {
        if (new Date() - rtime < delta) {
            setTimeout(resize_end, delta);
        } else {
            timeout = false;

            reInitZoomImage();
        }
    }

    function cloneResponsiveHtml() {
        const mobBlock = $('#productMobContent');
        const desktopBlock = $('#productMainContent');
        if (!mobBlock.html()) {
            const content = desktopBlock.html();
            mobBlock.html(content);
        }
    }

    cloneResponsiveHtml();

    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resize_end, delta);
        }
    });


    cloneResponsiveHtml();
});


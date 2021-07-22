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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogdG8gaW5jbHVkZSBqcyBmaWxlIHdyaXRlOiBgLy89IGluY2x1ZGUgLi9wYXRoLXRvLWZpbGVgXHJcbiogKi9cclxuXHJcblxyXG4vLyBDVVNUT00gU0NSSVBUU1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gaW5pdFpvb21JbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gJCgnI3pvb21faW1nJykuZXpQbHVzKHtcclxuICAgICAgICAgICAgem9vbVR5cGU6ICdpbm5lcicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6ICdnYWxfMScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBnYWxsZXJ5QWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxyXG4gICAgICAgICAgICBpbWFnZUNyb3NzZmFkZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHpvb21JbWFnZSA9IGluaXRab29tSW1hZ2UoKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZUluaXRab29tSW1hZ2UoKSB7XHJcbiAgICAgICAgLy8gUmVJbml0IHpvb20gcGx1Z2luXHJcbiAgICAgICAgY29uc3QgcGx1Z2luID0gJCh6b29tSW1hZ2UpLmRhdGEoJ2V6UGx1cycpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9ICdoaWRlJztcclxuXHJcbiAgICAgICAgaWYgKHBsdWdpbikge1xyXG4gICAgICAgICAgICBwbHVnaW4uc2hvd0hpZGVab29tQ29udGFpbmVyKGFjdGlvbik7XHJcbiAgICAgICAgICAgIHBsdWdpbi5zaG93SGlkZVdpbmRvdyhhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnpvb21Db250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICB6b29tSW1hZ2UgPSBpbml0Wm9vbUltYWdlKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJbnRlclZhbCgpIHtcclxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCAkZ2FsbGVyeV90aHVtYnMgPSAkKCcjZ2FsXzEgYScpO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJbmRleCA9ICQoJyNnYWxfMSAuYWN0aXZlJykuaW5kZXgoKTtcclxuICAgICAgICAgICAgJGdhbGxlcnlfdGh1bWJzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dF9pbmRleCA9IChhY3RpdmVJbmRleCArIDEpIDwgJGdhbGxlcnlfdGh1bWJzLmxlbmd0aCA/IChhY3RpdmVJbmRleCArIDEpIDogMDtcclxuICAgICAgICAgICAgJGdhbGxlcnlfdGh1bWJzLmVxKG5leHRfaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnRlcnZhbElkID0gYWRkSW50ZXJWYWwoKTtcclxuXHJcbiAgICAkKCcjZ2FsXzEgYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgIGludGVydmFsSWQgPSBhZGRJbnRlclZhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3ZlcicsICcuem9vbUNvbnRhaW5lcicsIGZ1bmN0aW9uIG92ZXIoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICBpbnRlcnZhbElkID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZWxlYXZlJywgJy56b29tQ29udGFpbmVyJywgZnVuY3Rpb24gb3ZlcigpIHtcclxuICAgICAgICBpbnRlcnZhbElkID0gYWRkSW50ZXJWYWwoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyB3YWl0IHJlc2l6ZSBldmVudCBlbmRcclxuICAgIGxldCBydGltZTtcclxuICAgIGxldCB0aW1lb3V0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBkZWx0YSA9IDE1MDtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVfZW5kKCkge1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpIC0gcnRpbWUgPCBkZWx0YSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc2l6ZV9lbmQsIGRlbHRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICByZUluaXRab29tSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvbmVSZXNwb25zaXZlSHRtbCgpIHtcclxuICAgICAgICBjb25zdCBtb2JCbG9jayA9ICQoJyNwcm9kdWN0TW9iQ29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IGRlc2t0b3BCbG9jayA9ICQoJyNwcm9kdWN0TWFpbkNvbnRlbnQnKTtcclxuICAgICAgICBpZiAoIW1vYkJsb2NrLmh0bWwoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZGVza3RvcEJsb2NrLmh0bWwoKTtcclxuICAgICAgICAgICAgbW9iQmxvY2suaHRtbChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVSZXNwb25zaXZlSHRtbCgpO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJ0aW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBpZiAodGltZW91dCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzaXplX2VuZCwgZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjbG9uZVJlc3BvbnNpdmVIdG1sKCk7XHJcbn0pO1xyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=

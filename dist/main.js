/*
* to include js file write: `//= include ./path-to-file`
* */


// CUSTOM SCRIPTS

$(document).ready(function () {
    function initZoomImage () {
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

    function reInitZoomImage () {
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

    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resize_end, delta);
        }
    });

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogdG8gaW5jbHVkZSBqcyBmaWxlIHdyaXRlOiBgLy89IGluY2x1ZGUgLi9wYXRoLXRvLWZpbGVgXHJcbiogKi9cclxuXHJcblxyXG4vLyBDVVNUT00gU0NSSVBUU1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gaW5pdFpvb21JbWFnZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuICQoJyN6b29tX2ltZycpLmV6UGx1cyh7XHJcbiAgICAgICAgICAgIHpvb21UeXBlOiAnaW5uZXInLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBnYWxsZXJ5OiAnZ2FsXzEnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgZ2FsbGVyeUFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcclxuICAgICAgICAgICAgaW1hZ2VDcm9zc2ZhZGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB6b29tSW1hZ2UgPSBpbml0Wm9vbUltYWdlKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVJbml0Wm9vbUltYWdlICgpIHtcclxuICAgICAgICAvLyBSZUluaXQgem9vbSBwbHVnaW5cclxuICAgICAgICBjb25zdCBwbHVnaW4gPSAkKHpvb21JbWFnZSkuZGF0YSgnZXpQbHVzJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gJ2hpZGUnO1xyXG5cclxuICAgICAgICBpZiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbi5zaG93SGlkZVpvb21Db250YWluZXIoYWN0aW9uKTtcclxuICAgICAgICAgICAgcGx1Z2luLnNob3dIaWRlV2luZG93KGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuem9vbUNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIHpvb21JbWFnZSA9IGluaXRab29tSW1hZ2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEludGVyVmFsKCkge1xyXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRnYWxsZXJ5X3RodW1icyA9ICQoJyNnYWxfMSBhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gJCgnI2dhbF8xIC5hY3RpdmUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAkZ2FsbGVyeV90aHVtYnMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0X2luZGV4ID0gKGFjdGl2ZUluZGV4ICsgMSkgPCAkZ2FsbGVyeV90aHVtYnMubGVuZ3RoID8gKGFjdGl2ZUluZGV4ICsgMSkgOiAwO1xyXG4gICAgICAgICAgICAkZ2FsbGVyeV90aHVtYnMuZXEobmV4dF9pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGludGVydmFsSWQgPSBhZGRJbnRlclZhbCgpO1xyXG4gICAgJCgnI2dhbF8xIGEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICBpbnRlcnZhbElkID0gYWRkSW50ZXJWYWwoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW92ZXInLCAnLnpvb21Db250YWluZXInLCBmdW5jdGlvbiBvdmVyKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VsZWF2ZScsICcuem9vbUNvbnRhaW5lcicsIGZ1bmN0aW9uIG92ZXIoKSB7XHJcbiAgICAgICAgaW50ZXJ2YWxJZCA9IGFkZEludGVyVmFsKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gd2FpdCByZXNpemUgZXZlbnQgZW5kXHJcbiAgICBsZXQgcnRpbWU7XHJcbiAgICBsZXQgdGltZW91dCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZGVsdGEgPSAxNTA7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplX2VuZCgpIHtcclxuICAgICAgICBpZiAobmV3IERhdGUoKSAtIHJ0aW1lIDwgZGVsdGEpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNpemVfZW5kLCBkZWx0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmVJbml0Wm9vbUltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJ0aW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBpZiAodGltZW91dCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzaXplX2VuZCwgZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==

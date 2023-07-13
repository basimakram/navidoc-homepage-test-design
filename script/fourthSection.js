jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
            passive: !ns.includes("noPreventDefault"),
        });
    },
};

$(document).ready(function () {
    $(".app_slider_area").owlCarousel({
        autoplay: false,
        slideSpeed: 1000,
        items: 1,
        loop: false,
        dots: false,
        margin: 0,
        responsive: {
            320: {
                items: 1,
            },
            700: {
                items: 1,
            },

            1000: {
                items: 1,
            },
            1300: {
                items: 1,
            },
        },
    });

    $(".prev-btn").click(function () {
        $(".app_slider_area").trigger("prev.owl.carousel");
    });

    $(".next-btn").click(function () {
        $(".app_slider_area").trigger("next.owl.carousel");
    });
});

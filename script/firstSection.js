jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
            passive: !ns.includes("noPreventDefault"),
        });
    },
};

$(document).ready(function () {
    $(".integration-slider-area").owlCarousel({
        autoplay: false,
        slideSpeed: 1000,
        items: 5,
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
                items: 2,
            },
            1300: {
                items: 2,
            },
            1600: {
                items: 4,
            },

            1900: {
                items: 5,
            },
        },
    });

    $(".prev").click(function () {
        $(".integration-slider-area").trigger("prev.owl.carousel");
    });

    $(".next").click(function () {
        $(".integration-slider-area").trigger("next.owl.carousel");
    });
});

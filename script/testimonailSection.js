$(".testimonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    /* nav: true,
    navText: [
      '<i class="fa fa-arrow-left"></i>',
      '<i class="fa fa-arrow-right"></i>',
    ],*/
    margin: 20,
    dots: true,
    responsive: {
        320: {
            items: 1,
        },
        700: {
            items: 2,
        },

        1000: {
            items: 2,
        },
        1300: {
            items: 3,
        },
    },
});
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Corrected from sliderPreview to slidesPerView
        },
        768: {
            sliderPreview: 2,
        },
        1024: {
            slidesPerView: 3, // Corrected from sliderPreview to slidesPerView
        }
    }
});

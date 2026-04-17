document.addEventListener('DOMContentLoaded', function () {

    const swiper1 = new Swiper('.carousel-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        loop: false,

        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        keyboard: {
            enabled: true,
        },

        breakpoints: {

            320: {
                slidesPerView: 1.2,
                spaceBetween: 15
            },

            768: {
                slidesPerView: 'auto',
                spaceBetween: 20
            }
        }
    });

    const swiper2 = new Swiper('.mySwiper', {
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 800,
        grabCursor: true,
        watchSlidesProgress: true,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const menuHeader = document.querySelector('.menu-header');

    menuToggle.addEventListener('click', function() {
        
        menuHeader.classList.toggle('active');


        if (menuHeader.classList.contains('active')) {
            menuToggle.innerHTML = '&#10005;'; 
        } else {
            menuToggle.innerHTML = '&#9776;'; 
        }
    });

    // Tự động đóng menu khi click vào một liên kết bất kỳ
    const menuLinks = document.querySelectorAll('.menu-header a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuHeader.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';
        });
    });


});


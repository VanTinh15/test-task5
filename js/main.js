document.addEventListener('DOMContentLoaded', function () {

    const swiper1 = new Swiper('.carousel-container', {
        slidesPerView: 1.2,
        spaceBetween: 20,

        grabCursor: true,
        loop: false,
         watchSlidesProgress: true,
        roundLengths: true,


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

            440: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 20
            }
        }
    });

    const swiper2 = new Swiper('.mySwiper', {
        slidesPerView: 1.2,
        spaceBetween: 15,
        speed: 800,
        grabCursor: true,
        watchSlidesProgress: true,
        roundLengths: true,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },


        breakpoints: {
            440: {
                slidesPerView: 1.15,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 15
            }
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const menuHeader = document.querySelector('.menu-header');

    menuToggle.addEventListener('click', function () {

        menuHeader.classList.toggle('active');


        if (menuHeader.classList.contains('active')) {
            menuToggle.innerHTML = '&#10005;';
        } else {
            menuToggle.innerHTML = '&#9776;';
        }
    });

    const menuLinks = document.querySelectorAll('.menu-header a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuHeader.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';
        });
    });

    //popup của together
    const participationForm = document.getElementById('participation-form');

    if (participationForm) {
        participationForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const formContainer = document.querySelector('.modal-right-content');
            const thanksView = document.getElementById('thanks-view');
            const msgTopElement = document.getElementById('msg-top');
            const movingTextPlaceholder = thanksView.querySelector('.moving-text');

            if (formContainer && thanksView) {

                if (msgTopElement && movingTextPlaceholder) {
                    movingTextPlaceholder.innerText = msgTopElement.innerText;
                }

                formContainer.style.display = 'none';

                thanksView.classList.remove('hidden');
                thanksView.style.display = 'flex';
            }
        });
    }

    //js nhảy số
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;


            const inc = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + inc);

                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    const showBtns = document.querySelectorAll('.js-show-details');

    const hideBtns = document.querySelectorAll('.js-hide-details');


    showBtns.forEach(btn => {
        btn.addEventListener('click', function () {

            const cardInner = this.closest('.slide-overshow');
            const overlay = cardInner.querySelector('.card-hover-overlay');

            if (overlay) {
                overlay.classList.add('is-active');
            }
        });
    });

    hideBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const cardInner = this.closest('.slide-overshow');
            const overlay = cardInner.querySelector('.card-hover-overlay');

            if (overlay) {
                overlay.classList.remove('is-active');
            }
        });
    });

});
function openForm(button) {

    const gridItem = button.closest('.grid-item');

    const computedStyle = window.getComputedStyle(gridItem);

    let bgImage = computedStyle.backgroundImage;

    let imageUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

    const modal = document.getElementById("formModal");
    const modalImg = document.getElementById("modal-display-img");
    const modalTitle = document.getElementById("event-name");

    const itemTitle = gridItem.querySelector('h3').innerText;

    modalImg.src = imageUrl;
    modalTitle.innerText = itemTitle;
    modal.style.display = "flex";
}

function closeForm() {
    document.getElementById("formModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("formModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

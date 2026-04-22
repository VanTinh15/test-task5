document.addEventListener('DOMContentLoaded', function () {

    const swiper1 = new Swiper('.carousel-container', {
        speed: 800,
        grabCursor: true,

        loop: true,
        loopSlides: 5,

        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,

        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        breakpoints: {
            440: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1240: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerGroup: 1,
            }
        }
    });

    const swiper = new Swiper(".mySwiper", {
        speed: 800,
        grabCursor: true,
        slidesPerView: 1.1,
        slidesPerGroup: 1,

        centeredSlides: true, 
        centeredSlidesBounds: true,

        spaceBetween: 20,
        watchOverflow: true,

        pagination: {
            el: ".mySwiper .swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        breakpoints: {
            440: {
                slidesPerView: 1.4,
                slidesPerGroup: 1,
                spaceBetween: 15,
                slidesOffsetAfter: 10,
            },

            768: {
                slidesPerView: 2.6,
                slidesPerGroup: 1,
                centeredSlides: false,
                spaceBetween: 20,
                slidesOffsetAfter: 20,
            },

            1240: {
                slidesPerView: 2.2,
                slidesPerGroup: 1,
                centeredSlides: false,
                spaceBetween: 40,
                slidesOffsetAfter: 40,
            },
        },
    });

    // menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menuHeader = document.querySelector('.menu-header');

    if (menuToggle && menuHeader) {
        menuToggle.addEventListener('click', function () {
            const isActive = menuHeader.classList.toggle('active');
            menuToggle.innerHTML = isActive ? '&#10005;' : '&#9776;';
        });

        const menuLinks = document.querySelectorAll('.menu-header a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuHeader.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }

    // form dang ky popup
    const participationForm = document.getElementById('participation-form');
    if (participationForm) {
        participationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formContainer = document.querySelector('.modal-right-content');
            const thanksView = document.getElementById('thanks-view');
            const msgTopElement = document.getElementById('msg-top');
            const movingTextPlaceholder = thanksView?.querySelector('.moving-text');

            if (formContainer && thanksView) {
                if (msgTopElement && movingTextPlaceholder) {
                    movingTextPlaceholder.textContent = msgTopElement.textContent;
                }
                formContainer.style.display = 'none';
                thanksView.classList.remove('hidden');
                thanksView.style.display = 'flex';
            }
        });
    }

    // hiệu ứng số nhảy
    const counters = document.querySelectorAll('.counter');

    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = 1000;
                const increment = target / (speed / 16); // 16ms là 1 frame (60fps)

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount); 
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter); 
            }
        });
    }, { threshold: 0.5 }); 

    counters.forEach(counter => countObserver.observe(counter));

    // show, hide - details
    document.addEventListener('click', function (e) {
        
        if (e.target.closest('.js-show-details')) {
            const card = e.target.closest('.card-inner');
            card?.classList.add('active');
        }
        if (e.target.closest('.js-hide-details')) {
            const card = e.target.closest('.card-inner');
            card?.classList.remove('active');
        }
    });
});


function openForm(button) {
    const gridItem = button.closest('.grid-item');
    if (!gridItem) return;

    const computedStyle = window.getComputedStyle(gridItem);
    let bgImage = computedStyle.backgroundImage;
   
    let imageUrl = bgImage.slice(4, -1).replace(/"/g, "");

    const modal = document.getElementById("formModal");
    const modalImg = document.getElementById("modal-display-img");
    const modalTitle = document.getElementById("event-name");
    const itemTitle = gridItem.querySelector('h3')?.innerText || "";

    if (modal && modalImg && modalTitle) {
        modalImg.src = imageUrl;
        modalTitle.innerText = itemTitle;
        modal.style.display = "flex";
    }
}

function closeForm() {
    const modal = document.getElementById("formModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById("formModal");
    if (event.target === modal) {
        closeForm();
    }
});
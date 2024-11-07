function header () {
    const burger = document.querySelector('.burger__menu')
    const nav = document.querySelector('.header__nav')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
    })
}

header()

function welcome () {
    const button = document.querySelector('.welcome__btn')
    const modal = document.querySelector('.welcome__modal')
    const modalClose = document.querySelector('.welcome__modal-close')

    button.addEventListener('click', () => {
        modal.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

welcome()

function question () {
    const iconBtn = document.querySelector('.question__icon')
    const modal = document.querySelector('.question__modal')

    iconBtn.addEventListener('mouseenter', () => {
        modal.style.display = 'block'
    })

    iconBtn.addEventListener('mouseleave', () => {
        modal.style.display = 'none'
    })
}

question()

function slider () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

slider()
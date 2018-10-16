document.addEventListener('DOMContentLoaded', onLoad) ;

function onLoad() {
    const sliders = document.querySelectorAll('.slider');
    for (let slider of sliders) {
        initSlider(slider);
    }
}

function initSlider(slider) {
    const sliderNav = slider.querySelector('.slider-nav');
    const first = sliderNav.querySelector('[data-action="first"]');
    const prev = sliderNav.querySelector('[data-action="prev"]');
    const next = sliderNav.querySelector('[data-action="next"]');
    const last = sliderNav.querySelector('[data-action="last"]');
    const slides = slider.querySelector('.slides');
    slides.firstElementChild.classList.add('slide-current');
    let currentSlide = slides.querySelector('.slide-current');

    updateControl(currentSlide);
    function updateControl(currentSlide) {
        first.classList.toggle('disabled', !currentSlide.previousElementSibling);
        prev.classList.toggle('disabled', !currentSlide.previousElementSibling);
        next.classList.toggle('disabled', !currentSlide.nextElementSibling);
        last.classList.toggle('disabled', !currentSlide.nextElementSibling);
    }

    sliderNav.addEventListener('click', click);
    function click(event) {
        if (event.target.classList.contains('disabled')) {
            return;
        }
        currentSlide.classList.remove('slide-current');
        if (event.target === first) {
            currentSlide = slides.firstElementChild;
        } else if (event.target === prev) {
            currentSlide = currentSlide.previousElementSibling;
        } else if (event.target === next) {
            currentSlide = currentSlide.nextElementSibling;
        } else if (event.target === last) {
            currentSlide = slides.lastElementChild;
        }
        updateControl(currentSlide);
        currentSlide.classList.add('slide-current');
    }
}




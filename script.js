const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const slidesNumber = slideRight.querySelectorAll('div').length;
// console.log(slidesNumber);
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesNumber -1) * 100}vh`;
upBtn.addEventListener('click', () => switchSlide('up'));
downBtn.addEventListener('click', () => switchSlide('down'));

let switchSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);

    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesNumber - 1) {
            activeSlideIndex = 0;
        }
    }

    if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesNumber -1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
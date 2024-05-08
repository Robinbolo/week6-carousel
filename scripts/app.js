//select movie poster original image
let moviePoster = document.querySelector('.movie-poster'); 
//select modal window layer
let modal = document.querySelector('#myModal');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-modal');


moviePoster.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});










const slides = document .getElementsByClassName('carousel__item');
const slidesTotal = slides.length;
const nextButton = document .querySelector('#carousel__button--next');
const prevButton = document .querySelector('#carousel__button--prev');

let slideposition = 0;

nextButton.addEventListener('click', () => {
    console.log('click from next');

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slideposition === slidesTotal-1) {
        slideposition = 0;
    } else {
        slideposition++;
    }

    slides[slideposition].classList.add('carousel__item--visible');
});


prevButton.addEventListener('click', () => {
    console.log('click from prev');

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slideposition === 0) {
        slideposition = slidesTotal - 1;
    } else {
        slideposition--;
    }

    slides[slideposition].classList.add('carousel__item--visible');
});
//---------=-slider------------------------------------------
const arrowLeft = document.querySelector('.slider__arrow--left'),
  arrowRight = document.querySelector('.slider__arrow--right'),
  sliderLine = document.querySelector('.background-phone'),
  images = document.querySelectorAll('.slider-image'),
  button = document.querySelectorAll('.tag'),
  bckground = document.querySelector('.slider'),
  image1 = document.querySelector('.slider-image1'),
  image2 = document.querySelector('slider-image2'),
  arrImg = Array.from(document.getElementsByClassName('image'));

let counter = 0;
images[counter].style.display = 'block';
arrowRight.addEventListener('click', () => {
  let nextIndex = counter + 1;
  bckground.style.cssText = `background-color: #648BF0`;
  slide1.style.cssText = `visibility: hidden`;
  slide2.style.cssText = `visibility: visible`;
  if (nextIndex >= images.length) {
    nextIndex = 0;
    bckground.style.cssText = `background-color: #F06C64`;
    slide1.style.cssText = `visibility: visible`;
    slide2.style.cssText = `visibility: hidden`;
  };

  const next = images[nextIndex];
  sliderLine.append(next);
  next.style.display = 'block';
  console.log('движение');
  next.style.animation = 'moveRight 0.5s';


  counter += 1;
  if (counter >= images.length) {
    counter = 0;

  };
});

arrowLeft.addEventListener('click', () => {
  let prevIndex = counter - 1;
  bckground.style.cssText = `background-color: #F06C64`;
  slide2.style.cssText = `visibility: hidden`;
  slide1.style.cssText = `visibility: visible`;
  if (prevIndex < 0) {
    bckground.style.cssText = `background-color: #648BF0`;
    slide1.style.cssText = `visibility: hidden`;
    slide2.style.cssText = `visibility: visible`;
    prevIndex = images.length - 1;
  }

  const prev = images[prevIndex];
  sliderLine.append(prev);
  prev.style.display = 'block';
  // console.log('движение');
  prev.style.animation = 'moveLeft 0.5s';

  counter -= 1;
  if (counter < 0) {
    counter = images.length - 1;

  }
});
//--------------------Portfolio----------------------------------------------
const mixRand = (a, b) => Math.random() - 0.5;

for (let i = 0; i < button.length; i++) {
  let but = button[i];
  but.addEventListener('click', function (e) {
    // console.log('нажатие на кнопку перемешивания картинок' );
    arrImgSrcMix = arrImg.map(e => e.src).sort(mixRand);
    arrImg.map((e, i) => e.src = arrImgSrcMix[i]);
  });
};

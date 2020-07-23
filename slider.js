const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let slides = document.querySelectorAll('.project');
const parent = document.querySelector('#projectslider');
const sliderWidth = document.querySelector('#project');
right = false;
left = false;
unlock = true;
let counter = 1;
let boxWidth = slides[0].clientWidth;
// console.log(sliderWidth);
// console.log(slides);
slides.forEach((slide) => {
  slide.style.width = `${boxWidth}px`;
});
sliderWidth.style.width = `${boxWidth * 3 + 12}px`;
// console.log(slides);

function bacaj() {
  unlock = false;
  parent.style.transition = 'transform .5s ease';
  parent.style.transform = `translateX(${-boxWidth - 10}px)`;
  btnAnimation('next');
  unlock = true;
}
next.addEventListener('click', () => {
  right = true;
  left = false;
  // console.log(parent);
  if (unlock) {
    bacaj();
  }
  // console.log(counter);
});
prev.addEventListener('click', () => {
  left = true;
  right = false;
  // console.log(parent);
  if (unlock) {
    popSlide();
  }
});

if (window.innerWidth <= 500) {
  function popSlide() {
    unlock = false;
    let izbrisi = slides[5];
    const sliderParent = izbrisi.parentElement;
    slides[5].remove();
    sliderParent.prepend(izbrisi);
    slides = parent.children;
    parent.style.transition = 'none';
    parent.style.transform = 'translateX(-77vw)';
    btnAnimation('prev');
    setTimeout(() => {
      fixaj();
    }, 1);
    // console.log(slides);
  }
  function fixaj() {
    parent.style.transition = 'transform 0.5s ease';
    parent.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlock = true;
    }, 500);
  }
} else if (window.innerWidth > 500 && window.innerWidth <= 768) {
  function popSlide() {
    unlock = false;
    let izbrisi = slides[5];
    const sliderParent = izbrisi.parentElement;
    slides[5].remove();
    sliderParent.prepend(izbrisi);
    slides = parent.children;
    parent.style.transition = 'none';
    parent.style.transform = 'translateX(-38vw)';
    btnAnimation('prev');
    setTimeout(() => {
      fixaj();
    }, 1);
    // console.log(slides);
  }
  function fixaj() {
    parent.style.transition = 'transform 0.5s ease';
    parent.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlock = true;
    }, 500);
  }
} else if (window.innerWidth > 500) {
  function popSlide() {
    unlock = false;
    let izbrisi = slides[5];
    const sliderParent = izbrisi.parentElement;
    slides[5].remove();
    sliderParent.prepend(izbrisi);
    slides = parent.children;
    parent.style.transition = 'none';
    parent.style.transform = 'translateX(-25vw)';
    btnAnimation('prev');
    setTimeout(() => {
      fixaj();
    }, 1);
    // console.log(slides);
  }
  function fixaj() {
    parent.style.transition = 'transform 0.5s ease';
    parent.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlock = true;
    }, 500);
  }
}
parent.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'transform') {
    if (right) {
      shiftSlide();
    }
  }
});

function shiftSlide() {
  let izbrisi = slides[0];
  const sliderParent = izbrisi.parentElement;
  slides[0].remove();
  parent.style.transition = 'none';
  parent.style.transform = 'translateX(0)';

  sliderParent.appendChild(izbrisi);
  slides = parent.children;

  // console.log(slides);
}

function btnAnimation(nextx) {
  if (nextx == 'prev') {
    prev.animate(
      [
        { transform: 'rotateY(0)' },
        { transform: 'rotateY(-45deg)' },
        { transform: 'rotateY(0deg)' },
      ],
      {
        duration: 400,
      }
    );
    prev.style.backgroundColor = 'rgba(83, 109, 254, 0.7)';
    setTimeout(() => {
      prev.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }, 400);
  } else if (nextx == 'next') {
    next.animate(
      [
        { transform: 'rotateY(0)' },
        { transform: 'rotateY(45deg)' },
        { transform: 'rotateY(0deg)' },
      ],
      {
        duration: 400,
      }
    );
    next.style.backgroundColor = 'rgba(83, 109, 254, 0.7)';
    setTimeout(() => {
      next.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }, 400);
  }
}

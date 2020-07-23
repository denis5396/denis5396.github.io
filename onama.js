const nexto = document.querySelector('#nexto');
const prevo = document.querySelector('#prevo');
let slideso = document.querySelectorAll('.item');
const parento = document.querySelector('#slidetranslate');
const sliderwidtho = document.querySelector('#slidecontain');

righto = false;
lefto = false;
unlocko = true;
let countero = 1;
let boxWidtho = slideso[0].clientWidth;
// console.log(sliderwidtho);
// console.log(slideso);
slideso.forEach((slide) => {
  slide.style.width = `${boxWidtho}px`;
});
if (window.innerWidth > 500) {
  sliderwidtho.style.width = `${boxWidtho * 3 + 12}px`;
}

function bacajo() {
  unlocko = false;
  parento.style.transition = 'transform .5s ease';
  parento.style.transform = `translateX(${-boxWidtho - 10}px)`;
  unlocko = true;
}
nexto.addEventListener('click', () => {
  righto = true;
  lefto = false;
  // console.log(parento);
  if (unlocko) {
    bacajo();
  }
  // console.log(countero);
});
prevo.addEventListener('click', () => {
  lefto = true;
  righto = false;
  // console.log(parento);
  if (unlocko) {
    popSlideo();
  }
});

if (window.innerWidth <= 500) {
  function popSlideo() {
    unlocko = false;
    let izbrisi = slideso[9];
    const sliderparento = izbrisi.parentElement;
    slideso[9].remove();
    sliderparento.prepend(izbrisi);
    slideso = parento.children;
    parento.style.transition = 'none';
    parento.style.transform = 'translateX(-90vw)';
    setTimeout(() => {
      fixajo();
    }, 1);
    // console.log(slideso);
  }
  function fixajo() {
    parento.style.transition = 'transform 0.5s ease';
    parento.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlocko = true;
    }, 500);
  }
} else if (window.innerWidth > 500 && window.innerWidth <= 768) {
  function popSlideo() {
    unlocko = false;
    let izbrisi = slideso[9];
    const sliderparento = izbrisi.parentoElement;
    slideso[9].remove();
    sliderparento.prepend(izbrisi);
    slideso = parento.children;
    parento.style.transition = 'none';
    parento.style.transform = 'translateX(-38vw)';
    setTimeout(() => {
      fixajo();
    }, 1);
    // console.log(slideso);
  }
  function fixajo() {
    parento.style.transition = 'transform 0.5s ease';
    parento.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlocko = true;
    }, 500);
  }
} else if (window.innerWidth > 500) {
  function popSlideo() {
    unlocko = false;
    let izbrisi = slideso[9];
    // console.log(slideso.parentElement);
    const sliderparento = izbrisi.parentElement;
    slideso[9].remove();
    sliderparento.prepend(izbrisi);
    slideso = parento.children;
    parento.style.transition = 'none';
    parento.style.transform = 'translateX(-30vw)';
    setTimeout(() => {
      fixajo();
    }, 1);
    // console.log(slideso);
  }
  function fixajo() {
    parento.style.transition = 'transform 0.5s ease';
    parento.style.transform = `translateX(0vw)`;
    setTimeout(() => {
      unlocko = true;
    }, 500);
  }
}

parento.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'transform' && e.target.id === 'slidetranslate') {
    if (righto) {
      shiftslideo();
    }
  }
});

function shiftslideo() {
  let izbrisi = slideso[0];
  const sliderparento = izbrisi.parentElement;
  slideso[0].remove();
  parento.style.transition = 'none';
  parento.style.transform = 'translateX(0)';

  sliderparento.appendChild(izbrisi);
  slideso = parento.children;

  // console.log(slideso);
}

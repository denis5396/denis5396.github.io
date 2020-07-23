const showcase = document.querySelector('#header');
const firstShowcase = document.querySelector('#showcase');
const overlay = document.querySelector('#showcaseb');
const slider = document.querySelector('#slider');
const sliderLabel = document.querySelectorAll('#slider label');
const lis = document.querySelectorAll('nav ul li');
const swiperhover = document.querySelectorAll('label a');
const swiperoverlay = document.querySelector('.swipehover');
const translateY = document.querySelectorAll('.ty');
const footerBtn = document.querySelector('#hovanim');
const footerBtnAnmtn = document.querySelector('#fillbtn');
const footerBtnAnmtnx = document.querySelector('#fillbtn strong a');
const hovanim2 = document.querySelector('#hovanim2');
const ka = document.querySelector('#ka');
const kax = document.querySelector('#ka strong a');
const totop = document.querySelector('#totop');
const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

// console.log(sliderLabel);
totop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

translateY.forEach((li) => {
  li.addEventListener('mouseleave', swapback);
  li.addEventListener('mouseenter', swapfront);
});
let showcaseCount = 0;

// window orientationchange for slider
window.addEventListener('orientationchange', () => {
  window.location.reload();
});

footerBtn.addEventListener('mouseenter', () => {
  footerBtnAnmtnx.style.transition = 'color 0.5s ease';
  footerBtnAnmtnx.style.color = '#111';
  footerBtnAnmtn.style.animation = 'fillbtn 0.5s linear forwards';
});
footerBtn.addEventListener('mouseleave', () => {
  footerBtnAnmtnx.style.transition = 'color 0.5s ease';
  footerBtnAnmtnx.style.color = '#fff';
  footerBtnAnmtn.style.animation = 'fillbtnrev 0.5s ease-in forwards';
});
hovanim2.addEventListener('mouseenter', () => {
  kax.style.transition = 'color 0.5s ease';
  kax.style.color = '#111';
  ka.style.animation = 'fillbtn 0.5s linear forwards';
});
hovanim2.addEventListener('mouseleave', () => {
  kax.style.transition = 'color 0.5s ease';
  kax.style.color = '#fff';
  ka.style.animation = 'fillbtnrev 0.5s ease-in forwards';
});

function swapback(e) {
  const front = e.target.children[0];
  const back = e.target.children[1];
  front.style.transition = 'all 1s ease';
  front.animate(
    [{ transform: 'rotateY(90deg)' }, { transform: 'rotateY(0deg)' }],
    {
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards',
      delay: 100,
    }
  );
  back.animate(
    [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(90deg)' }],
    {
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards',
    }
  );
}

function swapfront(e) {
  const front = e.target.children[0];
  const back = e.target.children[1];
  front.style.transition = 'all 1s ease';
  front.animate(
    [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(90deg)' }],
    {
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards',
    }
  );
  back.animate(
    [{ transform: 'rotateY(90deg)' }, { transform: 'rotateY(0deg)' }],
    {
      duration: 200,
      delay: 200,
      easing: 'ease-in',
      fill: 'forwards',
    }
  );
}
let imgArray = [
  'url(img/showcaseclassic.jpg) no-repeat left/cover',
  'url(img/smarthome3.jpg) no-repeat 20% 10%/cover',
];
if (window.innerWidth <= 500) {
  imgArray = [
    'url(img/showcaseclassicss.jpg) no-repeat bottom right/cover',
    'url(img/smarthome3s.jpg) no-repeat 20% 10%/cover',
  ];
}
swiperhover.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    swiperoverlay.style.width = '11.8vw';
  });
  a.addEventListener('mouseleave', () => {
    swiperoverlay.style.width = '0vw';
  });
});

window.addEventListener('load', () => {
  firstShowcase.style.top = '0%';
  setTimeout(() => {
    overlay.style.top = '0%';
  }, 500);
  setTimeout(() => {
    slider.style.transform = 'translateX(0%)';
  }, 800);
});

for (let i = 1; i < lis.length; i++) {
  lis[i].addEventListener('mouseenter', () => {
    lis[0].style.opacity = '1';
  });
  lis[i].addEventListener('mouseleave', () => {
    lis[0].style.opacity = '0';
  });
}
setInterval(() => {
  firstShowcase.style.transition = 'background .8s ease-out';
  if (showcaseCount === 1) {
    firstShowcase.style.background =
      'url(img/LED_Lighting.jpg) no-repeat center top/cover';
    showcaseCount--;
  } else {
    let rnd = Math.floor(Math.random() * 2);
    firstShowcase.style.background = imgArray[rnd];
    showcaseCount++;
  }
}, 10000);

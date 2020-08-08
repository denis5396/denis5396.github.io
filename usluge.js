const right = document.querySelector('.fa-angle-right');
const left = document.querySelector('.fa-angle-left');
const sliderux = document.querySelector('#sliderux');
const sld = document.querySelectorAll('.sld');
let clickable = true;
let count = 1;
sliderux.style.transition = 'transform 0.5s ease';

window.addEventListener('load', (event) => {
  let countS = 1;
  let loop = setInterval(() => {
    if (clickable) {
      clickable = false;
      count++;

      sliderux.style.transition = 'transform 0.5s ease';

      changeSlide();
      setTimeout(() => {
        clickable = false;
        if (count === sld.length - 1) {
          sliderux.style.transition = 'none';
        }
        identify();
      }, 1000);
    }
  }, 3000);
  sliderux.addEventListener('mouseenter', mouseE);
  sliderux.addEventListener('mouseleave', mouseL);
  function mouseE() {
    clearInterval(loop);
  }
  function mouseL() {
    loop = setInterval(() => {
      if (clickable) {
        clickable = false;
        count++;

        sliderux.style.transition = 'transform 0.5s ease';

        changeSlide();
        setTimeout(() => {
          clickable = false;
          if (count === sld.length - 1) {
            sliderux.style.transition = 'none';
          }
          identify();
        }, 1000);
      }
    }, 3000);
  }
});
// Auto slider

// klik za više btni
// const jakaStruja = document.querySelector('#jakastr');
// const slabaStruja = document.querySelector('#slabastr');
// const knxSection = document.querySelector('#knx');
// const rasvjetaSection = document.querySelector('#rasvjeta');
// const dijagnozaSection = document.querySelector('#dijagnoza');
// const sigurnostSection = document.querySelector('#sigurnost');
// const planSection = document.querySelector('#planiranje');
// console.log(rasvjetaSection.getBoundingClientRect().top);
// const btnJs = document.querySelector('.sld:nth-of-type(2) .sldtxt a');
// const btnSs = document.querySelector('.sld:nth-of-type(3) .sldtxt a');
// const btnKnx = document.querySelector('.sld:nth-of-type(4) .sldtxt a');
// const btnRasvjeta = document.querySelector('.sld:nth-of-type(5) .sldtxt a');
// const btnDijagnoza = document.querySelector('.sld:nth-of-type(6) .sldtxt a');
// const btnSigurnost = document.querySelector('.sld:nth-of-type(7) .sldtxt a');
// const btnPlan = document.querySelector('.sld:nth-of-type(8) .sldtxt a');

// scrollOnClick(btnJs, jakaStruja);
// scrollOnClick(btnSs, slabaStruja);
// scrollOnClick(btnKnx, knxSection);
// scrollOnClick(btnRasvjeta, rasvjetaSection);
// scrollOnClick(btnDijagnoza, dijagnozaSection);
// scrollOnClick(btnSigurnost, sigurnostSection);
// scrollOnClick(btnPlan, planSection);

// clicktageventlist

const tagParent = document.querySelector('#tagcnt');
tagParent.addEventListener('click', clickTag);
function clickTag(e) {
  console.log(e.target.textContent);
  if (
    e.target.className === 'tagcustom' ||
    e.target.parentElement.className === 'tagcustom'
  ) {
    srchBox.value = e.target.textContent;
    srchBoxInput = srchBox.value.toLowerCase();
    srchCompare(srchBoxInput);
  }
}

// searchbox
const rasvjetaS = document.querySelector('#rasvjeta');
const jakastrS = document.querySelector('#jakastr');
const slabastrS = document.querySelector('#slabastr');
const knxS = document.querySelector('#knx');
const dijagnozaS = document.querySelector('#dijagnoza');
const sigurnostS = document.querySelector('#sigurnost');
const planiranjeS = document.querySelector('#planiranje');
const uslugeArr = [
  'rasvjeta',
  'jaka jake',
  'slaba slabe',
  'knx ets pametna kuća smart home',
  'dijagnoza i popravka',
  'sigurnost video nadzor alarm kamere kamera',
  'planiranje projektovanje planiranja projekt plan projekat',
];
const srchBox = document.querySelector('#sbox');
let srchBoxInput;
srchBox.addEventListener('input', (e) => {
  srchBoxInput = e.target.value.toLowerCase();
  // console.log(srchBoxInput);
  srchCompare(srchBoxInput);
});

right.addEventListener('click', () => {
  // console.log(count);
  if (clickable) {
    clickable = false;
    count++;

    sliderux.style.transition = 'transform 0.5s ease';

    changeSlide();
    setTimeout(() => {
      clickable = false;
      if (count === sld.length - 1) {
        sliderux.style.transition = 'none';
      }
      identify();
    }, 1000);
  }
});
left.addEventListener('click', () => {
  // console.log(count);
  if (clickable) {
    clickable = false;
    count--;

    sliderux.style.transition = 'transform 0.5s ease';

    changeSlide();
    setTimeout(() => {
      clickable = false;
      if (count === 0) {
        sliderux.style.transition = 'none';
      }
      identify();
    }, 1000);
  }
});

function changeSlide() {
  sliderux.style.transform = `translateX(-${100 * count}vw)`;
}
// console.log(sld);
function identify() {
  if (count === 0) {
    count = sld.length - 2;

    sliderux.style.transform = `translateX(-${100 * count}vw)`;
  } else if (count === sld.length - 1) {
    count = 1;
    sliderux.style.transform = `translateX(-${100 * count}vw)`;
  }
  clickable = true;
}

// function scrollOnClick(elemBtn, elemName) {
//   // const totopvar = elemName.getBoundingClientRect().top + window.scrollY;

//   // console.log(totopvar);
//   // elemBtn.addEventListener('click', () => {
//   //   window.scrollTo({
//   //     top: totopvar,
//   //     behavior: 'smooth',
//   //   });
//   // });
//   elemBtn.addEventListener('click', () => {
//     scrollToItem(elemName);
//   });
// }
// function scrollToItem(item) {
//   var diff = (item.offsetTop - window.scrollY) / 8;
//   if (Math.abs(diff) > 1) {
//     window.scrollTo(0, window.scrollY + diff);
//     clearTimeout(window._TO);
//     window._TO = setTimeout(scrollToItem, 10, item);
//   } else {
//     window.scrollTo(0, item.offsetTop);
//   }
// }
function srchCompare(inputVal) {
  for (let i = 0; i < newarrx.length; i++) {
    for (let j = 0; j < newarrx[i].length; j++) {
      if (inputVal.indexOf(newarrx[i][j]) !== -1) {
        findMatch(newarrx[i][j]);
      } else if (inputVal.length === 0) {
        rasvjetaS.style.display = 'block';
        knxS.style.display = 'block';
        dijagnozaS.style.display = 'block';
        planiranjeS.style.display = 'block';
        slabastrS.style.display = 'block';
        jakastrS.style.display = 'block';
        sigurnostS.style.display = 'block';
      }
    }
  }
}
let newarrx = [];
uslugeArr.forEach((item, idx) => {
  newarrx[idx] = item.split(' ');
});

// console.log(newarrx);
function findMatch(findMatchVal) {
  switch (findMatchVal) {
    case 'rasvjeta':
      rasvjetaS.style.display = 'block';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'none';
      slabastrS.style.display = 'none';
      jakastrS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
    case 'jaka':
    case 'jake':
      jakastrS.style.display = 'block';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'none';
      slabastrS.style.display = 'none';
      rasvjetaS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
    case 'slaba':
    case 'slabe':
      slabastrS.style.display = 'block';
      slabastrS.style.marginTop = '10rem';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'none';
      rasvjetaS.style.display = 'none';
      jakastrS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
    case 'knx':
    case 'pametna':
    case 'kuća':
    case 'ets':
    case 'smart':
    case 'home':
      knxS.style.display = 'block';
      rasvjetaS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'none';
      rasvjetaS.style.display = 'none';
      jakastrS.style.display = 'none';
      slabastrS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
    case 'dijagnoza':
    case 'popravka':
      slabastrS.style.display = 'none';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'block';
      planiranjeS.style.display = 'none';
      rasvjetaS.style.display = 'none';
      jakastrS.style.display = 'none';
      slabastrS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
    case 'sigurnost':
    case 'kamera':
    case 'kamere':
    case 'video':
    case 'nadzor':
    case 'alarm':
      slabastrS.style.display = 'none';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'none';
      rasvjetaS.style.display = 'none';
      jakastrS.style.display = 'none';
      slabastrS.style.display = 'none';
      sigurnostS.style.display = 'block';
      break;
    case 'planiranje':
    case 'projektovanje':
    case 'planiranja':
    case 'projekt':
    case 'plan':
    case 'projekat':
      slabastrS.style.display = 'none';
      knxS.style.display = 'none';
      dijagnozaS.style.display = 'none';
      planiranjeS.style.display = 'block';
      rasvjetaS.style.display = 'none';
      jakastrS.style.display = 'none';
      slabastrS.style.display = 'none';
      sigurnostS.style.display = 'none';
      break;
  }
}

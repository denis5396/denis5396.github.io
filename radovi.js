const showOverlay = document.querySelector('.overlayp');
const parentCon = document.querySelector('#rasvjetab'); //
const parentCon1 = document.querySelector('#solarb');
const parentCon2 = document.querySelector('#mrezeitelb');
const parentCon3 = document.querySelector('#pamkucb');
const parentCon4 = document.querySelector('#kamererb');
const xmark = document.querySelector('.xmarkcon');
const slikeCon = document.querySelector('.slikaCon');
const slikeConimg = document.querySelector('.slikaCon img');
const chevL = document.querySelector('.fa-chevron-left');
const chevR = document.querySelector('.fa-chevron-right');
let imgArray1;
let idName; //
let count = 0;
let getImgId;
let arr1Imgs = [];
// console.log(imgArray1);
repeat2(parentCon);
repeat2(parentCon1);
repeat2(parentCon2);
repeat2(parentCon3);
repeat2(parentCon4);

// parentCon1.addEventListener('click', (e) => {
//   idName = e.target.parentElement.parentElement.id;
//   repeat(e);
// });
// parentCon2.addEventListener('click', (e) => {
//   idName = e.target.parentElement.parentElement.id;
//   repeat(e);
// });
// parentCon3.addEventListener('click', (e) => {
//   idName = e.target.parentElement.parentElement.id;
//   repeat(e);
// });
// parentCon4.addEventListener('click', (e) => {
//   idName = e.target.parentElement.parentElement.id;
//   repeat(e);
// });
xmark.addEventListener('click', () => {
  showOverlay.style.transition = 'none';
  showOverlay.style.opacity = 0;
  showOverlay.style.zIndex = -1;
  xmark.style.zIndex = -1;
  xmark.style.opacity = 0;
  chevL.style.zIndex = -1;
  chevL.style.opacity = 0;
  chevR.style.zIndex = -1;
  chevR.style.opacity = 0;
  slikeConimg.setAttribute('src', '#');
  slikeCon.style.opacity = 0;
  slikeCon.style.zIndex = -1;
  removeIds();
});
chevR.addEventListener('click', () => {
  if (getImgId === arr1Imgs.length - 1) {
    getImgId = 0;
  } else {
    getImgId++;
  }
  slikeConimg.setAttribute('src', arr1Imgs[getImgId]);
});
chevL.addEventListener('click', () => {
  if (getImgId === 0) {
    getImgId = arr1Imgs.length - 1;
  } else {
    getImgId--;
  }
  slikeConimg.setAttribute('src', arr1Imgs[getImgId]);
});
// console.log(arr1Imgs);

function repeat(e) {
  imgArray1 = document.querySelectorAll('#' + idName + ' .portfcol img');
  // console.log(imgArray1);
  imgArray1.forEach((img, idx) => {
    img.id = idx;
  });
  imgArray1.forEach((img, idx) => {
    arr1Imgs[idx] = img.getAttribute('src');
  });

  showOverlay.style.transition = 'opacity 0.5s ease';
  const imgSrc = e.target.getAttribute('src');
  showOverlay.style.opacity = 1;
  showOverlay.style.zIndex = 0;
  xmark.style.zIndex = 1;
  xmark.style.opacity = 1;
  slikeCon.style.opacity = 1;
  slikeCon.style.zIndex = 1;
  chevL.style.zIndex = 1;
  chevL.style.opacity = 1;
  chevR.style.zIndex = 1;
  chevR.style.opacity = 1;
  slikeConimg.setAttribute('src', imgSrc);
  getImgId = parseInt(e.target.id);
}

function removeIds() {
  imgArray1.forEach((img) => {
    img.removeAttribute('id');
  });
  imgArray1 = [];
  arr1Imgs = [];
}

function repeat2(parN) {
  parN.addEventListener('click', (e) => {
    idName = e.target.parentElement.parentElement.id;
    repeat(e);
  });
}

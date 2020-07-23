const showOverlay = document.querySelector('.overlayp');
const parentCon = document.querySelector('#port1b');
const xmark = document.querySelector('.xmarkcon');
const slikeCon = document.querySelector('.slikaCon');
const slikeConimg = document.querySelector('.slikaCon img');
const chevL = document.querySelector('.fa-chevron-left');
const chevR = document.querySelector('.fa-chevron-right');
const imgArray1 = document.querySelectorAll('.port1bimg img');
let getImgId;
let arr1Imgs = [];
imgArray1.forEach((img, idx) => {
  arr1Imgs[idx] = img.getAttribute('src');
});

parentCon.addEventListener('click', (e) => {
  if ((e.target.classList = 'port1bimgx')) {
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
});
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

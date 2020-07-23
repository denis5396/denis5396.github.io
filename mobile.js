const mobileDropdown = document.querySelector('#hambmobilemenu');
const mobileDropdownUl = document.querySelector('#hambmobilemenu ul');
const nav = document.querySelector('#nav');
const dropdownClick = document.querySelector('#hmenu');
const dropDown = nav.clientHeight;
const totop1 = document.querySelector('#totop1');

// change img src on main site if mobile
const label1 = document.querySelector('#slide1 img');
const label2 = document.querySelector('#slide2 img');
const label3 = document.querySelector('#slide3 img');
const label4 = document.querySelector('#slide4 img');
const label5 = document.querySelector('#slide5 img');
if (label1 && label2 && label3 && label4 && label5) {
  if (window.innerWidth <= 500) {
    label1.setAttribute('src', '/img/smarthomes.jpg');
    label2.setAttribute('src', '/img/camerass.jpg');
    label3.setAttribute('src', '/img/showcaseclassic1s.jpg');
    label4.setAttribute('src', '/img/showcaseclassics.jpg');
    label5.setAttribute('src', 'img/weakcurs.jpg');
  }
}

let screenPos = window.pageYOffset;
window.addEventListener('scroll', () => {
  screenPos = window.pageYOffset;
  if (screenPos > 500) {
    if (totop1) {
      totop1.style.display = 'flex';
    }
  } else if (screenPos < 500) {
    if (totop1) {
      totop1.style.display = 'none';
    }
  }
});

let working = false;

// alert(window.innerWidth);
mobileDropdownUl.style.transform = 'translateY(10rem)';

mobileDropdownUl.style.opacity = '0';
mobileDropdownUl.style.transition =
  'transform 0.5s ease, opacity 0.2s ease, display 1s ease';

mobileDropdown.style.marginTop = dropDown + 'px';
// console.log(dropdownClick);
dropdownClick.addEventListener('click', () => {
  dropdownClick.disabled = true;
  setTimeout(() => {
    dropdownClick.disabled = false;
  }, 500);

  if (!working) {
    working = true;
  } else if (working) {
    working = false;
  }
  if (working) {
    mobileDropdownUl.style.display = 'flex';
    setTimeout(() => {
      mobileDropdownUl.style.transform = 'translateY(0rem)';
      mobileDropdownUl.style.opacity = '1';
    }, 10);
  } else if (!working) {
    mobileDropdownUl.style.transform = 'translateY(10rem)';
    mobileDropdownUl.style.opacity = '0';
    setTimeout(() => {
      mobileDropdownUl.style.display = 'none';
    }, 400);
  }
});

if (totop1) {
  totop1.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

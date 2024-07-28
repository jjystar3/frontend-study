let el = document.querySelector('.walls');
let viewportOffset = el.getBoundingClientRect();
let wallCenterPos = viewportOffset.top + viewportOffset.height * 0.5;

let wallLeft = document.querySelector('.wall__left');
let wallRight = document.querySelector('.wall__right');

let scrollCenter = window.scrollY + window.innerHeight * 0.5;
let skewValue = (scrollCenter - wallCenterPos) * 0.1 + 50;
el.style.perspectiveOrigin = 'center ' + skewValue + '%';
// wallLeft.style.transform = 'skewY(' + skewValue + 'deg)';
// wallRight.style.transform = 'skewY(' + -skewValue + 'deg)';

// wallHorizontal.forEach(function (wallH) {
//   wallH.style.transform = 'skew(0, ' + skewValue + 'deg)';
// });

// 450 : 53.13



window.addEventListener('scroll', function () {
  scrollCenter = window.scrollY + window.innerHeight * 0.5;
  let skewValue = (scrollCenter - wallCenterPos) * 0.1 + 50;
  el.style.perspectiveOrigin = 'center ' + skewValue + '%';
  // wallLeft.style.transform = 'skewY(' + skewValue + 'deg)';
  // wallRight.style.transform = 'skewY(' + -skewValue + 'deg)';
});
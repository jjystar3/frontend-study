// ScrollMagic 사용법
// let spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEls);

// spyEls.forEach(function (spyEl) {
//   new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
//     triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
//     triggerHook: 0.5// 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
//   })
//   .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
//   .addTo(new ScrollMagic.Controller());
// });





// 모달창 띄우기
let modalEl = document.querySelector('#modal');
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
console.log(modalBtn);

modalBtn[0].addEventListener('click', function () {
  // console.log('클릭됨');
  modalEl.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
new Date().getFullYear(); // 현재 연도 정보가 숫자 데이터로 반환됨
console.log(new Date().getFullYear());

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치

  // 페이지 스크롤 위치가 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기
  if(window.scrollY > 500){
    // toTopBtn.style.display = 'flex';
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = 'translateX(0)';
  }else{
    // toTopBtn.style.display = 'none';
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }


});


let bgDay = document.querySelector('.bg-day');
let bgNight = document.querySelector('.bg-night');

let bgImg = document.querySelector('.bg-img');

$(document).ready(function() {

  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent*100);

      // $('#scrollPercentLabel>span').html(scrollPercentRounded);
      // console.log(scrollPercentRounded);
      // bgDay.style.opacity = 1 - (scrollPercentRounded * 0.01);
      bgNight.style.opacity = scrollPercentRounded * 0.01;

      if(scrollPercentRounded < 10 || scrollPercentRounded > 90){
        bgImg.style.filter = 'blur(0)';  
      }else{
        bgImg.style.filter = 'blur(10px)';  
      }

      if (checkVisible($('.skill-spy'))) {
        $('.skill-spy').addClass("show");
      } else {
        $('.skill-spy').removeClass("show");
      }

      repositionLabel();
  });

  $(window).resize(function(){
    repositionLabel();
  });

  function repositionLabel() {
    $('#scrollPercentLabel').css({
      position:'fixed',
      left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
      top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
    });
  }

  repositionLabel();

});


// $(window).scroll(function() {
//   if (checkVisible($('section.scroll-spy'))) {
    
//       element.classList.add("show");
//   } else {
    
//   }
// });


function checkVisible( elm, eval ) {
  eval = eval || "visible";
  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();
  
  if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (eval == "above") return ((y < (vpH + st)));
}
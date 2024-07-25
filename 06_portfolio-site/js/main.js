// ScrollMagic 사용법
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5// 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
});

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
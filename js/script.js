let swiper = new Swiper(".swiper-container", {
  // 옵션 설정
  slidesPerView: 2, // 동시에 보여질 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이의 간격 (픽셀 단위)
  loop: true, // 루프 여부 (마지막 슬라이드에서 첫 번째로)

  // 페이징, 네비게이션 등의 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

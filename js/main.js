const swiper = new Swiper('.swiper.swiper-header', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:  'delay: 5000',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type:'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiper2 = new Swiper(".swiper-services", {
  slidesPerView: 3,
  spaceBetween: 30,
});

const swiper3 = new Swiper('.swiper-partners', {
  effect: 'fade',
});
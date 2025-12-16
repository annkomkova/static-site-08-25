import '../stylesheets/articles.css'

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: 'true'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  }

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // }
})

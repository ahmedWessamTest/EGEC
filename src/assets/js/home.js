
  const initTestimonialsCarousel = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // عدد الكروت في الموبايل
    spaceBetween: 20, // المسافة بين الكروت
    loop: true,
    autoplay: {
      // delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
initTestimonialsCarousel();
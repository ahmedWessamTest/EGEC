const initWhyEGECCarousel = () => {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20, 
    loop: true,
    centerInsufficientSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
const initStudyAbroadServicesCarousel = () => {
  new Swiper(".studySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".studyNext",
      prevEl: ".studyPrev",
    },
    breakpoints: {
      0: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2.5 },
    },
  });
}
const initOurMissionCarousel = () => {
  const missionData = [
    {
      title: "مهمتنا",
      text: "بناء كيان متميز لتقديم أفضل أشكال المعرفة العلمية ورفع المستوى العلمي والمعرفي"
    },
    {
      title: "رؤيتنا",
      text: "أن نكون الوجهة الأولى للطلاب الراغبين في التعليم بالخارج من خلال خدمات متكاملة ودعم مستمر."
    },
    {
      title: "قيمنا",
      text: "الشفافية، الجودة، الالتزام، ودعم الطلاب لتحقيق طموحاتهم الأكاديمية حول العالم."
    },
  ];

  const missionText = document.getElementById("missionText");
 new Swiper(".myMissionSwiper", {
      slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        const activeIndex = (this.realIndex) % missionData.length;
        const { title, text } = missionData[activeIndex];
        missionText.innerHTML = `
          <h3 class="text-3xl font-bold text-main-blue mb-2">${title}</h3>
          <p class="text-main-green font-semibold">${text}</p>
        `;
      },
    },
  });
}
initWhyEGECCarousel();
initStudyAbroadServicesCarousel();
initOurMissionCarousel();

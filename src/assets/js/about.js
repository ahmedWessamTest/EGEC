const initWhyEGECCarousel = () => {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20, 
    loop: true,
    centerInsufficientSlides: true,
    rtl: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    preventInteractionOnTransition: true,
    touchRatio: 1,
    grabCursor: true,
    breakpoints: {
      640: { 
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: { 
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
    on: {
      init: function() {
        this.update();
      }
    }
  });
}
const initStudyAbroadServicesCarousel = () => {
  new Swiper(".studySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    loop: true,
    rtl: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".studyNext",
      prevEl: ".studyPrev",
    },
    preventInteractionOnTransition: true,
    touchRatio: 1,
    grabCursor: true,
    breakpoints: {
      0: { 
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      768: { 
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: { 
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
    },
    on: {
      init: function() {
        this.update();
      }
    }
  });
}

const initOurMissionCarousel = () => {
  const isEn = window.location.href.includes("en");
let missionData = [];

   missionData = isEn? [
  {
    title: "Our Mission",
    text: "To build a distinguished entity that provides the best forms of scientific knowledge and raises the scientific and intellectual level."
  },
  {
    title: "Our Vision",
    text: "To be the first destination for students aspiring to study abroad through comprehensive services and continuous support."
  },
  {
    title: "Our Values",
    text: "Transparency, quality, commitment, and supporting students in achieving their academic ambitions worldwide."
  },
]
: [
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

  const missionText = document.getElementById("ourMissionText");
 new Swiper(".ourMissionSwiper", {
      slidesPerView: 1,
    loop: true,
    rtl: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    preventInteractionOnTransition: true,
    touchRatio: 1,
    grabCursor: true,
    on: {
      init: function() {
        this.update();
      },
      slideChange: function () {
        const activeIndex = (this.realIndex) % missionData.length;
        const { title, text } = missionData[activeIndex];
        missionText.innerHTML = `
          <h2 class="text-4xl font-bold text-[#1e4f92]">${title}</h2>
          <img
                      src="../assets/icons/single-green-line.webp"
                      loading="lazy"
                      width="150"
                      height="5"
                      class="my-2 mx-auto lg:ms-0.5"
                      alt="line"
                    />
          <p class="text-main-green font-semibold">${text}</p>
        `;
      },
    },
  });
}
const initPartnersCarousel = () => {
  const slidesCount = document.querySelectorAll(".partnersSwiper .swiper-slide").length;
  const middleIndex = Math.floor(slidesCount / 2); // العنصر اللي في النص

  new Swiper(".partnersSwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,
    initialSlide: middleIndex,
    rtl: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    preventInteractionOnTransition: true,
    touchRatio: 1,
    grabCursor: true,
    breakpoints: {
      768: { 
        slidesPerView: 5,
        spaceBetween: 80,
      },
      1024: { 
        slidesPerView: 7,
        spaceBetween: 100,
      },
    },
    on: {
      init: function () {
        const active = this.slides[this.activeIndex].querySelector("img");
        if (active) {
          active.classList.remove("grayscale");
          active.classList.add("scale-110");
        }
      },
      slideChangeTransitionStart: function () {
        this.slides.forEach((slide) => {
          const img = slide.querySelector("img");
          if (img) {
            img.classList.add("grayscale");
            img.classList.remove("scale-110");
          }
        });
      },
      slideChangeTransitionEnd: function () {
        const active = this.slides[this.activeIndex].querySelector("img");
        if (active) {
          active.classList.remove("grayscale");
          active.classList.add("scale-110");
        }
      },
    },
  });
};


const initAllCarousel = () => {
initWhyEGECCarousel();
initStudyAbroadServicesCarousel();
initOurMissionCarousel();
initPartnersCarousel();
}
// when start
initAllCarousel();
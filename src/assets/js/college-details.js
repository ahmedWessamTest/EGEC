const observeAccordion = () => {
  const observer = new MutationObserver(() => {
    const accordions = document.querySelectorAll("[data-accordion-target]");
    const opened = Array.from(accordions).filter(
      (b) => !document.querySelector(b.getAttribute("data-accordion-target")).classList.contains("hidden")
    );

    // لو مفيش ولا واحد مفتوح → افتح أول واحد
    if (opened.length === 0 && accordions.length > 0) {
      const first = accordions[0];
      const target = document.querySelector(first.getAttribute("data-accordion-target"));
      target.classList.remove("hidden");
      first.setAttribute("aria-expanded", "true");
    }
  });

  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
};
const initCollegeCarousel = () => {
  const slidesCount = document.querySelectorAll(
    ".collageSwiper .swiper-slide"
  ).length;
  const middleIndex = Math.floor(slidesCount / 2);

  new Swiper(".collageSwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 50,
    // rewind: true,
    initialSlide: middleIndex,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    breakpoints: {
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 7 },
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
const prominentGraduatesCarousel = () => {
  new Swiper(".Prominent-graduates", {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
};
const initPage = () => {
  observeAccordion();
  initCollegeCarousel();
  prominentGraduatesCarousel();
}
document.addEventListener("DOMContentLoaded", initPage);

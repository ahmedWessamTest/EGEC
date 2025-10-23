// 🧩 Carousel initialization
const initTestimonialsCarousel = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    direction: "horizontal",
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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchOverflow: true,
    preventInteractionOnTransition: true,
    touchRatio: 1,
    touchAngle: 45,
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
        // Ensure proper RTL handling
        this.update();
      }
    }
  });
};

// 🧩 Dropdown filter function
const filterDropdownItems = (e) => {
  if (e.target.matches("[data-filter-input]")) {
    const input = e.target;
    const filterValue = input.value.toLowerCase();
    const dropdown = input.closest("div[id$='Navbar']");
    const items = dropdown.querySelectorAll("ul li button");

    items.forEach((btn) => {
      const text = btn.textContent.toLowerCase();
      btn.closest("li").style.display = text.includes(filterValue) ? "" : "none";
    });
  }
};

// 🧩 Event listener initialization
const initListeners = () => {
  document.addEventListener("input", filterDropdownItems);
};

// 🧩 Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  initTestimonialsCarousel();
  initListeners();
});

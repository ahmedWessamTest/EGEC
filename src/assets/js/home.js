const initTestimonialsCarousel = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, 
    spaceBetween: 20, 
    loop: true,
    autoplay: {
      delay: 5000,
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

const filterDropdownItems = (e) => {
if (e.target.matches("[data-filter-input]")) {
      const input = e.target;
      const filterValue = input.value.toLowerCase();
      const dropdown = input.closest("div[id$='Navbar']");
      const items = dropdown.querySelectorAll("ul li button");
  
      items.forEach((btn) => {
        const text = btn.textContent.toLowerCase();
        btn.closest("li").style.display = text.includes(filterValue)
          ? ""
          : "none";
      });
    }
}

const initListers = () => {
  document.addEventListener("input", filterDropdownItems.bind(this));
}

initTestimonialsCarousel();
initListers();
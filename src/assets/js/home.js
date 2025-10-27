const initHeaderCarousel = () => {
  new Swiper(".headerSwiper", {
    slidesPerView:1,
    loop: true,
    spaceBetween: 20,
    centeredSlides: false,
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
  });
}
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


const searchDropdown = (e) => {
  // ---------------- Toggle dropdowns ----------------
  const toggleBtn = e.target.closest("[data-dropdown-toggle]");
  if (toggleBtn) {
    const menuId = toggleBtn.getAttribute("data-dropdown-toggle");
    const menu = document.getElementById(menuId);
    
    // اقفل أي dropdown مفتوح قبل ما أفتح اللي انت ضغطت عليه
    document.querySelectorAll("[id$='Navbar']:not(#" + menuId + ")").forEach(m => {
      m.classList.add("hidden");
    });

    menu.classList.toggle("hidden");
  } 
  // لو ضغطت برا أي dropdown → اقفل الكل
  else {
    if (!e.target.closest("[id$='Navbar']")) {
      document.querySelectorAll("[id$='Navbar']").forEach(m => m.classList.add("hidden"));
    }
  }
}
const initListers = () => {
  document.addEventListener("input", filterDropdownItems.bind(this));
  document.addEventListener("click", searchDropdown);
}
initTestimonialsCarousel();
initHeaderCarousel();
initListers();
   

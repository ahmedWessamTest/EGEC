// globals
const navMenu = document.getElementById("navbar-custom");
const mainNavBtn = document.getElementById("customNavBtn")
const mainNavbar = document.getElementById("main-navbar");
let navbarOffset = mainNavbar.getBoundingClientRect().top + window.scrollY;
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // عدد الكروت في الموبايل
    spaceBetween: 20, // المسافة بين الكروت
    loop: true,
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

// functions
const initTestimonialsCarousel = () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // عدد الكروت في الموبايل
    spaceBetween: 20, // المسافة بين الكروت
    loop: true,
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
const openNavbar = ()=>{
if (navMenu.classList.contains("max-h-0")) {
    navMenu.classList.remove("max-h-0");
    navMenu.classList.add("max-h-[500px]");
  } else {
    navMenu.classList.remove("max-h-[500px]");
    navMenu.classList.add("max-h-0");
  }
}
const navbarDown = () => {
  if (window.scrollY > navbarOffset) { 
    mainNavbar.classList.add("navbar-scrolled",'fixed');
  } else {
    mainNavbar.classList.remove("navbar-scrolled","fixed");
  }
}
// listeners
mainNavBtn.addEventListener("click",()=>{
  openNavbar()
})


window.addEventListener("scroll", function () {
  navbarDown()
});

window.addEventListener("resize",()=>{
navbarOffset = elementPositionFromTop(mainNavbar)
})

const currentPath = location.hash ||  location.pathname;
const subNavbarItem = document.querySelectorAll('#SubNavbar .navbar-item');
subNavbarItem.forEach(link => {
  // const actualPath = currentPath.split('/').at(-1).replace('.html','');
  // console.log(actualPath);
  if(link.getAttribute("href") === currentPath) {
    link.classList.add("active")
  }
});

// utils
const elementPositionFromTop = (element) => {
  return element.getBoundingClientRect().top + window.scrollY
}
// When Start
initTestimonialsCarousel();
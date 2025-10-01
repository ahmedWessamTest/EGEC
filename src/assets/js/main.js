// globals
const navMenu = document.getElementById("navbar-custom");
const mainNavBtn = document.getElementById("customNavBtn")
const mainNavbar = document.getElementById("main-navbar");
let navbarOffset = mainNavbar.getBoundingClientRect().top + window.scrollY;
// functions
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
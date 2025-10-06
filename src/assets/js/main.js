// Configuration and Constants
const CONFIG = {
  SCROLL_THRESHOLD: 300,
  NAVBAR_TRANSITION: {
    MAX_HEIGHT: {
      COLLAPSED: 'max-h-0',
      EXPANDED: 'max-h-[500px]'
    }
  },
  CLASSES: {
    NAVBAR_SCROLLED: 'navbar-scrolled',
    FIXED: 'fixed',
    ACTIVE: 'active',
    HIDDEN: '-start-10',
    VISIBLE: 'start-6',
    SIDENAV_HIDDEN: '-start-15',
    SIDENAV_VISIBLE: 'start-2',
    SIDEMENU_HIDDEN: '-start-full',
    SIDEMENU_VISIBLE: 'inset-0'
  }
};

// DOM Elements
const elements = {
  navMenu: document.getElementById("navbar-custom"),
  mainNavBtn: document.getElementById("customNavBtn"),
  mainNavbar: document.getElementById("main-navbar"),
  scrollTopBtn: document.getElementById("scrollToTopBtn"),
  sideNav: {
    openBtn: document.getElementById("sideMenuBtn"),
    registerMenu: document.getElementById("registerMenu"),
    closeBtn: document.getElementById("closeMenuBtn"),
  }
};

// Check if required elements exist
if (!elements.mainNavbar) {
  console.error('Main navbar element not found');
}

// State
let navbarOffset = elements.mainNavbar ? elements.mainNavbar.getBoundingClientRect().top + window.scrollY : 0;

// Utility Functions
const getElementPositionFromTop = (element) => {
  return element ? element.getBoundingClientRect().top + window.scrollY : 0;
};

const toggleClass = (element, classToRemove, classToAdd) => {
  if (!element) return;
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
};

const replaceClass = (element, oldClass, newClass) => {
  if (!element) return;
  element.classList.replace(oldClass, newClass);
};

// Core Functions
const toggleNavbar = () => {
  const { navMenu } = elements;
  if (!navMenu) return;
  
  const { COLLAPSED, EXPANDED } = CONFIG.NAVBAR_TRANSITION.MAX_HEIGHT;
  
  const isCollapsed = navMenu.classList.contains(COLLAPSED);
  
  if (isCollapsed) {
    toggleClass(navMenu, COLLAPSED, EXPANDED);
  } else {
    toggleClass(navMenu, EXPANDED, COLLAPSED);
  }
};

const handleNavbarScroll = () => {
  const { mainNavbar } = elements;
  if (!mainNavbar) return;
  
  const { NAVBAR_SCROLLED, FIXED } = CONFIG.CLASSES;
  
  const shouldFixNavbar = window.scrollY > navbarOffset;
  
  if (shouldFixNavbar) {
    mainNavbar.classList.add(NAVBAR_SCROLLED, FIXED);
  } else {
    mainNavbar.classList.remove(NAVBAR_SCROLLED, FIXED);
  }
};

const setActiveNavbarItem = () => {
  const currentPath = location.hash || location.pathname;
  const subNavbarItems = document.querySelectorAll('#SubNavbar .navbar-item');
  
  subNavbarItems.forEach(item => {
    const isActive = item.getAttribute("href") === currentPath;
    item.classList.toggle(CONFIG.CLASSES.ACTIVE, isActive);
  });
};

const toggleScrollButton = () => {
  const { scrollTopBtn } = elements;
  if (!scrollTopBtn) return;
  
  const { HIDDEN, VISIBLE } = CONFIG.CLASSES;
  const shouldShow = window.scrollY > CONFIG.SCROLL_THRESHOLD;
  
  if (shouldShow) {
    replaceClass(scrollTopBtn, HIDDEN, VISIBLE);
  } else {
    replaceClass(scrollTopBtn, VISIBLE, HIDDEN);
  }
};

const toggleSideNavButton = () => {
  const { sideNav } = elements;
  if (!sideNav.openBtn) return;
  
  const { SIDENAV_HIDDEN, SIDENAV_VISIBLE } = CONFIG.CLASSES;
  const shouldShow = window.scrollY > CONFIG.SCROLL_THRESHOLD;
  
  if (shouldShow) {
    replaceClass(sideNav.openBtn, SIDENAV_HIDDEN, SIDENAV_VISIBLE);
  } else {
    replaceClass(sideNav.openBtn, SIDENAV_VISIBLE, SIDENAV_HIDDEN);
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const openSideMenu = () => {
  const { registerMenu } = elements.sideNav;
  if (!registerMenu) return;
  
  const { SIDEMENU_HIDDEN, SIDEMENU_VISIBLE } = CONFIG.CLASSES;
  toggleClass(registerMenu, SIDEMENU_HIDDEN, SIDEMENU_VISIBLE);
};

const closeSideMenu = () => {
  const { registerMenu } = elements.sideNav;
  if (!registerMenu) return;
  
  const { SIDEMENU_HIDDEN, SIDEMENU_VISIBLE } = CONFIG.CLASSES;
  toggleClass(registerMenu, SIDEMENU_VISIBLE, SIDEMENU_HIDDEN);
};

const handleSideMenuClick = (event) => {
  if (event.target === elements.sideNav.registerMenu) {
    closeSideMenu();
  }
};

const handleWindowResize = () => {
  if (!elements.mainNavbar) return;
  navbarOffset = getElementPositionFromTop(elements.mainNavbar);
};

const handleScroll = () => {
  handleNavbarScroll();
  toggleScrollButton();
  toggleSideNavButton();
};

const initialize = () => {
  setActiveNavbarItem();
};

// Event Listeners
const setupEventListeners = () => {
  const { mainNavBtn, scrollTopBtn, sideNav } = elements;
  
  if (mainNavBtn) {
    mainNavBtn.addEventListener("click", toggleNavbar);
  }
  
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", scrollToTop);
  }
  
  if (sideNav.openBtn) {
    sideNav.openBtn.addEventListener("click", openSideMenu);
  }
  
  if (sideNav.closeBtn) {
    sideNav.closeBtn.addEventListener("click", closeSideMenu);
  }
  
  if (sideNav.registerMenu) {
    sideNav.registerMenu.addEventListener("click", handleSideMenuClick);
  }
  
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleWindowResize);
};

// Initialize Application
const init = () => {
  initialize();
  setupEventListeners();
};

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
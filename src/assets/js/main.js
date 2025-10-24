// =====================
// Configuration & Constants
// =====================
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
    ACTIVE: 'active-nav-item',
    HIDDEN: '-start-15',
    VISIBLE: 'start-6',
    SIDENAV_HIDDEN: '-start-15',
    SIDENAV_VISIBLE: '-start-1',
    SIDEMENU_HIDDEN: '-start-full',
    SIDEMENU_VISIBLE: 'inset-0'
  }
};

// =====================
// DOM Elements
// =====================
const elements = {
  navMenu: document.getElementById("navbar-custom"),
  mainNavBtn: document.getElementById("customNavBtn"),
  mainNavbar: document.getElementById("main-navbar"),
  navLogo: document.getElementById("navLogo"),
  scrollTopBtn: document.getElementById("scrollToTopBtn"),
  sideNav: {
    openBtn: document.getElementById("sideMenuBtn"),
    registerMenu: document.getElementById("registerMenu"),
    closeBtn: document.getElementById("closeMenuBtn"),
  }
};

if (!elements.mainNavbar) {
  console.error('Main navbar element not found');
}

// =====================
// State
// =====================
let navbarOffset = elements.mainNavbar
  ? elements.mainNavbar.getBoundingClientRect().top + window.scrollY
  : 0;

// =====================
// Utility Functions
// =====================
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

// =====================
// Core Functions
// =====================
const closeLoadingScreen = () => {
  document.body.style.overflow = 'hidden';
  const loadingScreen = document.getElementById('loadingScreen');
  
  window.addEventListener('load', () => {
    loadingScreen?.classList.add('hidden');
    document.body.style.overflow = '';
  });

  setTimeout(() => {
    loadingScreen?.classList.add('hidden');
  }, 3000);
};

const toggleNavbar = () => {
  const { navMenu } = elements;
  if (!navMenu) return;
  const { COLLAPSED, EXPANDED } = CONFIG.NAVBAR_TRANSITION.MAX_HEIGHT;
  const isCollapsed = navMenu.classList.contains(COLLAPSED);
  toggleClass(navMenu, isCollapsed ? COLLAPSED : EXPANDED, isCollapsed ? EXPANDED : COLLAPSED);
};

const handleNavbarScroll = () => {
  const { mainNavbar, navLogo } = elements;
  if (!mainNavbar) return;
  const { NAVBAR_SCROLLED, FIXED } = CONFIG.CLASSES;
  const shouldFixNavbar = window.scrollY > navbarOffset;

  if (shouldFixNavbar) {
    mainNavbar.classList.add(NAVBAR_SCROLLED, FIXED);
    navLogo?.setAttribute("src", "../assets/images/shared/green-logo.webp");
  } else {
    mainNavbar.classList.remove(NAVBAR_SCROLLED, FIXED);
    navLogo?.setAttribute("src", "../assets/images/home/logo.webp");
  }
};

const setActiveNavbarItem = () => {
  const currentPath = location.hash || location.pathname;
  const subNavbarItems = document.querySelectorAll('#SubNavbar .navbar-item');
  const actualCurrentPath = `./${currentPath.split('/').at(-1)}`;
  
  subNavbarItems.forEach(item => {
    const isActive = item.getAttribute("href") === actualCurrentPath;
    item.classList.toggle(CONFIG.CLASSES.ACTIVE, isActive);
  });
};

const toggleScrollButton = () => {
  const { scrollTopBtn } = elements;
  if (!scrollTopBtn) return;
  const { HIDDEN, VISIBLE } = CONFIG.CLASSES;
  const shouldShow = window.scrollY > CONFIG.SCROLL_THRESHOLD;
  replaceClass(scrollTopBtn, shouldShow ? HIDDEN : VISIBLE, shouldShow ? VISIBLE : HIDDEN);
};

const toggleSideNavButton = () => {
  const { sideNav } = elements;
  if (!sideNav.openBtn) return;
  const { SIDENAV_HIDDEN, SIDENAV_VISIBLE } = CONFIG.CLASSES;
  const shouldShow = window.scrollY > CONFIG.SCROLL_THRESHOLD;
  replaceClass(sideNav.openBtn, shouldShow ? SIDENAV_HIDDEN : SIDENAV_VISIBLE, shouldShow ? SIDENAV_VISIBLE : SIDENAV_HIDDEN);
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
  if (event.target === elements.sideNav.registerMenu) closeSideMenu();
};

// =====================
// Optimized Scroll & Resize (THROTTLED)
// =====================
let scrollTicking = false;
let resizeTimeout;

const optimizedScrollHandler = () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      handleNavbarScroll();
      toggleScrollButton();
      toggleSideNavButton();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
};

const optimizedResizeHandler = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    navbarOffset = getElementPositionFromTop(elements.mainNavbar);
  }, 150);
};

// =====================
// Initialization
// =====================
const initialize = () => {
  setActiveNavbarItem();
  closeLoadingScreen();
};

// =====================
// Event Listeners
// =====================
const setupEventListeners = () => {
  const { mainNavBtn, scrollTopBtn, sideNav } = elements;

  mainNavBtn?.addEventListener("click", toggleNavbar);
  scrollTopBtn?.addEventListener("click", scrollToTop);
  sideNav.openBtn?.addEventListener("click", openSideMenu);
  sideNav.closeBtn?.addEventListener("click", closeSideMenu);
  sideNav.registerMenu?.addEventListener("click", handleSideMenuClick);

  // Optimized listeners
  window.addEventListener("scroll", optimizedScrollHandler, { passive: true });
  window.addEventListener("resize", optimizedResizeHandler, { passive: true });
};

// =====================
// App Entry
// =====================
const init = () => {
  initialize();
  setupEventListeners();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =====================
// Extra: Mobile Navbar Button
// =====================
const btn = document.getElementById('customNavBtn');
const target = document.getElementById('navbarCustom');

btn?.addEventListener('click', () => {
  const isHidden = target.classList.contains('hidden');
  target.classList.toggle('hidden', !isHidden);
  btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
});

// =====================
// Simple Navbar Shadow on Scroll
// =====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;
  navbar.classList.toggle('bg-main-text', window.scrollY > 50);
  navbar.classList.toggle('shadow-lg', window.scrollY > 50);
}, { passive: true });

  document.addEventListener("DOMContentLoaded", () => {
    const isMobile = () => window.innerWidth < 1280;

    const dropdownButtons = document.querySelectorAll(
      "#main-navbar button[id$='Dropdown']"
    );

    dropdownButtons.forEach((btn) => {
      const dropdown = btn.nextElementSibling;

      if (!dropdown) return;


      // toggle click behavior
      btn.addEventListener("click", (e) => {
        if (!isMobile()) return; // ignore on desktop
        e.stopPropagation();

        // إغلاق باقي القوائم
        dropdownButtons.forEach((b) => {
          if (b !== btn) b.nextElementSibling?.classList.add("hidden");
        });

        dropdown.classList.toggle("hidden");
      });
    });

    // غلق القوائم عند الضغط خارجها
    document.addEventListener("click", () => {
      if (!isMobile()) return;
      dropdownButtons.forEach((btn) =>
        btn.nextElementSibling?.classList.add("hidden")
      );
    });
  });

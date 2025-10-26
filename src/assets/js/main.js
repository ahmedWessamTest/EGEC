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
// DOM Elements Cache
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

// =====================
// State with Object Sealing
// =====================
const state = Object.seal({
  navbarOffset: elements.mainNavbar ? 
    elements.mainNavbar.getBoundingClientRect().top + window.scrollY : 0,
  scrollTicking: false,
  resizeTimeout: null,
  isMobile: () => window.innerWidth < 1280
});

// =====================
// Optimized Utility Functions
// =====================
const getElementPositionFromTop = (element) => 
  element ? element.getBoundingClientRect().top + window.scrollY : 0;

const toggleClass = (element, classToRemove, classToAdd) => {
  element?.classList.remove(classToRemove);
  element?.classList.add(classToAdd);
};

const replaceClass = (element, oldClass, newClass) => {
  element?.classList.replace(oldClass, newClass);
};

// Class operations with batched DOM updates
const batchClassOperations = (operations) => {
  operations.forEach(([element, action, ...classes]) => {
    if (!element) return;
    if (action === 'toggle') {
      element.classList.toggle(classes[0], classes[1]);
    } else if (action === 'replace') {
      element.classList.replace(classes[0], classes[1]);
    } else if (action === 'add') {
      element.classList.add(...classes);
    } else if (action === 'remove') {
      element.classList.remove(...classes);
    }
  });
};

// =====================
// Core Functions (Optimized)
// =====================
const closeLoadingScreen = () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const header = document.getElementById('header');
  
  // Use requestAnimationFrame for smoother animations
  const hideLoader = () => {
    requestAnimationFrame(() => {
      loadingScreen?.classList.add('hidden');
      setTimeout(() => loadingScreen?.remove(), 600);
    });
  };

  header?.addEventListener('load', hideLoader, { once: true });
  
  // Fallback timeout
  setTimeout(hideLoader, 3000);
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
  const shouldFixNavbar = window.scrollY > state.navbarOffset;

  // Batch class operations
  batchClassOperations([
    [mainNavbar, 'toggle', NAVBAR_SCROLLED, shouldFixNavbar],
    [mainNavbar, 'toggle', FIXED, shouldFixNavbar]
  ]);

  // Update logo source only when changed
  if (navLogo) {
    const newSrc = shouldFixNavbar ? 
      "../assets/images/shared/green-logo.webp" : 
      "../assets/images/home/logo.webp";
    
    if (navLogo.getAttribute("src") !== newSrc) {
      navLogo.setAttribute("src", newSrc);
    }
  }
};

const setActiveNavbarItem = () => {
  const currentPath = (location.hash || location.pathname).split('/').pop() || '';
  const actualCurrentPath = `./${currentPath}`;
  const subNavbarItems = document.querySelectorAll('#SubNavbar .navbar-item');
  
  // Use document fragment for batch updates
  const operations = Array.from(subNavbarItems).map(item => [
    item, 
    'toggle', 
    CONFIG.CLASSES.ACTIVE, 
    item.getAttribute("href") === actualCurrentPath
  ]);
  
  batchClassOperations(operations);
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
  toggleClass(registerMenu, CONFIG.CLASSES.SIDEMENU_HIDDEN, CONFIG.CLASSES.SIDEMENU_VISIBLE);
};

const closeSideMenu = () => {
  const { registerMenu } = elements.sideNav;
  toggleClass(registerMenu, CONFIG.CLASSES.SIDEMENU_VISIBLE, CONFIG.CLASSES.SIDEMENU_HIDDEN);
};

const handleSideMenuClick = (event) => {
  if (event.target === elements.sideNav.registerMenu) closeSideMenu();
};

// =====================
// Highly Optimized Scroll & Resize Handlers
// =====================
const optimizedScrollHandler = () => {
  if (!state.scrollTicking) {
    requestAnimationFrame(() => {
      handleNavbarScroll();
      toggleScrollButton();
      toggleSideNavButton();
      state.scrollTicking = false;
    });
    state.scrollTicking = true;
  }
};

const optimizedResizeHandler = () => {
  clearTimeout(state.resizeTimeout);
  state.resizeTimeout = setTimeout(() => {
    state.navbarOffset = getElementPositionFromTop(elements.mainNavbar);
  }, 150);
};

// =====================
// Mobile Dropdown Management
// =====================
const setupMobileDropdowns = () => {
  const dropdownButtons = document.querySelectorAll("#main-navbar button[id$='Dropdown']");
  
  if (!dropdownButtons.length) return;

  const closeAllDropdowns = () => {
    dropdownButtons.forEach(btn => 
      btn.nextElementSibling?.classList.add("hidden")
    );
  };

  const handleDropdownClick = (e) => {
    if (!state.isMobile()) return;
    
    e.stopPropagation();
    const dropdown = e.currentTarget.nextElementSibling;
    
    if (!dropdown) return;

    // Close others, toggle current
    dropdownButtons.forEach(btn => {
      if (btn !== e.currentTarget) {
        btn.nextElementSibling?.classList.add("hidden");
      }
    });
    
    dropdown.classList.toggle("hidden");
  };

  // Event delegation for better performance
  dropdownButtons.forEach(btn => {
    btn.addEventListener("click", handleDropdownClick);
  });

  // Close on outside click
  document.addEventListener("click", closeAllDropdowns);
};

// =====================
// Navbar Shadow Handler (Debounced)
// =====================
const setupNavbarShadow = () => {
  let shadowTimeout;
  
  const handleNavbarShadow = () => {
    clearTimeout(shadowTimeout);
    shadowTimeout = setTimeout(() => {
      const navbar = document.getElementById('main-navbar');
      if (!navbar) return;
      
      const hasScrolled = window.scrollY > 50;
      batchClassOperations([
        [navbar, 'toggle', 'bg-main-text', hasScrolled],
        [navbar, 'toggle', 'shadow-lg', hasScrolled]
      ]);
    }, 10);
  };

  window.addEventListener('scroll', handleNavbarShadow, { passive: true });
};

// =====================
// Mobile Navbar Toggle
// =====================
const setupMobileNavbarToggle = () => {
  const btn = document.getElementById('customNavBtn');
  const target = document.getElementById('navbarCustom');

  btn?.addEventListener('click', () => {
    const isHidden = target.classList.contains('hidden');
    target.classList.toggle('hidden', !isHidden);
    btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
  });
};

// =====================
// Initialization
// =====================
const initialize = () => {
  setActiveNavbarItem();
  closeLoadingScreen();
};

// =====================
// Event Listeners Setup
// =====================
const setupEventListeners = () => {
  const { mainNavBtn, scrollTopBtn, sideNav } = elements;

  // Use passive event listeners where possible
  const eventListeners = [
    [mainNavBtn, "click", toggleNavbar],
    [scrollTopBtn, "click", scrollToTop],
    [sideNav.openBtn, "click", openSideMenu],
    [sideNav.closeBtn, "click", closeSideMenu],
    [sideNav.registerMenu, "click", handleSideMenuClick],
    [window, "scroll", optimizedScrollHandler, { passive: true }],
    [window, "resize", optimizedResizeHandler, { passive: true }]
  ];

  eventListeners.forEach(([element, event, handler, options]) => {
    element?.addEventListener(event, handler, options);
  });

  // Setup additional functionality
  setupMobileDropdowns();
  setupNavbarShadow();
  setupMobileNavbarToggle();
};

// =====================
// App Entry Point
// =====================
const init = () => {
  // Early validation
  if (!elements.mainNavbar) {
    console.warn('Main navbar element not found - some functionality may be limited');
  }

  initialize();
  setupEventListeners();
};

// Start the application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
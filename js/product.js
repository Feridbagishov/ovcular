document.addEventListener('DOMContentLoaded', function() {
  console.log('Product page loaded - initializing systems');
  
  // Mobile Menu System
  function initMobileMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    
    console.log('Mobile menu elements:', {
      burgerMenu: !!burgerMenu,
      mobileMenu: !!mobileMenu,
      mobileMenuOverlay: !!mobileMenuOverlay
    });

    // Create mobile menu content
    function createMobileMenuContent() {
      console.log('Creating mobile menu content');
      
      // Get navigation links from header
      const desktopNav = document.querySelector('.header_li');
      if (!desktopNav) {
        console.error('Desktop navigation not found');
        return;
      }
      
      // Clone navigation
      const mobileNav = desktopNav.cloneNode(true);
      mobileNav.className = 'mobile-nav-links';
      
      // Get language selector
      const desktopLanguageSelector = document.querySelector('.language-selector');
      let mobileLanguageSelector = null;
      
      if (desktopLanguageSelector) {
        mobileLanguageSelector = desktopLanguageSelector.cloneNode(true);
        mobileLanguageSelector.className = 'mobile-language-selector';
      }
      
      // Build mobile menu
      mobileMenu.innerHTML = `
        <div class="mobile-menu-header">
          <button class="close-menu">&times;</button>
        </div>
      `;
      
      mobileMenu.appendChild(mobileNav);
      if (mobileLanguageSelector) {
        mobileMenu.appendChild(mobileLanguageSelector);
      }
      
      console.log('Mobile menu content created');
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
      console.log('Toggling mobile menu');
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
      
      if (!mobileMenu || !mobileMenuOverlay || !burgerMenu) return;
      
      const isOpening = !mobileMenu.classList.contains('active');
      
      burgerMenu.classList.toggle('open');
      mobileMenu.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      
      // Add animation class for smooth transition
      if (isOpening) {
        setTimeout(() => {
          mobileMenu.classList.add('animate-in');
        }, 10);
      } else {
        mobileMenu.classList.remove('animate-in');
      }
    }

    // Initialize mobile menu events
    function initMobileMenuEvents() {
      // Burger menu click
      burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
      });

      // Overlay click
      const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
      mobileMenuOverlay.addEventListener('click', function() {
        toggleMobileMenu();
      });

      // Close button click
      const closeMenu = document.querySelector('.close-menu');
      if (closeMenu) {
        closeMenu.addEventListener('click', function() {
          toggleMobileMenu();
        });
      }

      // Close menu on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          const mobileMenu = document.querySelector('.mobile-menu');
          if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
          }
        }
      });

      // Close menu when clicking on mobile menu links
      mobileMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')) {
          toggleMobileMenu();
        }
      });
    }

    // Initialize
    createMobileMenuContent();
    initMobileMenuEvents();
    console.log('Mobile menu initialized successfully');
  }

  // Language System
  function initLanguageSystem() {
    const translations = {
      en: {
        home: "Home",
        about: "About Us",
        catalog: "Catalog",
        contact: "Contact",
        product_catalog: "Product Catalog",
        contact_us: "Contact Us",
        copyright: "© 2025 EMAY Hunting. All rights reserved.",
        back_to_categories: "Back to Categories",
        back_to_brands: "Back to Brands",
        guns: "Guns",
        pneumatic_guns: "Pneumatic Guns",
        airsoft: "Airsoft",
        back_to_main: "Back to Main Categories",
        home_page: "Home Page",
        about_us: "About Us",
        title: "EMAY Hunting",
        hunting_rifles: "Hunting Rifles",
        psp_rifles: "PSP Rifles",
        fishing_gear: "Fishing Gear"
      },
      ru: {
        home: "Главная",
        about: "О нас",
        catalog: "Каталог",
        contact: "Контакт",
        product_catalog: "Каталог продуктов",
        contact_us: "Свяжитесь с нами",
        copyright: "© 2025 EMAY Hunting. Все права защищены.",
        back_to_categories: "Вернуться к категориям",
        back_to_brands: "Вернуться к брендам",
        guns: "Оружие",
        pneumatic_guns: "Пневматическое оружие",
        airsoft: "Аирсофт",
        back_to_main: "Вернуться к основным категориям",
        home_page: "Главная Страница",
        about_us: "О нас",
        title: "EMAY Hunting",
        hunting_rifles: "Охотничьи ружья",
        psp_rifles: "ПСП ружья",
        fishing_gear: "Рыболовные снасти"
      },
      az: {
        home: "Əsas",
        about: "Haqqımızda",
        catalog: "Kataloq",
        contact: "Əlaqə",
        product_catalog: "Məhsul Kataloqu",
        contact_us: "Əlaqə üçün",
        copyright: "© 2025 EMAY Hunting. Bütün hüquqlar qorunur.",
        back_to_categories: "Kateqoriyalara qayıt",
        back_to_brands: "Markalara qayıt",
        guns: "Silahlar",
        pneumatic_guns: "Pnevmatik silahlar",
        airsoft: "Airsoft",
        back_to_main: "Əsas kateqoriyalara qayıt",
        home_page: "Əsas Səhifə",
        about_us: "Haqqımızda",
        title: "EMAY Hunting",
        hunting_rifles: "Ov Tüfəngləri",
        psp_rifles: "PSP tüfəngləri",
        fishing_gear: "Balıqçılıq ləvazimatları"
      }
    };

    function changeLanguage(lang) {
      console.log('Changing language to:', lang);
      
      if (!translations[lang]) {
        console.error('Language not found:', lang);
        return;
      }

      // Update document language
      document.documentElement.lang = lang;
      
      // Update language flags
      const allFlags = document.querySelectorAll('.language-flag');
      allFlags.forEach(flag => {
        const flagLang = flag.getAttribute('data-lang');
        flag.classList.toggle('active', flagLang === lang);
      });
      
      // Update translatable elements
      const translatableElements = document.querySelectorAll('[data-translate]');
      translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
      
      // Update document title
      updateDocumentTitle(lang);
      
      // Save preference
      localStorage.setItem('languagePreference', lang);
      
      console.log('Language changed to:', lang);
    }

    function updateDocumentTitle(lang) {
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      let title = translations[lang].product_catalog + ' - ' + translations[lang].title;
      
      document.title = title;
    }

    function initLanguageEvents() {
      const languageFlags = document.querySelectorAll('.language-flag');
      languageFlags.forEach(flag => {
        flag.addEventListener('click', function() {
          const lang = this.getAttribute('data-lang');
          changeLanguage(lang);
          
          // Update mobile menu flags if exists
          const mobileFlags = document.querySelectorAll('.mobile-language-selector .language-flag');
          mobileFlags.forEach(mobileFlag => {
            const mobileLang = mobileFlag.getAttribute('data-lang');
            mobileFlag.classList.toggle('active', mobileLang === lang);
          });
        });
      });
    }

    // Initialize language
    const savedLanguage = localStorage.getItem('languagePreference') || 'az';
    changeLanguage(savedLanguage);
    initLanguageEvents();
    console.log('Language system initialized');
  }

  // Catalog Navigation System - BƏSİT VERSİYA
  function initCatalogNavigation() {
    console.log('Initializing catalog navigation');
    
    const mainCategories = document.getElementById('mainCategories');
    const gunsBrands = document.getElementById('gunsBrands');
    const pspProducts = document.getElementById('pspProducts');
    const airsoftBrands = document.getElementById('airsoftBrands');
    const backToMain = document.getElementById('backToMain');
    const breadcrumb = document.querySelector('.breadcrumb');

    // Yeni: Əgər index səhifəsindən seçilmiş kateqoriya varsa, onu yüklə
    function loadSelectedCategoryFromIndex() {
      const selectedCategory = localStorage.getItem('selectedCategory');
      if (selectedCategory) {
        console.log('Loading category from index page:', selectedCategory);
        
        // Əsas kateqoriyaları gizlət
        if (mainCategories) {
          mainCategories.classList.add('hidden');
        }
        
        // Seçilmiş kateqoriyanı göstər
        switch(selectedCategory) {
          case 'guns':
            if (gunsBrands) {
              gunsBrands.classList.remove('hidden');
              updateBreadcrumb('Silahlar');
              backToMain.classList.remove('hidden');
            }
            break;
          case 'psp':
            if (pspProducts) {
              pspProducts.classList.remove('hidden');
              updateBreadcrumb('Pnevmatik Silahlar');
              backToMain.classList.remove('hidden');
            }
            break;
          case 'airsoft':
            if (airsoftBrands) {
              airsoftBrands.classList.remove('hidden');
              updateBreadcrumb('Airsoft');
              backToMain.classList.remove('hidden');
            }
            break;
        }
        
        // localStorage-dan təmizlə
        localStorage.removeItem('selectedCategory');
      } else {
        console.log('No category selected from index page');
      }
    }

    // Main category clicks
    function initCategoryClicks() {
      const categoryItems = document.querySelectorAll('#mainCategories .catalog-item');
      
      categoryItems.forEach(item => {
        item.addEventListener('click', function() {
          const category = this.getAttribute('data-category');
          console.log('Category selected:', category);
          
          hideAllSections();
          
          switch(category) {
            case 'guns':
              gunsBrands.classList.remove('hidden');
              updateBreadcrumb('Silahlar');
              break;
            case 'psp':
              pspProducts.classList.remove('hidden');
              updateBreadcrumb('Pnevmatik Silahlar');
              break;
            case 'airsoft':
              airsoftBrands.classList.remove('hidden');
              updateBreadcrumb('Airsoft');
              break;
          }
          
          backToMain.classList.remove('hidden');
        });
      });
    }

    // Brand clicks
    function initBrandClicks() {
      // Guns brands
      const gunsBrandItems = document.querySelectorAll('#gunsBrands .catalog-item');
      gunsBrandItems.forEach(item => {
        item.addEventListener('click', function() {
          const brand = this.getAttribute('data-brand');
          console.log('Brand selected:', brand);
          
          hideAllSections();
          
          // Find the product section for this brand
          const productSection = document.getElementById(`${brand}Products`);
          if (productSection) {
            productSection.classList.remove('hidden');
            updateBreadcrumb(this.querySelector('.catalog-name').textContent);
          } else {
            console.log(`No products found for brand: ${brand}`);
            showMainCategories();
          }
        });
      });
      
      // Airsoft brands
      const airsoftBrandItems = document.querySelectorAll('#airsoftBrands .catalog-item');
      airsoftBrandItems.forEach(item => {
        item.addEventListener('click', function() {
          const brand = this.getAttribute('data-brand');
          console.log('Airsoft brand selected:', brand);
          
          hideAllSections();
          
          // Find the product section for this brand
          const productSection = document.getElementById(`${brand}Products`);
          if (productSection) {
            productSection.classList.remove('hidden');
            updateBreadcrumb(this.querySelector('.catalog-name').textContent);
          } else {
            console.log(`No products found for brand: ${brand}`);
            showMainCategories();
          }
        });
      });
    }

    // PSP Product clicks
    function initProductClicks() {
      const pspProductItems = document.querySelectorAll('#pspProducts .catalog-item');
      pspProductItems.forEach(item => {
        item.addEventListener('click', function() {
          const product = this.getAttribute('data-product');
          console.log('PSP product selected:', product);
          // Burada məhsul detal səhifəsinə keçid edə bilərsiniz
        });
      });
      
      // Digər brand products klikləri
      document.querySelectorAll('[id$="Products"] .catalog-item').forEach(item => {
        if (!item.hasAttribute('data-click-bound')) {
          item.setAttribute('data-click-bound', 'true');
          item.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            console.log('Product selected:', product);
            // Burada məhsul detal səhifəsinə keçid edə bilərsiniz
          });
        }
      });
    }

    // Back button
    function initBackButton() {
      if (backToMain) {
        backToMain.addEventListener('click', function() {
          showMainCategories();
        });
      }
    }

    function showMainCategories() {
      hideAllSections();
      mainCategories.classList.remove('hidden');
      backToMain.classList.add('hidden');
      updateBreadcrumb('Kataloq');
    }

    function hideAllSections() {
      // Bütün kataloq bölmələrini gizlət
      const allCatalogSections = document.querySelectorAll('.catalog-grid');
      allCatalogSections.forEach(section => {
        section.classList.add('hidden');
      });
    }

    function updateBreadcrumb(text) {
      if (breadcrumb) {
        breadcrumb.innerHTML = `<span class="breadcrumb-item active">${text}</span>`;
      }
    }

    // Initialize
    loadSelectedCategoryFromIndex(); // Yeni: index səhifəsindən gələn kateqoriyanı yüklə
    initCategoryClicks();
    initBrandClicks();
    initProductClicks();
    initBackButton();
    
    console.log('Catalog navigation initialized');
  }

  // Window resize handler
  function initResizeHandler() {
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const burgerMenu = document.querySelector('.burger-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          burgerMenu.classList.remove('open');
          overlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
          mobileMenu.classList.remove('animate-in');
        }
      }
    });
  }

  // Initialize all systems
  try {
    initMobileMenu();
    initLanguageSystem();
    initCatalogNavigation();
    initResizeHandler();
    console.log('All systems initialized successfully');
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded - initializing systems');
    
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
                contact_title: "Hunter's World - Contact",
                our_branches: "Our Branches",
                address: "Address:",
                phone: "Phone:",
                hours: "Working hours:",
                working_hours: "Monday - Sunday / 09:00 - 18:00",
                branch1_name: "Baku Branch",
                branch1_address: "Baku, Matbuat ave. 35, Hayat Clinic",
                branch2_name: "Baku Branch",
                branch2_address: "Akim Abbasov 12",
                branch3_name: "Sumgait Branch",
                branch3_address: "Sumgait, Central str. 12",
                copyright: "© 2025 Hunter's World. All rights reserved.",
                instagram: "Instagram",
                tiktok: "TikTok",
                whatsapp: "WhatsApp",
                home_page: "Home Page",
                about_us: "About Us"
            },
            ru: {
                home: "Главная",
                about: "О нас",
                catalog: "Каталог",
                contact: "Контакт",
                contact_title: "Мир Охотника - Контакты",
                our_branches: "Наши филиалы",
                address: "Адрес:",
                phone: "Телефон:",
                hours: "Часы работы:",
                working_hours: "Понедельник - Воскресенье / 09:00 - 18:00",
                branch1_name: "Бакинский филиал",
                branch1_address: "Баку, пр. Матбуат 35, Hayat Clinic",
                branch2_name: "Бакинский филиал",
                branch2_address: "Аким Аббасов 12",
                branch3_name: "Сумгаитский филиал",
                branch3_address: "Сумгаит, ул. Центральная 12",
                copyright: "© 2025 Мир Охотника. Все права защищены.",
                instagram: "Инстаграм",
                tiktok: "ТикТок",
                whatsapp: "WhatsApp",
                home_page: "Главная Страница",
                about_us: "О нас"
            },
            az: {
                home: "Əsas",
                about: "Haqqımızda",
                catalog: "Kataloq",
                contact: "Əlaqə",
                contact_title: "Ovçu Dünyası - Əlaqə",
                our_branches: "Filiallarımız",
                address: "Ünvan:",
                phone: "Telefon:",
                hours: "İş saatları:",
                working_hours: "Bazar ertəsi - Bazar / 09:00 - 18:00",
                branch1_name: "Bakı Filialı",
                branch1_address: "Bakı ş. Mətbuat pr-ti.35, Hayat Clinic",
                branch2_name: "Gəncə Filialı",
                branch2_address: "Akim Abbasov 12",
                branch3_name: "Sumqayıt Filialı",
                branch3_address: "Sumqayıt ş., Mərkəzi küç. 12",
                copyright: "© 2025 Ovçu Dünyası. Bütün hüquqlar qorunur.",
                instagram: "Instagram",
                tiktok: "TikTok",
                whatsapp: "WhatsApp",
                home_page: "Əsas Səhifə",
                about_us: "Haqqımızda"
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
            let title = translations[lang].contact_title;
            
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

    // Branch toggle functionality
    function initBranchToggle() {
        document.querySelectorAll('.branch-header').forEach(header => {
            header.addEventListener('click', function() {
                const branch = this.closest('.branch');
                branch.classList.toggle('active');
                
                // Close other open branches
                document.querySelectorAll('.branch').forEach(otherBranch => {
                    if (otherBranch !== branch && otherBranch.classList.contains('active')) {
                        otherBranch.classList.remove('active');
                    }
                });
            });
        });
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

    // Animation for elements
    function initAnimations() {
        setTimeout(() => {
            const branchesSection = document.querySelector('.branches-section');
            if (branchesSection) {
                branchesSection.style.opacity = '1';
                branchesSection.style.transform = 'translateY(0)';
            }
        }, 300);
    }

    // Initialize all systems
    try {
        initMobileMenu();
        initLanguageSystem();
        initBranchToggle();
        initResizeHandler();
        initAnimations();
        console.log('All systems initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});
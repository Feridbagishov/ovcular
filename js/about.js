document.addEventListener('DOMContentLoaded', function() {
    console.log('About page loaded - initializing systems');
    
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
                title: "EMAY Hunting",
                airsoft: "Airsoft",
                hunting_rifles: "Hunting Rifles",
                psp_rifles: "PSP Rifles",
                fishing_gear: "Fishing Gear",
                home_page: "Home Page",
                about_us: "About Us",
                copyright: "© 2025 EMAY Hunting. All rights reserved.",
                product_catalog: "Product Catalog",
                contact_us: "Contact Us",
                back_to_categories: "Back to Categories",
                back_to_brands: "Back to Brands",
                guns: "Guns",
                pneumatic_guns: "Pneumatic Guns",
                back_to_main: "Back to Main Categories",
                about_text: `

Emay Hunting Azerbaijan is a reliable and established brand that has been operating in the hunting and outdoor field since 1995. With approximately 30 years of experience, we continue to develop while remaining committed to quality, reliability, and professionalism.

From the first day we started our activities, our goal has not been merely to sell products, but to present our customers with the right equipment, proper knowledge, and reliable services. The experience we have gained over the years has positioned us differently in the field, transforming us into a company that deeply understands hunting culture and customer needs.

Emay Hunting Azerbaijan has a strong physical sales network throughout the country and serves hunters and outdoor enthusiasts in various regions of Azerbaijan. With a wide range of products, professional approach, and after-sales support, we aim to always be by our customers' side.

As an official distributor of the world's leading brands, we present only original and high-quality products. Thanks to our international partnerships and strong supply network, we closely monitor innovations in the field and deliver them reliably to our customers.

Our vision is to make the name Emay Hunting Azerbaijan remembered as the most reliable hunting brand in the region. Our mission is to establish long-term customer relationships based on honesty, quality, and sustainable business approach, and to add value to the sector.

Emay Hunting Azerbaijan is a brand built on experience, trust, and a future-oriented perspective, and it carries these values into the future.`
            },
            ru: {
                home: "Главная",
                about: "О нас",
                catalog: "Каталог",
                contact: "Контакт",
                title: "EMAY Hunting",
                airsoft: "Аирсофт",
                hunting_rifles: "Охотничьи ружья",
                psp_rifles: "ПСП ружья",
                fishing_gear: "Рыболовные снасти",
                home_page: "Главная Страница",
                about_us: "О нас",
                copyright: "© 2025 EMAY Hunting. Все права защищены.",
                product_catalog: "Каталог продуктов",
                contact_us: "Свяжитесь с нами",
                back_to_categories: "Вернуться к категориям",
                back_to_brands: "Вернуться к брендам",
                guns: "Оружие",
                pneumatic_guns: "Пневматическое оружие",
                back_to_main: "Вернуться к основным категориям",
                about_text: `

Emay Hunting Azerbaijan - это надежный и устоявшийся бренд, работающий в сфере охоты и активного отдыха с 1995 года. Имея приблизительно 30-летний опыт, мы продолжаем развиваться, оставаясь верными качеству, надежности и профессионализму.

С первого дня нашей деятельности нашей целью было не просто продавать продукцию, а предоставлять нашим клиентам правильное оборудование, надлежащие знания и надежные услуги. Опыт, приобретенный нами за эти годы, поставил нас в особое положение в этой сфере, превратив в компанию, которая глубоко понимает культуру охоты и потребности клиентов.

Emay Hunting Azerbaijan имеет сильную сеть физических магазинов по всей стране и обслуживает охотников и любителей активного отдыха в различных регионах Азербайджана. Благодаря широкому ассортименту продукции, профессиональному подходу и послепродажной поддержке, мы стремимся всегда быть рядом с нашими клиентами.

Являясь официальным дистрибьютором ведущих мировых брендов, мы представляем только оригинальную и высококачественную продукцию. Благодаря нашим международным партнерствам и сильной сети поставок, мы внимательно следим за инновациями в этой сфере и надежно доставляем их нашим клиентам.

Наше видение - сделать имя Emay Hunting Azerbaijan запоминающимся как самого надежного охотничьего бренда в регионе. Наша миссия - установить долгосрочные отношения с клиентами, основанные на честности, качестве и устойчивом бизнес-подходе, и добавить ценности сектору.

Emay Hunting Azerbaijan - это бренд, построенный на опыте, доверии и ориентации на будущее, и он несет эти ценности в будущее.`
            },
            az: {
                home: "Əsas",
                about: "Haqqımızda",
                catalog: "Kataloq",
                contact: "Əlaqə",
                title: "EMAY Hunting",
                airsoft: "Airsoft",
                hunting_rifles: "Ov Tüfəngləri",
                psp_rifles: "PSP tüfəngləri",
                fishing_gear: "Balıqçılıq ləvazimatları",
                home_page: "Əsas Səhifə",
                about_us: "Haqqımızda",
                copyright: "© 2025 EMAY Hunting. Bütün hüquqlar qorunur.",
                product_catalog: "Məhsul Kataloqu",
                contact_us: "Əlaqə üçün",
                back_to_categories: "Kateqoriyalara qayıt",
                back_to_brands: "Markalara qayıt",
                guns: "Silahlar",
                pneumatic_guns: "Pnevmatik silahlar",
                back_to_main: "Əsas kateqoriyalara qayıt",
                about_text: `

Emay Hunting Azerbaijan 1995-ci ildən etibarən ovçuluq və outdoor sahəsində fəaliyyət göstərən, etibarlı və köklü bir markadır. Təxminən 30 illik təcrübəmizlə keyfiyyətə, etibarlılığa və peşəkarlığa sadiq qalaraq inkişaf etməyə davam edirik.

Fəaliyyətə başladığımız ilk gündən məqsədimiz yalnız məhsul satmaq deyil, müştərilərimizə düzgün avadanlığı, düzgün bilik və etibarlı xidmətlə təqdim etmək olmuşdur. İllər ərzində qazandığımız təcrübə bizi sahədə fərqli mövqeyə gətirmiş, ovçuluq mədəniyyətini və müştəri ehtiyaclarını dərindən anlayan bir şirkətə çevirmişdir.

Emay Hunting Azerbaijan ölkə üzrə güclü fiziki satış şəbəkəsinə malikdir və Azərbaycanın müxtəlif bölgələrində ovçulara və outdoor həvəskarlarına xidmət göstərir. Geniş məhsul çeşidi, peşəkar yanaşma və satış sonrası dəstək ilə müştərilərimizin hər zaman yanında olmağı hədəfləyirik.

Dünyanın aparıcı brendlərinin rəsmi distribütoru olaraq, yalnız orijinal və yüksək keyfiyyətli məhsullar təqdim edirik. Beynəlxalq tərəfdaşlıqlarımız və güclü təchizat şəbəkəmiz sayəsində sahədəki yenilikləri yaxından izləyir və onları etibarlı şəkildə müştərilərimizə çatdırırıq.

Vizyonumuz Emay Hunting Azerbaijan adını regionda ən etibarlı ovçuluq markası kimi yadda saxlamaqdır. Missiyamız isə dürüstlük, keyfiyyət və davamlı biznes yanaşması əsasında uzunmüddətli müştəri münasibətləri qurmaq və sektora dəyər qatmaqdır.

Emay Hunting Azerbaijan təcrübə, etibar və gələcəyə yönəlmiş baxış üzərində qurulmuş bir markadır və bu dəyərləri gələcəyə daşıyır.`
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
            let title = translations[lang].about + ' - ' + translations[lang].title;
            
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
        initResizeHandler();
        console.log('All systems initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});
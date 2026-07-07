/* ============================================
   🌿 UDON THANI EXPO 2026 — JavaScript
   ============================================ */

// ==========================================
// 🌐 LANGUAGE SWITCHER
// ==========================================
const LanguageManager = {
    currentLang: 'th',

    init() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });

        // Check for saved preference
        const saved = localStorage.getItem('expo-lang');
        if (saved && ['th', 'en', 'zh'].includes(saved)) {
            this.switchLanguage(saved);
        }
    },

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('expo-lang', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update html lang attribute
        const langMap = { th: 'th', en: 'en', zh: 'zh-CN' };
        document.documentElement.lang = langMap[lang];

        // Update all translatable elements
        document.querySelectorAll(`[data-${lang}]`).forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.textContent = text;
            }
        });

        // Add a nice transition effect
        document.body.style.opacity = '0.92';
        setTimeout(() => { document.body.style.opacity = '1'; }, 200);
    }
};


// ==========================================
// ⏰ COUNTDOWN TIMER
// ==========================================
const CountdownTimer = {
    targetDate: new Date('2026-11-01T00:00:00+07:00'),

    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    },

    update() {
        const now = new Date();
        const diff = this.targetDate - now;

        if (diff <= 0) {
            document.getElementById('countDays').textContent = '000';
            document.getElementById('countHours').textContent = '00';
            document.getElementById('countMinutes').textContent = '00';
            document.getElementById('countSeconds').textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countDays').textContent = String(days).padStart(3, '0');
        document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
    }
};


// ==========================================
// 🧭 NAVIGATION
// ==========================================
const Navigation = {
    init() {
        const navbar = document.getElementById('navbar');
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        // Scroll effect
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 80);

            // Update active nav link
            this.updateActiveLink();
        });

        // Mobile menu
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }
};


// ==========================================
// 📊 STATS COUNTER ANIMATION
// ==========================================
const StatsCounter = {
    animated: false,

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animated = true;
                    this.animateCounters();
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) observer.observe(statsSection);
    },

    animateCounters() {
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.count) || 0;
            const duration = 2000;
            const start = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function (ease-out cubic)
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                el.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    el.textContent = target.toLocaleString();
                }
            };

            requestAnimationFrame(animate);
        });
    }
};


// ==========================================
// ✨ PARTICLE EFFECT (Mist & Glow)
// ==========================================
const ParticleEffect = {
    init() {
        const container = document.getElementById('particles');
        if (!container) return;

        const count = window.innerWidth < 768 ? 20 : 45;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const type = Math.random();
            
            if (type > 0.65) {
                particle.className = 'particle mist-particle';
                particle.style.width = (60 + Math.random() * 80) + 'px';
                particle.style.height = particle.style.width;
            } else if (type > 0.35) {
                particle.className = 'particle glow-particle';
                particle.style.width = (4 + Math.random() * 6) + 'px';
                particle.style.height = particle.style.width;
            } else {
                particle.className = 'particle droplet-particle';
                particle.style.width = (2 + Math.random() * 4) + 'px';
                particle.style.height = particle.style.width;
            }

            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = (80 + Math.random() * 40) + '%';
            particle.style.animationDelay = (Math.random() * 15) + 's';
            particle.style.animationDuration = (12 + Math.random() * 18) + 's';

            container.appendChild(particle);
        }
    }
};


// ==========================================
// 👀 SCROLL REVEAL
// ==========================================
const ScrollReveal = {
    init() {
        // Add reveal class to elements
        const selectors = [
            '.section-header',
            '.about-card',
            '.about-image',
            '.directory-card',
            '.highlight-card',
            '.attraction-card',
            '.info-card',
            '.stat-item',
            '.map-container',
            '.footer-grid'
        ];

        document.querySelectorAll(selectors.join(',')).forEach((el, i) => {
            el.classList.add('reveal');
            // Stagger delay
            const delay = (i % 4) + 1;
            el.classList.add(`reveal-delay-${delay}`);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
};


// ==========================================
// ⬆️ SCROLL TO TOP BUTTON
// ==========================================
const ScrollToTop = {
    init() {
        const btn = document.getElementById('scrollTopBtn');
        if (!btn) return;

        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 500);
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};


// ==========================================
// 🎢 ADVANCED EFFECTS (Parallax, Progress, Tilt)
// ==========================================
const AdvancedEffects = {
    init() {
        const progressBar = document.getElementById('scrollProgressBar');
        const heroImg = document.querySelector('.hero-bg img');
        
        // Scroll Events for Progress Bar & Parallax
        window.addEventListener('scroll', () => {
            // 1. Progress Bar
            if (progressBar) {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.style.width = scrolled + "%";
            }
            
            // 2. Parallax Effect for Hero
            if (heroImg) {
                const scrollY = window.scrollY;
                if (scrollY < window.innerHeight) {
                    heroImg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.05)`;
                }
            }
        });

        // 3. 3D Tilt Effect on Cards
        const cards = document.querySelectorAll('.highlight-card, .attraction-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 8 degrees for subtlety)
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
                card.style.transition = 'none';
                card.style.zIndex = '10'; // Bring to front
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
                card.style.zIndex = '1';
            });
        });
    }
};

// ==========================================
// 🚀 INITIALIZE ALL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    CountdownTimer.init();
    Navigation.init();
    StatsCounter.init();
    ParticleEffect.init();
    ScrollReveal.init();
    ScrollToTop.init();
    AdvancedEffects.init();

    // Smooth body transition for lang switch
    document.body.style.transition = 'opacity 0.2s ease';
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const header = document.getElementById('main-header');
    const progressBar = document.getElementById('progress-bar');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const yearSpan = document.getElementById('year');
    const navLinks = document.querySelectorAll('.nav-link-premium');
    const luxuryMenuLinks = document.querySelectorAll('.luxury-menu-link, .luxury-contact-card, .btn-primary-luxury, .btn-outline-luxury');

    // Set current year
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Scroll Handler
    window.addEventListener('scroll', () => {
        // Header Transition
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
            header.classList.remove('py-6', 'md:py-8', 'border-transparent');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('py-6', 'md:py-8', 'border-transparent');
        }

        // Progress Bar Calculation
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";

        // Active Link Tracking
        const sections = document.querySelectorAll('section');
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Mobile Menu Controls
    const toggleMenu = (open) => {
        if (open) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }
    };

    if(menuToggle) menuToggle.addEventListener('click', () => toggleMenu(true));
    if(menuClose) menuClose.addEventListener('click', () => toggleMenu(false));

    // Universal Smooth Scroll for Luxury Links
    const allInteractionLinks = document.querySelectorAll('a[href^="#"]');
    allInteractionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu(false);
            
            const targetId = link.getAttribute('href');
            if(targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal Animation on Scroll (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Light Sweep Hover Effect Enhancement
    const premiumButtons = document.querySelectorAll('.btn-primary-luxury, .btn-outline-luxury');
    premiumButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // Optional: Add logic for magnetic effect here if needed
        });
    });
});

// KUC - Qarabağ Universiteti - Main Script

document.addEventListener('DOMContentLoaded', function () {

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerOffset = 80;
                var elementPosition = target.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Active nav link on scroll
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('header nav a[href^="#"]');

    function highlightNav() {
        var scrollPos = window.scrollY + 100;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('text-primary', 'font-bold');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('text-primary', 'font-bold');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Fade-in animation on scroll
    var fadeElements = document.querySelectorAll('section > div');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
        // Make initially visible sections show immediately
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
        observer.observe(el);
    });

    // Contact form handling
    var contactForm = document.getElementById('contactForm');
    var formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulate form submission
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Göndərilir...';
            submitBtn.disabled = true;

            setTimeout(function () {
                contactForm.reset();
                formSuccess.classList.remove('hidden');
                submitBtn.textContent = 'Göndər';
                submitBtn.disabled = false;

                setTimeout(function () {
                    formSuccess.classList.add('hidden');
                }, 5000);
            }, 1000);
        });
    }

    // Header shadow on scroll
    var header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const navList = document.getElementById('nav-list');
    const navLinks = navList.querySelectorAll('.nav-link');

    // 1. Toggle Navigation Menu on Hamburger Click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        // Optional: Add a class to change the hamburger icon (e.g., to an 'X')
        // hamburger.classList.toggle('is-active'); 
    });

    // 2. Close Navigation Menu when a link is clicked (mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navigation is currently open (for mobile/tablet only)
            if (window.innerWidth <= 1023) {
                nav.classList.remove('open');
                // hamburger.classList.remove('is-active');
            }
        });
    });

    // 3. Optional: Simple Active Link Scroll Tracking
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('main section');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Offset scroll to make the link active before section fully reaches top
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
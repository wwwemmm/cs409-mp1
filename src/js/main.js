// Album data
const albumData = {
    revelation: {
        title: "Revelation",
        year: "2022",
        description: "REVELATION blends cinematic soundscapes with themes of love and faith. Split into Letters to Heaven and Letters From Heaven, it delivers powerful vocals, R&B and experimental elements, designed to shine in Spatial Audio.",
        image: "assets/album-revelation.jpg",
        tracks: [
            "Young Man & Sea",
            "Hell",
            "Me & You",
            "Man Who Laughs",
            "Solitude",
            "Ice Age",
            "Passion",
            "Gloria",
            "Old Man & Sea",
            "Find You",
            "F=mv²r",
            "One Minute",
            "The End of Night",
            "The Sky"
        ]
    },
    cityzoo: {
        title: "City Zoo",
        year: "2019",
        description: "City Zoo built around an animal-themed concept where each track represents different human emotions and social issues through symbolic creatures. Blending pop, R&B, and electronic sounds, the album explores themes of self-identity, resilience, and modern life struggles.",
        image: "assets/album-CityZoo.jpg",
        tracks: [
            "City Zoo",
            "Fly Away",
            "Selfless",
            "Long After",
            "Walk on Water",
            "Mama",
            "Grey Wolf",
            "Miss Similar",
            "Missing You",
            "Don’t Force It",
            "Unreachable",
            "Full Stop",
            "Still That Girl"
        ]
    },
    queeng: {
        title: "Queen G",
        year: "2018",
        description: "Queen G is G.E.M.’s sixth studio album, celebrating strength, confidence, and independence with a bold pop and R&B sound.",
        image: "assets/album-QueenG.jpg",
        tracks: [
            "Love Finds A Way",
            "WHY",
            "Queen G",
        ]
    },
    poisonapple: {
        title: "Poison Apple",
        year: "2018",
        description: "Poison Apple is G.E.M.’s EP that uses the “apple” as a metaphor for temptation and the dark side of love, blending pop and R&B sounds.",
        image: "assets/album-PoisonApple.jpg",
        tracks: [
            "That Night",
            "Poison Apple",
            "All of a Sudden"
        ]
    },
    anotherfairytale: {
        title: "Another Fairy Tale",
        year: "2018",
        description: "Another Fairy Tale is G.E.M.’s EP that blends dreamy pop ballads with themes of love, fantasy, and reality.",
        image: "assets/album-AnotherFairyTale.jpg",
        tracks: [
            "Countdown",
            "Miss, Not Mistake",
            "Another Fairy Tale",
        ]
    },
    heartbeat: {
        title: "Heartbeat",
        year: "2015",
        description: "Heartbeat blends pop and R&B to explore love, longing, and emotional struggles.",
        image: "assets/album-Heartbeat.jpg",
        tracks: [
            "Long Distance",
            "Goodbye",
            "Heartbeat",
            "Away",
            "Blindspot",
            "One Way Road",
            "Against the Wind",
            "Therefore",
            "Moments",
            "Chuck Close"
        ]
    },
    xposed: {
        title: "Xposed",
        year: "2012",
        description: "Xposed makes a turning point in G.E.M.'s career with a bolder, more personal style. Combining pop, rock, and R&B elements, the album reflects themes of vulnerability, self-expression, and empowerment.",
        image: "assets/album-Xposed.jpg",
        tracks: [
            "What Have U Done",
            "The Next Second",
            "Someday I’ll Fly",
            "Subconscious Cruelty",
            "Oh Boy",
            "After Tonight",
            "Distortion",
            "Miracle",
            "The Non-existent Existence"
        ]
    },
    mysecret: {
        title: "My Secret",
        year: "2010",
        description: "MySecret is G.E.M.’s second studio album, showcasing her transition from youthful pop into more mature themes. With a mix of ballads, pop, and R&B influences, the album highlights her powerful vocals and growing artistry, establishing her as a rising star in the Mandopop scene.",
        image: "assets/album-MySecret.jpg",
        tracks: [
            "One Button",
            "Good To Be Bad",
            "Get Over You",
            "Beautiful Old Times",
            "Rose on a Lonely Planet",
            "The Voice Within",
            "My Secret",
            "The Last Day",
            "Twinkle II",
            "Say it Loud"   
        ]
    },
    "18": {
        title: "18",
        year: "2009",
        description: "18 is G.E.M.’s debut studio album, released when she was just 18 years old.",
        image: "assets/album-18.jpg",
        tracks: [
            "All About U",
            "Game Over",
            "Want to Tell You",
            "A.I.N.Y.",
            "Mascara",
            "I Don’t Understand Love",
            "Seine River",
            "Italian Love",
            "G.E.M.",
            "18",
            "Where Did U Go 2.0 (Remix)",
            "Mascara (Glossy Version)"
        ]
    },
    gem: {
        title: "G.E.M.",
        year: "2008",
        description: "G.E.M. (2008) is G.E.M.’s debut EP, introducing her powerful vocals and songwriting at just 16 years old.",
        image: "assets/album-GEM.jpg",
        tracks: [
            "Waiting for Him",
            "Where Did U Go",
            "Hourglass of Memories",
            "Love the Me Now",
            "Sleeping Princess"
        ]
    }
};

// Navbar scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.site-header');
    const scrollThreshold = 200; // Increased threshold to prevent shaking
    let currentNavbarState = 'large';
    let scrollTimeout;
    let isNavigating = false; // Flag to prevent navbar changes during navigation
    
    function updateNavbarState(scrollY) {
        const shouldBeSmall = scrollY > scrollThreshold;
        const newState = shouldBeSmall ? 'small' : 'large';
        
        // Only update if state actually changed and not navigating
        if (newState !== currentNavbarState && !isNavigating) {
            if (shouldBeSmall) {
                navbar.classList.remove('navbar-large');
                navbar.classList.add('navbar-small');
            } else {
                navbar.classList.remove('navbar-small');
                navbar.classList.add('navbar-large');
            }
            currentNavbarState = newState;
        }
    }
    
    function handleScroll() {
        // Don't update navbar during navigation
        if (isNavigating) return;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const scrollY = window.scrollY;
            updateNavbarState(scrollY);
        }, 50); // Increased delay for more stability
    }
    
    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            isNavigating = true;
            
            // Reset navigation flag after smooth scroll completes
            setTimeout(function() {
                isNavigating = false;
                // Update navbar state after navigation
                updateNavbarState(window.scrollY);
            }, 1000); // Wait for smooth scroll to complete
        });
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on page load to set initial state
    updateNavbarState(window.scrollY);
});

// Position indicator functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('.section');
    const navbar = document.querySelector('.site-header');
    
    // Function to get navbar height
    function getNavbarHeight() {
        return navbar.offsetHeight;
    }
    
    // Function to determine which section is currently visible
    function getCurrentSection() {
        const navbarHeight = getNavbarHeight();
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Check if we're at the bottom of the page
        if (scrollY + viewportHeight >= documentHeight - 10) {
            return sections[sections.length - 1]; // Return last section
        }
        
        // Find the section that's currently in view
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Check if the section is currently visible in the viewport
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                return section;
            }
        }
        
        // Fallback to first section if none found
        return sections[0];
    }
    
    // Function to update active navigation link
    function updateActiveNavLink() {
        const currentSection = getCurrentSection();
        if (!currentSection) return;
        
        const currentSectionId = currentSection.id;
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`.nav__link[href="#${currentSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Throttle function to limit scroll event frequency
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Add scroll event listener with throttling
    const throttledUpdateActiveNavLink = throttle(updateActiveNavLink, 100);
    window.addEventListener('scroll', throttledUpdateActiveNavLink);
    
    // Call once on page load to set initial active state
    updateActiveNavLink();
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('albumModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalDescription = document.getElementById('modalDescription');
    const modalTracks = document.getElementById('modalTracks');
    const closeBtn = document.querySelector('.modal__close');
    const albumCards = document.querySelectorAll('.card[data-album]');

    // Function to show modal
    function showModal(albumKey) {
        const album = albumData[albumKey];
        if (!album) return;

        modalImage.src = album.image;
        modalImage.alt = `${album.title} Album Cover`;
        modalTitle.textContent = album.title;
        modalYear.textContent = album.year;
        modalDescription.textContent = album.description;
        
        // Clear previous tracks
        modalTracks.innerHTML = '';
        
        // Add tracks to modal
        album.tracks.forEach(track => {
            const li = document.createElement('li');
            li.textContent = track;
            modalTracks.appendChild(li);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to hide modal
    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Add click event listeners to album cards
    albumCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const albumKey = this.getAttribute('data-album');
            showModal(albumKey);
        });
    });

    // Close modal when clicking the X button
    closeBtn.addEventListener('click', hideModal);

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.carousel__track');
    const slides = carousel.querySelectorAll('.carousel__slide');
    const prevBtn = carousel.querySelector('.carousel__nav--prev');
    const nextBtn = carousel.querySelector('.carousel__nav--next');
    const indicators = carousel.querySelectorAll('.carousel__indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Function to update carousel position
    function updateCarousel() {
        const translateX = -currentSlide * (100 / totalSlides);
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update active slide
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Function to go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Function to go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (carousel.matches(':hover')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50; // Minimum distance for a swipe
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }
});

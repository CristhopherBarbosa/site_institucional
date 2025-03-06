/**
 * MitLab - Mitochondrial Energy Production Research
 * Animations JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /**
     * Initialize animations when the page loads
     */
    function initAnimations() {
        // Animate header elements on page load
        animateHeader();
        
        // Animate sections on scroll
        initScrollAnimations();
        
        // Animate statistics counters
        initCounters();
        
        // Animate research cards
        animateResearchCards();
        
        console.log('Animations initialized successfully');
    }
    
    /**
     * Animate header elements with a staggered effect
     */
    function animateHeader() {
        const headerElements = document.querySelectorAll('#header .logo, #header .nav-links > li, #header .language-selector, #header .search-icon');
        
        // Apply staggered fade-in animation
        headerElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animated');
            }, 100 * index);
        });
        
        // Animate banner content if it exists
        const bannerContent = document.querySelector('.banner-content');
        if (bannerContent) {
            setTimeout(() => {
                bannerContent.classList.add('animated');
            }, 500);
        }
    }
    
    /**
     * Initialize scroll-based animations
     */
    function initScrollAnimations() {
        // Elements to animate on scroll
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1, // 10% of the element visible
            rootMargin: '-50px'
        });
        
        // Observe each element
        animatedElements.forEach(element => {
            observer.observe(element);
        });
        
        // Add animation classes to sections
        document.querySelectorAll('section').forEach((section, index) => {
            section.classList.add('animate-on-scroll');
            section.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    /**
     * Animate statistics counters
     */
    function initCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        // Create an Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetNumber = parseInt(target.getAttribute('data-target'), 10);
                    
                    if (targetNumber) {
                        animateCounter(target, targetNumber);
                    }
                    
                    // Unobserve after animation is triggered
                    counterObserver.unobserve(target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        // Observe each counter
        statNumbers.forEach(counter => {
            // Store the target number as a data attribute
            const number = counter.textContent;
            counter.setAttribute('data-target', number);
            counter.textContent = '0';
            
            counterObserver.observe(counter);
        });
    }
    
    /**
     * Animate a counter from 0 to target number
     * @param {Element} element - The element to animate
     * @param {number} target - The target number
     */
    function animateCounter(element, target) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        const updateCounter = () => {
            start += increment;
            
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    /**
     * Animate research cards with a staggered effect
     */
    function animateResearchCards() {
        const cards = document.querySelectorAll('.research-card, .highlight-card, .news-card');
        
        // Create an Intersection Observer for cards
        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, 150 * index);
                    
                    // Unobserve after animation is triggered
                    cardsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe each card
        cards.forEach(card => {
            cardsObserver.observe(card);
        });
    }
    
    // Add CSS classes for animations
    function addAnimationStyles() {
        // Create a style element
        const style = document.createElement('style');
        
        // Add animation CSS
        style.textContent = `
            /* Fade In Animation */
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Fade In Left Animation */
            @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            /* Fade In Right Animation */
            @keyframes fadeInRight {
                from { opacity: 0; transform: translateX(50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            /* Scale Up Animation */
            @keyframes scaleUp {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            
            /* Header elements animation */
            #header .logo,
            #header .nav-links > li,
            #header .language-selector,
            #header .search-icon {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            #header .logo.animated,
            #header .nav-links > li.animated,
            #header .language-selector.animated,
            #header .search-icon.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Banner content animation */
            .banner-content {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .banner-content.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Scroll animations */
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .animate-on-scroll.animated {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Card animations */
            .research-card,
            .highlight-card,
            .news-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .research-card.animated,
            .highlight-card.animated,
            .news-card.animated {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        
        // Append to head
        document.head.appendChild(style);
    }
    
    // Add animation styles
    addAnimationStyles();
    
    // Initialize animations
    initAnimations();
    
    // Make animation functions globally available
    window.mitlabAnimations = {
        initAnimations: initAnimations,
        animateHeader: animateHeader,
        initScrollAnimations: initScrollAnimations,
        initCounters: initCounters,
        animateResearchCards: animateResearchCards
    };
});
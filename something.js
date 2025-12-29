  class HeroSlider {
            constructor() {
                this.slides = document.querySelectorAll('.hero-slide');
                this.dots = document.querySelectorAll('.hero-dot');
                this.prevBtn = document.querySelector('.hero-nav.prev');
                this.nextBtn = document.querySelector('.hero-nav.next');
                this.currentSlide = 0;
                this.autoplayInterval = null;
                
                this.init();
            }

            init() {
                // Arrow navigation
                this.prevBtn.addEventListener('click', () => this.previousSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());

                // Dots navigation
                this.dots.forEach(dot => {
                    dot.addEventListener('click', (e) => {
                        const slideIndex = parseInt(e.target.dataset.slide);
                        this.goToSlide(slideIndex);
                    });
                });

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.previousSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                });

                // Touch/swipe support
                this.addTouchSupport();

                // Start autoplay
                this.startAutoplay();

                // Pause on hover
                const slider = document.querySelector('.hero-slider');
                slider.addEventListener('mouseenter', () => this.stopAutoplay());
                slider.addEventListener('mouseleave', () => this.startAutoplay());
            }

            goToSlide(index) {
                // Remove active class from current slide and dot
                this.slides[this.currentSlide].classList.remove('active');
                this.dots[this.currentSlide].classList.remove('active');

                // Update current slide
                this.currentSlide = index;

                // Add active class to new slide and dot
                this.slides[this.currentSlide].classList.add('active');
                this.dots[this.currentSlide].classList.add('active');
            }

            nextSlide() {
                const nextIndex = (this.currentSlide + 1) % this.slides.length;
                this.goToSlide(nextIndex);
            }

            previousSlide() {
                const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                this.goToSlide(prevIndex);
            }

            startAutoplay() {
                this.autoplayInterval = setInterval(() => {
                    this.nextSlide();
                }, 2000); // Change slide every 2 seconds
            }

            stopAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                }
            }

            addTouchSupport() {
                const slider = document.querySelector('.hero-slider');
                let touchStartX = 0;
                let touchEndX = 0;

                slider.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                });

                slider.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe();
                });

                const handleSwipe = () => {
                    const swipeThreshold = 50;
                    if (touchEndX < touchStartX - swipeThreshold) {
                        this.nextSlide();
                    }
                    if (touchEndX > touchStartX + swipeThreshold) {
                        this.previousSlide();
                    }
                };

                this.handleSwipe = handleSwipe;
            }
        }

        // Initialize slider when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new HeroSlider();
        });
document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    const nextBtn = document.querySelector('.carousel-control.next');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const dots = document.querySelectorAll('.carousel-indicators .dot');

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            currentIndex = parseInt(event.target.getAttribute('data-slide'));
            updateCarousel();
        });
    });

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.carousel-indicators .dot.active').classList.remove('active');
        dots[currentIndex].classList.add('active');
    }

    // Swipe functionality
    let startX;
    let endX;

    carouselInner.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchmove', (event) => {
        endX = event.touches[0].clientX;
    });

    carouselInner.addEventListener('touchend', () => {
        if (startX > endX + 50) {
            currentIndex = (currentIndex + 1) % totalItems;
        } else if (startX < endX - 50) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        updateCarousel();
    });
});

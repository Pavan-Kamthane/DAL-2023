// Automatically slide the images every 3 seconds
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(slideImages, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function slideImages() {
    const images = document.querySelectorAll('.slider-image');
    const navIcons = document.querySelectorAll('.slider-nav i');

    // Find the currently active image and its corresponding nav icon
    let activeIndex = 0;
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active')) {
            activeIndex = i;
            break;
        }
    }

    // Remove the active class from the current image and nav icon
    images[activeIndex].classList.remove('active');
    navIcons[activeIndex].classList.remove('active');

    // Calculate the index of the next image and its corresponding nav icon
    const nextIndex = (activeIndex + 1) % images.length;

    // Add the active class to the next image and nav icon
    images[nextIndex].classList.add('active');
    navIcons[nextIndex].classList.add('active');
}

startAutoSlide();

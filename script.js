const imgFolder = 'img';
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

function showImage() {
    slideshow.style.opacity = 0; 
    setTimeout(() => {
        slideshow.src = `${imgFolder}/${images[currentIndex]}`;
        slideshow.style.opacity = 1; 
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); 
}

setInterval(showImage, 3000);


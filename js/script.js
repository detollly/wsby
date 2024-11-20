/* Home page background slide show */

const images = [
    'url("/assets/img/Untitled-3.jpg")',
    'url("/assets/img/Untitled-4.jpg")',
    'url("/assets/img/Untitled-5.jpg")',
    'url("/assets/img/Untitled-6.jpg")',
    'url("/assets/img/Untitled-7.jpg")',
    'url("/assets/img/Untitled-8.jpg")',
    'url("/assets/img/Untitled-9.jpg")',
    'url("/assets/img/Untitled-10.jpg")',
    'url("/assets/img/Untitled-12.jpg")',
    'url("/assets/img/Untitled-41.jpg")',
    'url("/assets/img/Untitled-42.jpg")',
    'url("/assets/img/Untitled-52.jpg")',
    'url("/assets/img/Untitled-91.jpg")',
    'url("/assets/img/Untitled-123.jpg")'
];

let currentIndex = 0; 

function changeBackground() { 
    const container = document.querySelector('.background-container'); 
    container.style.backgroundImage = images[currentIndex]; 
    currentIndex = (currentIndex + 1) % images.length; 
    container.style.backgroundImage = images[currentIndex];
} 
    
setInterval(changeBackground, 10000); 
window.onload= function() {
    changeBackground(currentIndex);
};


/* Arrow cursor image switching */

function nextImage() { 
    changeBackground(currentIndex + 1); 
} 

function prevImage() { 
    changeBackground(currentIndex - 1); 
} 

document.addEventListener('mousemove', function(event) {
    const width = window.innerWidth;
    if (event.clientX < width / 2) {
        document.body.classList.add('left-cursor');
        document.body.classList.remove('right-cursor');
    } else {
        document.body.classList.add('right-cursor');
        document.body.classList.remove('left-cursor');
    }
});

document.addEventListener('click', function(event) {
    const width = window.innerWidth;
    if (event.clientX < width / 2) {
        prevImage();
    } else {
        nextImage();
    }
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
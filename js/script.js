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
} 
    
    
    setInterval(changeBackground, 10000); 
    window.onload= changeBackground;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Hamburger menu*/

/*
function toggleMenu() { 
    var menuLinks = document.getElementById('menu-links'); 
    var hamburgerContainer = document.querySelector('.hamburger-container'); 
    
    menuLinks.classList.toggle('active'); hamburgerContainer.classList.toggle('active'); 
}

*/
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
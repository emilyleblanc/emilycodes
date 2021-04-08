

// Display navigation on click of hamburger menu

// Select elements from the DOM
const hamburgerMenu = document.querySelector('.nav-toggle');
console.log(hamburgerMenu);

const divEl = document.querySelector('.navigation-modal');
console.log(divEl);

const exitIcon = document.querySelector('.exit-animation')

// Add Event Listener to Hamburger Menu so it displays nav on click

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    divEl.style.visibility = 'visible'

})

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    divEl.style.visibility = 'visible';

})

exitIcon.addEventListener('click', ()=>{
    divEl.style.visibility = 'hidden';
});






    










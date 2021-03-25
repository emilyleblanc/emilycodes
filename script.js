

// Display navigation on click of hamburger menu

const exitIcon = document.getElementsByClassName('fa-times')

const menuIcon = document.getElementsByClassName('fa-bars')

const navigationMenu = document.querySelector('div')

menuIcon[0].addEventListener('click', () => {
    console.log('it clicked')
    navigationMenu.classList.add('toggle-class')
})

exitIcon[0].addEventListener('click', () => {
    console.log('clicky')
    navigationMenu.classList.remove('toggle-class')
})









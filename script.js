

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


// setting up routing

// application div
// const appDiv = 'app';

// // set of different routes and template generation functions

// let routes = {};
// let templates = {};

// // register a template (this is to mimic a template engine)
// let template = (name, templateFunction) => {
//     return templates[name] = templateFunction;
// };


// // define the routes Each route is described with a route path

// let route = (path, template) =>{
//     if (typeof template == "function"){
//         return routes[path] = template;
//     }else if (typeof template == "srting"){
//         return routes[path] = templates[template];
//     }
//     else{
//         return;
//     }
// }






let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

windows.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = scrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal('.bx-menu', {delay:200, origin:'top'})
sr.reveal('.form-container form', {delay:200, origin:'left'})
sr.reveal('.heading', {delay:800, origin:'top'})
sr.reveal('.ride-container .box', {delay:600, origin:'top'})
const burger = document.querySelector('.burger');
const nav__list = document.querySelector('.nav__list');
burger.addEventListener('click', ()=> {
    burger.classList.toggle('is-active');
    nav__list.classList.toggle('open');
});
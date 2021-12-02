let navbarWrapper = document.querySelector('.navbar-toggler');
let btnBurger = document.querySelector('.btn-burger');

btnBurger.onclick = function () {
  navbarWrapper.classList.toggle('collapsed');
};
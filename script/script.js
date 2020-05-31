document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-open-menu').onclick = toggleMenu;
});

function toggleMenu() {
    this.parentElement.parentElement.parentElement.classList.toggle('active-toggle-menu');
}
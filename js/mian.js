let menu = document.querySelector('.menu-icon')
let nav = document.querySelector('.nav')
menu.onclick = () => {
    menu.classList.toggle("close")
    nav.classList.toggle("open-menu")
}
let menu = document.querySelector('.menu-icon')
let nav = document.querySelector('.nav')
console.log(nav)
menu.onclick = () => {
    nav.classList.toggle("open")
    menu.classList.toggle("close")
}

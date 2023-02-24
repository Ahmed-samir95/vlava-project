let menu = document.querySelector('.menu-icon')
let nav = document.querySelector('.nav')
console.log(nav)
menu.onclick = () => {
    nav.classList.toggle("open")
    menu.classList.toggle("close")
}

// btn to up

let btn = document.querySelector('.btn-up')
let header = document.querySelector('header')

// show btn
window.onscroll = function () {
    if (window.scrollY >= 200) {
        btn.style.display = 'block'
        header.style.backgroundColor = 'rgba(5, 44, 63, 0.8)'

    } else {
        btn.style.display = 'none'
        header.style.backgroundColor = 'transparent'

    }
}

// move to up 
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

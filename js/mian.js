// show nav
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

// portfolio filter
let filterBtns = document.querySelector('#filter-btns').children
let portfolioContent = document.querySelector('.portfolio-content').children

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function() {
        for (let j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove('active')
        }
        this.classList.add('active')
        let target = this.getAttribute('data-target')

        for (let k = 0; k < portfolioContent.length; k++) {
            portfolioContent[k].style.display = 'none'
            if (target == portfolioContent[k].getAttribute('data-id')) {
                portfolioContent[k].style.display = 'block'
            }
            if (target == 'all') {
                portfolioContent[k].style.display = 'block'
            }
        }
        
    })
    
}














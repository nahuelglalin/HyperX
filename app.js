const barsIco = document.querySelector('.bars-ico');
const body = document.querySelector('.body');
const navbar = document.querySelector('.navbar');
const product = document.querySelector('.product');
const subitems = document.querySelector('.subitems');

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos || body.classList.contains('overflowHidden')) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-61px";
    }
    prevScrollpos = currentScrollpos;
}


addEventListener('DOMContentLoaded', () => {
    if (barsIco) {
        barsIco.addEventListener('click', () => {
            const navItems = document.querySelector('.nav-items')
            navItems.classList.toggle('show')
            body.classList.toggle('overflowHidden')
        })
    }
})



addEventListener('DOMContentLoaded', () => {
    if (product && body.classList.contains('overflowHidden') === false) {
        product.addEventListener('mouseenter', () => {
            if (body.classList.contains('overflowHidden')) {
                subitems.classList.remove('show');
            }
            else {
                subitems.classList.toggle('show')
                subitems.classList.remove('hide')
            }
        })

        product.addEventListener('mouseleave', () => {
            subitems.classList.toggle('hide')
            subitems.classList.remove('show')
        })


    }

})

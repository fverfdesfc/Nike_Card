const colors = document.querySelectorAll('.color');
const size = document.querySelectorAll('.size');
const bgcolors = document.querySelectorAll('.bgcolor');
const imgs = document.querySelectorAll('.img');
let animationend = true;
let prevColor = "blue";

function changesize(e) {
    size.forEach(item => {
        item.classList.remove('active');
    })
    e.target.classList.add('active')
}

function changecolor(e) {
    if (!animationend) {
        return
    }
    let primary = this.getAttribute('primary')
    let color = this.getAttribute('color');
    let bgcolor = document.querySelector(`.bgcolor[color="${color}"]`)
    let img = document.querySelector(`.img[color="${color}"]`)
    document.documentElement.style.setProperty('--primary', primary)
    let priver = document.querySelector(`.bgcolor[color="${prevColor}"]`)
    if (prevColor == color) {
        return
    }
    colors.forEach(item => {
        item.classList.remove('active');
    })
    this.classList.add('active');

    bgcolors.forEach(item => {
        item.classList.remove('first', 'second');
    })
    bgcolor.classList.add('first');
    priver.classList.add('second');
    prevColor = color

    imgs.forEach(item => { item.classList.remove('show') })
    img.classList.add('show')

    animationend = false;
    bgcolor.addEventListener('animationend', (e) => {
        animationend = true;
    })

}

colors.forEach(item => {
    item.addEventListener('click', changecolor)
})
size.forEach(item => {
    item.addEventListener('click', changesize)
})
const $hamburgerButton = document.getElementById('hamburger-button')
const $nav = document.getElementById('nav')

let menuToggle = false

$hamburgerButton.addEventListener('click', function () {

    if (menuToggle === false) {
        $nav.style.display = 'block'
        menuToggle = true
    } else if (menuToggle === true) {
        $nav.style.display = 'none'
        menuToggle = false
    }

})

window.addEventListener('resize', function() {
// when the width is over 768px, the burgermenu disappears. When the width is smaller than 768px again, the burgermenu is not showing.

    if (window.innerWidth >= 768) {
        $nav.style.display = 'none'
        menuToggle = false
    }
})
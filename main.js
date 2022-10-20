const menuBars = document.getElementById('bar');
const menu = document.getElementById('menu');

menuBars.addEventListener('click', () => {
    if (menuBars.classList.contains('open-nav')) {
        menuBars.classList.add('close-nav')
        menuBars.classList.remove('open-nav')
        menu.style.display = "flex"

    }

    else if (menuBars.classList.contains('close-nav')) {
        menu.style.display = "none"
        menuBars.classList.add('open-nav')
        menuBars.classList.remove('close-nav')

    }
    // console.log(11)
})
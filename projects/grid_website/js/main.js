const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
   
    navBtn.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
        })
    })
    
    handleNavItemsAnimation();

    
}




function handleCurrentYear() {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();
navBtn.addEventListener('click', handleNav);


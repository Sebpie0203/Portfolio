document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    function addShadow(){
        if (window.scrollY >= 50) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click',() => navList.classList.remove('show')))
    window.addEventListener('scroll', addShadow)
})




$('.team-carousel').slick({
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
          
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
            
          },
      ]
    });
  
/*==================== SLİDE ONE =====================*/

const swiper1 = new Swiper('.swiper', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


/*=================== SLİDE TWO ====================*/

var slider1 = new Swiper ('.slider1', {  
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-el',
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is <= 499px
    250: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
    },
    596: {
      slidesPerView: 2,
      spaceBetweenSlides: 30
  },
    869: {
    slidesPerView: 3,
    spaceBetweenSlides: 30
   },
  }
});


/*=================== SLİDE THREE =============================*/

var slider2 = new Swiper ('.slider2', {  
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-else',
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is <= 499px
    250: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
    },
    596: {
      slidesPerView: 2,
      spaceBetweenSlides: 30
  },
    869: {
    slidesPerView: 3,
    spaceBetweenSlides: 30
   },
  }
});

/*====================== MENU SHOW ==========================*/

const navMenu = document.getElementById('list_menu'),
      navToggle = document.getElementById('nav_menu'),
      navClose = document.getElementById('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*====================== SHOP LİST ==========================*/


/*======================= SCROLL TOP ========================= */
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*======================= HEADER BACKGROUND CHANGE SCROLL ========================= */

const scrollHeader = () =>{
  const header = document.getElementById('header')
  
  this.scrollY >= 20 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


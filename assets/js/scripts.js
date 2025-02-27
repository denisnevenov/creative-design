//Toggle .active to header on scroll
function headerScroll() {
  const header = document.querySelector('.header');

  window.addEventListener("scroll", () => {
      if(window.scrollY > 20){
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
  });
}
headerScroll();


//SwiperJs Testimonials
var swiper = new Swiper(".swiper-testimonials", {
  autoHeight: true,
  pagination: {
    el: ".swiper-testimonials .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

//Mobile Navigation
function navbarMobile() {
  const navbarButton = document.querySelector(".navbar-button");
  const nav = document.querySelector(".nav");

  navbarButton.addEventListener("click", function (event) {
    event.stopPropagation();
    nav.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !navbarButton.contains(event.target)) {
      nav.classList.remove("show");
    }
  });
}
navbarMobile();

//Animations on Scroll
function animationsOnScroll(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('aos-show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.aos-hidden');
  hiddenElements.forEach((e) => observer.observe(e));
}
animationsOnScroll();
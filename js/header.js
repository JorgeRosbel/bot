const header = document.querySelector('header');


window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//Menu de inicio

const iconMenu = document.querySelector(".menu-icon");
const navBar   = document.querySelector(".nav-menu");
const capa     = document.querySelector(".capa");


iconMenu.addEventListener("click", ()=> {
    navBar.classList.toggle("open");
    //capa.classList.toggle("capa-on");
})


const links = document.querySelectorAll(".link-menu");

links.forEach( link => {
    link.addEventListener("click",()=> {
        navBar.classList.remove("open");
        //capa.classList.remove("capa-on");
        
    })
})


$(document).ready(function(){
  $('.link-menu').on('click',function(){
      $(this).siblings().removeClass('isActiveMenu');
      $(this).addClass('isActiveMenu');
  })
})

$(document).ready(function(){
  $('.bar').on('click',function(){
      $('.bar').removeClass('isActiveLine');
      $(this).addClass('isActiveLine');
  })
})


//Menu de inicio

// const iconMenu = document.querySelector(".icon-menu");
// const navBar   = document.querySelector(".nav-menu");
// const capa     = document.querySelector(".capa");


// iconMenu.addEventListener("click", ()=> {
//     navBar.classList.toggle("open");
//     capa.classList.toggle("capa-on");
// })


// const links = document.querySelectorAll(".link-menu");

// links.forEach( link => {
//     link.addEventListener("click",()=> {
//         navBar.classList.remove("open");
//         capa.classList.remove("capa-on");
        
//     })
// })


//Limitar la pagina web a 1200px de forma dinamica


function addClassOnResolution() {
    const resolution = window.innerWidth;
    const elements = document.querySelectorAll(".mod");

    elements.forEach(targetElement => {

        if (resolution > 1200) {
            targetElement.classList.remove("normal");
            targetElement.classList.add("resolution");
          } else {
            targetElement.classList.remove("resolution");
            targetElement.classList.add("normal");
          }
        
    });
  
    
  }
  
window.addEventListener("resize", addClassOnResolution);
addClassOnResolution();
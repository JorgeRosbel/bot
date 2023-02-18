const modal   = document.querySelector(".modal-content");
const form    = document.querySelector("box");
const cancel  = document.querySelector(".cancel-btn");
const btnSubs = document.querySelector(".b2");


//Evento del boton Subscribe
btnSubs.addEventListener("click", ()=> {
    modal.classList.add("isVisible");
})

//Evento del boton Cancel
cancel.addEventListener("click", ()=> {
    modal.classList.remove("isVisible");
})


//Validacion del Email
const email_val = document.querySelector(".email").value;
const email     = document.querySelector(".email");

modal.addEventListener("input", ()=> {

    if(email_val == "dota")
    {
        email.classList.add("error");
        console.log("Agregar");
    }else{
        email.classList.remove("error");
        console.log("Quitar");
        }

})



//Validacion del from de requests

var nameError      = document.getElementById("name-error");
var emailError     = document.getElementById("email-error");
var packageError   = document.getElementById("select-1-error");
var packageError_2 = document.getElementById("select-2-error");
var areaError      = document.getElementById("areaError");



function isNameOK(){
    var name = document.getElementById("name-f").value;
    
    if(name.length == 0){
        nameError.innerHTML = 'empty name';
        nameError.style.color = 'red';
        document.getElementById("name-f").classList.remove("ok");
        document.getElementById("name-f").classList.add("bad");
        return false;
    }else{
        nameError.innerHTML = 'valid';
        nameError.style.color = '#04D9B2';
        document.getElementById("name-f").classList.remove("bad");
        document.getElementById("name-f").classList.add("ok");

    }
}

function isPackageOK(){
    var package = document.getElementById("select").value;

    if(package == "None"){
        packageError.innerHTML = 'select a package';
        packageError.style.color = 'red';
        document.getElementById("select").classList.remove("ok");
        document.getElementById("select").classList.add("bad");
        return false;
    }else{
        packageError.innerHTML = 'valid';
        packageError.style.color = '#04D9B2';
        document.getElementById("select").classList.remove("bad");
        document.getElementById("select").classList.add("ok");
    }
}

function isPackageOK_2(){
    var package = document.getElementById("select-marker").value;

    if(package == "None"){
        packageError_2.innerHTML = 'select a package';
        packageError_2.style.color = 'red';
        document.getElementById("select-marker").classList.remove("ok");
        document.getElementById("select-marker").classList.add("bad");
        return false;
    }else{
        packageError_2.innerHTML = 'valid';
        packageError_2.style.color = '#04D9B2';
        document.getElementById("select-marker").classList.remove("bad");
        document.getElementById("select-marker").classList.add("ok");
    }
}

function isTextAreaOk(){
    var area = document.getElementById("text-area").value;
    console.log(area.length);
    var min = 80;
    if(area.length < min){
        areaError.innerHTML = 'must have more than ' + min + ' characters';
        areaError.style.color = 'red';
        document.getElementById("text-area").classList.remove("ok");
        document.getElementById("text-area").classList.add("bad");
        return false;
    }else{
        areaError.innerHTML = 'valid';
        areaError.style.color = '#04D9B2';
        document.getElementById("text-area").classList.remove("bad");
        document.getElementById("text-area").classList.add("ok");

    }
}


function isEmailOK(){
    var email   = document.getElementById("email-f").value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail\.com$/;
    var rt = regex.test(email);

    if(rt){
        emailError.innerHTML = 'valid';
        emailError.style.color = '#04D9B2';
        document.getElementById("email-f").classList.remove("bad");
        document.getElementById("email-f").classList.add("ok");
    }else{
        emailError.innerHTML = 'invalid gmail';
        emailError.style.color = 'red';
        document.getElementById("email-f").classList.remove("ok");
        document.getElementById("email-f").classList.add("bad");
    }

    if(email.length == 0){
        emailError.innerHTML = 'enter a gmail';
        emailError.style.color = 'red';
        document.getElementById("email-f").classList.remove("ok");
        document.getElementById("email-f").classList.add("bad");
    }
}
//Ejecutando funciones
document.getElementById("bt_login").addEventListener("click", iniciarSesion);
document.getElementById("bt_regtr").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".form_login");
var formulario_register = document.querySelector(".form_regtr");
var contenedor_login_register = document.querySelector(".login-register");
var caja_trasera_login = document.querySelector(".back-login");
var caja_trasera_register = document.querySelector(".back-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}

/*document.getElementById("bt_login").addEventListener("click", login)
document.getElementById("bt_regtr").addEventListener("click", register)
window.addEventListener("resize", anchopg);
//variables
var logreg = document.querySelector(".login-register")
var formulario_login = document.querySelector(".form_login")
var formulario_register = document.querySelector(".form_regtr")
var back_login = document.querySelector(".back-login")
var back_register = document.querySelector(".back-register")

function anchopg(){
    if(window.innerWidth > 850){
        back_login.style.display = "block";
        back_register.style.display = "block";
    }else{
        back_register.style.display = "block";
        back_register.style.opacity = "1";
        back_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        logreg.style.left = "0px";
    }
}
function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        logreg.style.left = "410px";
        formulario_login.style.display = "none";
        back_register.style.opacity = "0";
        back_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        logreg.style.left = "0px";
        formulario_login.style.display = "none";
        back_register.style.display = "none";
        back_login.style.display = "block";
        back_login.style.opacity = "1";
    }
    
}

function login(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        logreg.style.left = "10px";
        formulario_login.style.display = "none";
        back_register.style.opacity = "1";
        back_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "block";
        logreg.style.left = "0px";
        formulario_login.style.display = "none";
        back_register.style.display = "block";
        back_login.style.display = "none";
        back_login.style.opacity = "1";
    }
}*/
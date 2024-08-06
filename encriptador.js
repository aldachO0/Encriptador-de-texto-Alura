//--------Selección de Elementos-------//
const botonEncriptar = document.querySelector(".boton__encriptar");
const txtEncriptar = document.querySelector(".textarea");
const aviso = document.querySelector(".texto_aviso");
const respuesta = document.querySelector(".mensajes");
const contenido = document.querySelector(".tarjeta_contenedor");
const botonCopiar = document.querySelector(".boton_copiar")
const botonDesencriptar = document.querySelector(".boton__desencriptar")

//-------Boton de Encriptar------/
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto == ""){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "El campo de texto no debe estar vacio"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);
    }

    else if (texto !== txt){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "No debe tener acentos ni caracteres especiales"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);
    }

    else if(texto !==texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "El texto debe estar escrito en minúscula"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);

    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML =texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }

    

});

//-------Boton de Desencriptar------/
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(texto == ""){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "El campo de texto no debe estar vacio"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);
    }

    else if (texto !== txt){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "No debe tener acentos ni caracteres especiales"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);
    }

    else if(texto !==texto.toLowerCase()){
        aviso.style.background = "#0A3871"
        aviso.style.color = "#ffff"
        aviso.style.fontWeight ="800"
        aviso.textContent = "El texto debe estar escrito en minúscula"

        setTimeout(() => {
            aviso.removeAttribute("style");

        }, 1500);

    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML =texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }

    

});

//-------Boton de Copiar------/
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

});
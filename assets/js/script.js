/*document.getElementById("btnLimpiar").addEventListener("click", function(){
    alert("limpiando");
})*/

let limpiarErrores = () => {
    let errores = document.getElementsByClassName("msg-error");
    console.log(errores);

    for (let index = 0; index < errores.length; index++) {
        errores[index].innerHTML = '';
    }
}

let LimpiarFormulario = () => {
    let elementos = document.querySelectorAll("input[type = text], select");

    for (let index = 0; index < elementos.length; index++) {
        //console.log(elementos[index]);
        elementos[index].value = '';
        //console.log(elementos[index].id);
        //console.log(elementos[index].type);
        elementos[index].setAttribute("class",`${elementos[index].getAttribute("class")} text-danger`);
        //console.log(elementos[index].getAttribute("class"));
    }
}

let btnLimpiar = document.getElementById("btnLimpiar");
let formulario = document.getElementsByTagName("form")[0];

let txtRut = document.getElementById("txtRUT");
let errorRut = document.getElementById("errorRUT");

let txtNombre = document.getElementById("txtNombre");
let errorNombre = document.getElementById("errorNombre");

let txtApellido = document.getElementById("txtApellido");
let errorApellido = document.getElementById("errorApellido");

let txtemail = document.getElementById("txtemail");
let erroremail = document.getElementById("erroremail");

let txtIP = document.getElementById("txtIP");
let errorIP = document.getElementById("errorIP");

btnLimpiar.addEventListener("click", function(){
    LimpiarFormulario();

})


formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    limpiarErrores();

    var rut = txtRut.value;
    if (rut == '') {
        errorRut.innerHTML = 'ingresar el rut';
        
    }

    var Nombre = txtNombre.value;
    if (Nombre == '') {
        errorNombre.innerHTML = 'ingresar el Nombre';
    }

    var Apellido = txtApellido.value;
    if (Apellido == '') {
        errorApellido.innerHTML = 'ingresar el Apellido';
    }

    var email = txtemail.value;
    if (email == '') {
        erroremail.innerHTML = 'ingresar el email';
    }

    var IP = txtIP.value;
    if (IP == '') {
        errorIP.innerHTML = 'ingresar el IP';
    }

})

document.querySelector("#subtitulo").addEventListener("mouseover", function (){
    console.log("ingresó el cursor en el subtítulo");
})
document.querySelector("#subtitulo").addEventListener("mouseout", function (){
    console.log("egresó el cursor en el subtítulo");
})
//console.log(btnLimpiar);
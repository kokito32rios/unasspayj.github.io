// Funciones globales
const ocultarConfirmacion = document.getElementById("confirmacion");
const ocultarValidacion = document.getElementById("validacion");
const botonRegistro = document.getElementById("resistrarse"); // Cambiado a "resistrarse"

// Función de inicio del formulario
function iniciarformulario() {
    ocultarConfirmacion.style.display = "none";
    ocultarValidacion.style.display = "none";
    botonRegistro.addEventListener("click", diligenciarFormulario);
}

// Función de validación de que todos los campos fueron llenados correctamente
function diligenciarFormulario() {
    let nombreApellido = document.getElementById("NombreyApellido").value;
    let email = document.getElementById("correo").value;
    let confirmeEmail = document.getElementById("confirmarEmail").value;
    let celular = document.getElementById("Celular").value;
    let contraseña = document.getElementById("contrasenia").value;
    let confiemeContraseña = document.getElementById("confirmarContraseña").value;

    if (!nombreApellido || !email || !confirmeEmail || !celular || !contraseña || !confiemeContraseña) {
        mensajeValidacion("Por favor completa todos los campos e intentalo de nuevo");
        ocultarConfirmacion.style.display = "none";
    } else {
        confirmarCorreos();
        ocultarValidacion.style.display = "none";
    }   
}

// Función de validación de que los campos correo, su confirmación, la contraseña y su confirmación son los mismos
function confirmarCorreos() {
    let email = document.getElementById("correo").value;
    let confirmeEmail = document.getElementById("confirmarEmail").value;
    let contraseña = document.getElementById("contrasenia").value;
    let confiemeContraseña = document.getElementById("confirmarContraseña").value;

    if (email === confirmeEmail && contraseña === confiemeContraseña) {
        mensajeDeConfirmacion("El usuario fue registrado con éxito");
    } else {
        mensajeValidacion("Por favor verifica que tu correo y contraseña coincidan");
    } 
}

// Funciones para generar mensajes de alerta
function mensajeDeConfirmacion(mensaje) {
    ocultarConfirmacion.style.display = "block";
    let SuMensaje = document.getElementById("confirmacion");
    SuMensaje.innerHTML = mensaje;
}

function mensajeValidacion(mensaje) {
    ocultarValidacion.style.display = "block";
    let SuMensaje = document.getElementById("validacion");
    SuMensaje.innerHTML = mensaje;
}

// Iniciar el formulario al cargar la página
window.addEventListener("load", iniciarformulario);

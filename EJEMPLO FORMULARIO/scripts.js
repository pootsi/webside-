// Referenciación a los elementos del DOM

const formulario = document.getElementById('formulario-registro');

const password = document.getElementById('contrasena');

const seguridad = document.getElementById('nivelseguridad');

const usuario = document.getElementById('nombreusuario');

const correoElectronico = document.getElementById('correo');

// Valores predeterminados para pruebas: cumplen los requisitos de validación
const DEFAULTS = {
    nombreusuario: 'dev_master',
    email: 'dev@ejemplo.com',
    password: 'Dev12345'
};


// Medidor de nivel de fortaleza de la contraseña en tiempo real

// El addEventListener actúa como un disparador o trigger cada vez
// que se ingresa algún carácter por teclado

password.addEventListener('input', () => {

    const valor = password.value;

    let fortaleza = 0;


    // Se valida en el primer if la longitud de la contraseña
    // En el segundo if se valida si contiene letras mayúsculas
    // El tercer if valida si la contraseña contiene números

    if (valor.length > 5) fortaleza += 30;

    if (valor.match(/[A-Z]/)) fortaleza += 30;

    if (valor.match(/[0-9]/)) fortaleza += 40;


    // Se cambia el tamaño (ancho) de la barra o div (en CSS)

    seguridad.style.width = fortaleza + '%';


    // Cambiar color (de div) según el nivel de dificultad de la contraseña

    if (fortaleza < 40)

        seguridad.style.background = '#ef4444';

    else if (fortaleza < 70)

        seguridad.style.background = '#f59e0b';

    else

        seguridad.style.background = '#22c55e';

});


// Validación al enviar, este listener se dispara o ejecuta cuando se hace clic
// en el botón "Registrarme" el cual es de tipo submit

formulario.addEventListener('submit', (e) => {

    e.preventDefault(); // Evita que la página se recargue


    // Esta función revisa internamente si se cumplen todos los required, email y pattern.
    // Devuelve true si todo está perfecto o false si falta algo.

    if (formulario.checkValidity()) {

        // Capturamos los valores ingresados en el formulario
        // Para ello se crea un objeto de Javascript

        const datosUsuario = {

            nombreusuario: usuario.value,

            email: correoElectronico.value,

            password: password.value,

            fecha: new Date().toLocaleString()

        };


        // Se guarda en LocalStorage los datos que se almacenaron momentáneamente en el objeto datosUsuario
        // Se convierte el objeto a String (porque LocalStorage solo guarda texto)

        localStorage.setItem(
            'usuarioRegistrado',
            JSON.stringify(datosUsuario)
        );


        alert('¡Datos guardados con éxito en el almacenamiento local!');


        console.log(
            'Datos en LocalStorage:',
            JSON.parse(localStorage.getItem('usuarioRegistrado'))
        );


        formulario.reset();

        seguridad.style.width = '0%';

    }

    else {

        alert('Por favor, corrige los errores en el formulario.');

    }

});
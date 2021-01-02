//Seleccionar inputs
const inputs = document.querySelectorAll('form .campo input');



//Listener de los inputs

inputs.forEach(input => {
    input.addEventListener('blur', validarInput)
});

inputs.forEach(input => {
    input.addEventListener('input', validarInput)
});

function validarInput(e) {

    const estado = ['valido', 'noValido'];

    let clase;

    if(e.target.value.length === 0){
        clase = estado[1];
    }else{
        clase = estado[0];
    }
    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //Inyectar dinamicamente el div con el error
    if(clase === 'noValido'){
            if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta'){
            //Construir mensaje de error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //Insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    }else{
        //limpiar el mensaje de error si este existe
        if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta'){
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

// Mostrar y ocultar passowrd

const mostrarPassBtn = document.querySelector('form .campo span');
mostrarPassBtn.addEventListener('click', e => {

    const passInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')){
        //mostrar el texto
        e.target.classList.remove('mostrar');

         //cambiar texto
         e.target.textContent = 'Ocultar'

         //cambiar a pass
         passInput.type = 'text';
    }else{
        //mostrar pass

        e.target.classList.add('mostrar');
        //cambiar texto
        e.target.textContent = 'Mostrar'

        //cambiar a pass
        passInput.type = 'password';
    }

})
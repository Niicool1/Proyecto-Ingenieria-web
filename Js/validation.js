let email = document.getElementById('email');
let rut = document.getElementById('rut');
let contrasenya = document.getElementById('contrasenya');
let recontrasenya = document.getElementById('recontrasenya');
let error = document.getElementById('error');

let form = document.getElementById('form');
form.addEventListener('submit', function(evento){
  
  

  var numbers = /^[0-9]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mensajeError = [];
  
  if (email.value.match(mailformat)){  
  }else{
    mensajeError.push('El correo introducido no es valido');
  }
  if (rut.value.length !== 9 ){
    mensajeError.push('Introduzca 9 caracteres en el RUT');
  }
  if (rut.value.match(numbers)){  
  }else{
    mensajeError.push('El RUT solo admite números');
  }
  if(contrasenya.value.length <= 8){
    mensajeError.push('La contraseña debe ser de almenos 8 dígitos');
  }

  if(contrasenya.value != recontrasenya.value){
    mensajeError.push('Las contraseñas no coinciden');
  }
  if(document.getElementById('invalidCheck').checked == false){
    mensajeError.push('Debe aceptar los terminos y condiciones');
  } 
  
  error.innerHTML = mensajeError.join(', ');
  
  if(mensajeError.length > 0){
    evento.preventDefault();
  }
  
});


/*
(() => {

  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

*/
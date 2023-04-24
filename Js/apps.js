window.addEventListener("DOMContentLoaded", (event) => {

    let email = document.getElementById('email');
    let contrasenya = document.getElementById('contrasenya');
    let form = document.getElementById('form');


    form.addEventListener('submit', function(evento){

        let mensajeError = [];
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.value.match(mailformat)){  
        }else{
          mensajeError.push('N');
        }
        if(contrasenya.value.length <= 8){
            mensajeError.push('N');
          }
        if(mensajeError.length > 0){
            evento.preventDefault();
        }
          
        });
});

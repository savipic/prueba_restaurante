const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');



document.addEventListener('DOMContentLoaded',()=>{
  eventos();
});


const eventos =() =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu =() =>{
   navegacion.classList.remove('ocultar');
   botonCerrar();
}


const botonCerrar = () =>{
     const btnCerrar = document.createElement('p');
     const overlay = document.createElement('div');
     overlay.classList.add('pantalla__completa');
     const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla__completa').length > 0) return;
     body.appendChild(overlay);
     btnCerrar.textContent = 'x';
     btnCerrar.classList.add('btn__cerrar');
     navegacion.appendChild(btnCerrar);
     cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu =(boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}




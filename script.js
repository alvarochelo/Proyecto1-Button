"use strict";

// Obtenemos los elementos por su ID
const contenedor = document.querySelector('.contenedor');
const textoACambiar = document.getElementById('h1');
const imagen_contenedor= document.querySelector('.imagen_contenedor')

// Agregamos un event listener para el evento 'mouseenter' al contenedor
contenedor.addEventListener('mouseenter', function() {
  // Cambiamos el color del texto cuando se hace hover sobre el contenedor
  textoACambiar.style.color = 'hsl(0, 88%, 63%)';
  contenedor.style.boxShadow="15px 15px 0px 0px rgba(0, 0, 0, 1)";
  
   // Cambia por el color que desees
  
});

// Agregamos un event listener para el evento 'mouseleave' al contenedor para revertir el cambio
contenedor.addEventListener('mouseleave', function() {
  // Volvemos al color original cuando se retira el mouse del contenedor
  textoACambiar.style.color = 'black';
   // Vacío para volver al estilo por defecto
   contenedor.style.boxShadow="8px 8px 0px 0px rgba(0, 0, 0, 1)";

});

contenedor.addEventListener("mousedown", ()=> {
    contenedor.style.boxShadow= " 8px 8px 0px 0px rgba(0, 0, 0, 1)";
})

contenedor.addEventListener("mouseup", ()=>{
    contenedor.style.boxShadow="15px 15px 0px 0px rgba(0, 0, 0, 1)";

})

contenedor.addEventListener('click', ()=> {
    // Redirecciona a la URL deseada
    window.location.href = 'https://www.youtube.com/watch?v=0KEFzO4Po6I'; // Reemplaza con la URL a la que quieres redirigir
  });
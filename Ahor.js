 // Palabra oculta 
 const palabraAdivinar = "Kennedy";
 let palabraAdivinada = [];

 // Intentos restantes
 let intentosRestantes = 6;

 // Referencias a HTML
 const contenedorPalabra = document.getElementById("contenedor-palabra");
 const contenedorAdivinanzas = document.getElementById("contenedor-adivinanzas");
 const intentosSpan = document.getElementById("intentos");
 const entradaAdivina = document.getElementById("entrada-adivina");
 const botonAdivina = document.getElementById("boton-adivina");

 // Intercambiar la palabra oculta
 for (let i = 0; i < palabraAdivinar.length; i++) {
     palabraAdivinada.push("-");
 }

 // Función para mostrar la palabra oculta y las letras adivinadas
 function actualizarPantalla() {
     contenedorPalabra.textContent = palabraAdivinada.join(" ");
     contenedorAdivinanzas.textContent = "Letras adivinadas: " + palabraAdivinada.filter(letra => letra !== "_").join("- ");
     intentosSpan.textContent = intentosRestantes;
 }

 // Función para manejar la adivinanza de una letra
 function adivinarLetra() {
     const adivinanza = entradaAdivina.value.toLowerCase(); // toLowerCase convierte los arrays en minuscula.
     if (adivinanza.length !== 1 || !/[a-z]/.test(adivinanza)) {
         alert("Ingresa una sola letra válida.");
         entradaAdivina.value = "";
         return;
     }

     if (palabraAdivinada.includes(adivinanza)) {
         alert("Ya has adivinado esa letra.");
         entradaAdivina.value = "";
         return;
     }

     if (palabraAdivinar.includes(adivinanza)) {
         for (let i = 0; i < palabraAdivinar.length; i++) {
             if (palabraAdivinar[i] === adivinanza) {
                 palabraAdivinada[i] = adivinanza;
             }
         }
     } else {
         intentosRestantes--;
     }

     entradaAdivina.value = "";
     actualizarPantalla();

     if (palabraAdivinada.join("") === palabraAdivinar) {
         alert("¡Felicidades! Has ganado.");
         entradaAdivina.disabled = true;
         botonAdivina.disabled = true;
     } else if (intentosRestantes === 0) {
         alert("¡Has perdido! La palabra era '" + palabraAdivinar + "'.");
         entradaAdivina.disabled = true;
         botonAdivina.disabled = true;
     }
 }

 // Agregar efecto al hacer click al botón de adivinanza
 botonAdivina.addEventListener("click", adivinarLetra); 

 // Mostrar la palabra oculta inicial
 actualizarPantalla();
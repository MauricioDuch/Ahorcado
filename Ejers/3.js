

function validar(){
    let letra = prompt("Escribe una letra");
    return letra;
    
}
function array(letra){
    let Arreglo = ["m", "a", "u", "r", "i", "x", "d"];
    
    for(let i = 0; i <= Arreglo.length; i++){
        
        letra == Arreglo[i] ? alert("La letra "+ letra +" se encuentra en la posicion "+ i + " del array") : null
    
    }
}

let letra = validar();
array(letra);




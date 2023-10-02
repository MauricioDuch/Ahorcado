let num = [];

function numeros(num){
    
    for (let i = 0; i<=10; i++){
        num[i] = prompt("Ingresa un numero entero");
    }
    for (let i = 0; i<=10; i++){
        alert (+num[i]);
    }
}

numeros(num);

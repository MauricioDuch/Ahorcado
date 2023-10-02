let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ]
let i;

function semana(){
    
    i = parseInt(prompt("Ingresa un number del 0 al 6 por favor"));
    
    while (i<0 || i>6){
        alert("Me gustaria que pongas un numero del 1 al 6 para seguir el programa por favor ;) ");
        i =  parseInt(prompt("Ingresa un number del 0 al 6 por favor"));
    }

    return i;
}

semana();
alert(dias[i]);
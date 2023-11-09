/*1 Una empresa está en búsqueda de un conductor y ha establecido dos requisitos 
fundamentales: el candidato debe tener 25 años o más, además de poseer una licencia profesional.
Tu tarea es crear un programa que almacene estos dos datos en dos variables (una de tipo number y la otra boolean) 
y validarlos usando una sentencia if. Si el candidato cumple con ambos requisitos, mostrará el mensaje "Apto", y si no,
mostrará "No apto".*/

let age = Number(prompt("Ingrese su edad"));
let licencia = prompt("Si usted cuenta con licencia presione 1, caso contrario presione 0");

if (licencia==1){
    licencia=true;
}else{
    licencia=false;
}

if (licencia==true && age>=25){
    alert("Es apto");
}else{
    alert("No es apto");
}

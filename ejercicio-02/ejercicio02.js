/* El Instituto Sudamericano ha definido los criterios para otorgar las Becas Estudiantiles, especificando que el 
estudiante debe mantener un promedio igual o superior a 8.5 y que los ingresos mensuales familiares no superen los 600 
dólares. Se requiere un programa que verifique estas condiciones ingresando la información correspondiente y muestre 
un mensaje de "Aprobado" o "Desaprobado".*/

let promedium = Number(prompt("Ingrese su promedio: "));
let ingresos = Number(prompt("Ingrese sus ingresos mensuales: "));

if(promedium>=8.5 && ingresos<=600){
    alert("aprovador");
}else{
    alert("Desaprobado");
}

/*Se solicita el desarrollo de una aplicación que permita a los usuarios establecer un apodo utilizando un prompt.
 En caso de que el usuario no elija un apodo, se asignará automáticamente el valor predeterminado "anonymus". 
Una vez finalizado, se mostrará el apodo ingresado o el valor predeterminado en un alert. */
"use strict";

let user = prompt("Ingrese su apodo: ");
alert(user ?? "Anonymous");

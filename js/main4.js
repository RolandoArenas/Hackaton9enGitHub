/*
4. Calcular el área de un triángulo
    Algoritmo: cálculo del área de un triángulo
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese la medida de la base del triángulo"
        Leer n1
        Escribir "Ingrese la medida de la altura del triángulo"
        Leer n2
        r = n1 * n2 / 2
        Escribir "El área del triángulo es"
        Escribir r
    Fin del algoritmo.  
*/

let baseString = prompt (`Ingrese la medida de la base del triángulo`);
let heightString = prompt (`Ingrese la medida de la altura del triángulo`);

let baseNumber = Number (baseString);
let heightNumber = Number (heightString);

let triangArea = (baseNumber * heightNumber) / 2;

console.log (`El área de un triángulo con una base de ${baseNumber} y una altura de ${heightNumber} es ${triangArea}.`);

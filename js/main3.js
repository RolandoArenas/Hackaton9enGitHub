/*
3. Calcular el área de un rectángulo
    Algoritmo: cálculo del área de un rectángulo
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese la medida del lado mayor del rectángulo"
        Leer n1
        Escribir "Ingrese la medida del lado menor del rectángulo"
        Leer n2
        r = n1 * n2
        Escribir "El área del rectángulo es"
        Escribir r
    Fin del algoritmo.
*/

let sideAString = prompt (`Ingrese la medida del lado mayor del rectángulo`);
let sideBString = prompt (`Ingrese la medida del lado menor del rectángulo`);

let sideANumber = Number (sideAString);
let sideBNumber = Number (sideBString);

let rectArea = (sideANumber * sideBNumber);

console.log (`El área de un rectángulo de ${sideANumber} por ${sideBNumber} es ${rectArea}.`);

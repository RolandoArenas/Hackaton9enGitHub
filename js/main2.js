/*
2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
    Algoritmo: cálculo del promedio de 4 exámenes
        Definir n1 como real
        Definir n2 como real
        Definir n3 como real
        Definir n4 como real
        Definir r como real
        Escribir "Ingrese la nota del primer examen"
        Leer n1
        Escribir "Ingrese la nota del segundo examen"
        Leer n2
        Escribir "Ingrese la nota del tercer examen"
        Leer n3
        Escribir "Ingrese la nota del cuarto examen"
        Leer n4
        r = (n1 + n2 + n3 + n4) / 4
        Escribir "La nota promedio de los cuatro exámenes es"
        Escribir r
    Fin del algoritmo.
*/

let num1String = prompt (`Ingrese la nota del primer examen`);
let num2String = prompt (`Ingrese la nota del segundo examen`);
let num3String = prompt (`Ingrese la nota del tercer examen`);
let num4String = prompt (`Ingrese la nota del cuarto examen`);

let num1Number = Number (num1String);
let num2Number = Number (num2String);
let num3Number = Number (num3String);
let num4Number = Number (num4String);

let numProm = (num1Number + num2Number + num3Number + num4Number) / 4;

console.log (`La nota promedio de los cuatro exámenes es ${numProm}.`);

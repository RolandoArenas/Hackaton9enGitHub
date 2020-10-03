/*
9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
    Algoritmo: cálculo de la edad de una persona a partir de su año de nacimiento     
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese el año en curso"
        Leer n1
        Escribir "Ingrese el año de nacimiento de la persona de la que desea conocer su edad"
        Leer n2
        r = n1 - n2
        Escribir "Si la persona nació en " n2 " en " n1 " cumple " r " años"
    Fin del algoritmo.
*/

let name = prompt (`Ingrese los nombres y apellidos del solicitante de trabajo`);
let actualYear = prompt (`Ingrese el año en curso`);
let birthYear = prompt (`Ingrese el año de nacimiento del solicitante de trabajo`);

let actualYearNumber = Number.parseInt (actualYear);
let birthYearNumber = Number.parseInt (birthYear);

let age = (actualYearNumber - birthYearNumber);

console.log (`El solicitante de trabajo nació en ${birthYearNumber}. Como estamos en el año ${actualYearNumber}, este año el solicitante cumple ${age} años.`);

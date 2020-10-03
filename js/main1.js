/*
1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla
    Algoritmo: cálculo de la suma de 2 números
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese el primer número"
        Leer n1
        Escribir "Ingrese el segundo número"
        Leer n2
        r = n1 + n2
        Escribir "La suma de ambos números es"
        Escribir r
    Fin del algoritmo.
*/

let num1String = prompt (`Ingrese un número`);
let num2String = prompt (`Ingrese otro número`);

let num1Number = Number (num1String);
let num2Number = Number (num2String);

let numSum = num1Number + num2Number;

console.log (`La suma de ambos números es ${numSum}.`);

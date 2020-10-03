/*
5. Calcular el área de una circunferencia
    Algoritmo: cálculo del área de una circunferencia a partir del diámetro
        Definir n1 como real
        Definir r como real
        Definir a como real
        Escribir "Ingrese la medida del diámetro de la circunferencia"
        Leer n1
        r = n1 / 2
        a = 3.14159 * (r ^ 2)
        Escribir "Como el radio de la cincunferencia es " r " su área es " a
    Fin del algoritmo.  
*/

let circCircumString = prompt (`Ingrese la medida del diámetro de la circunferencia`);
let pi = 3.14159265;

let circCircumNumber = Number (circCircumString);
let circRadiusNumber = (circCircumNumber / 2);

let circArea = pi * (circRadiusNumber ** 2);

console.log (`Una circunferencia con un diámetro de ${circCircumNumber}, tiene un radio de ${circRadiusNumber}. Entonces, su área es ${circArea}.`);

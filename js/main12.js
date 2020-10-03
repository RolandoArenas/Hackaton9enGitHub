/*
12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado
    Algoritmo: determinar el salario de un profesor año tras año durante 6 años, considerando un aumento de sueldo de 10% cada año
        Definir n0 como real
        Definir n1 como real
        Definir n2 como real
        Definir n3 como real
        Definir n4 como real
        Definir n5 como real
        n0 = 1500
        n1 = n0 * 1.1
        n2 = n1 * 1.1
        n3 = n2 * 1.1
        n4 = n3 * 1.1
        n5 = n4 * 1.1
        n6 = n5 * 1.1
        Escribir "Si este año el salario del profesor es de 1500:"
        Escribir "En 1 año su salario será " n1
        Escribir "En 2 años su salario será " n2
        Escribir "En 3 años su salario será " n3
        Escribir "En 4 años su salario será " n4
        Escribir "En 5 años su salario será " n5
        Escribir "En 6 años su salario será " n6
    Fin del algoritmo.
*/

let person = prompt (`Ingrese los nombres y apellidos del profesor`);
let salaryYear0 = 1500;
let i = 1.1;
let salaryYear1 = (salaryYear0 * i);
let salaryYear2 = (salaryYear1 * i);
let salaryYear3 = (salaryYear2 * i);
let salaryYear4 = (salaryYear3 * i);
let salaryYear5 = (salaryYear4 * i);
let salaryYear6 = (salaryYear5 * i);

console.log (`Si en este año el salario de ${person} es de 1500 soles:
    - En 1 año su salario será de ${salaryYear1} soles
    - En 2 años su salario será de ${salaryYear2} soles
    - En 3 años su salario será de ${salaryYear3} soles
    - En 4 años su salario será de ${salaryYear4} soles
    - En 5 años su salario será de ${salaryYear5} soles
    - En 6 años su salario será de ${salaryYear6} soles`);

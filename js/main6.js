/*
6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
    Algoritmo: cáculo del sueldo semanal de un trabajador
        Definir t como caracter
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese los nombres y apellidos del trabajador"
        Leer t
        Escribir "Ingrese el salario por hora de este trabajador"
        Leer n1
        Escribir "Ingrese la cantidad de horas trabajadas por este trabajador durante la semana"
        Leer n2
        r = n1 * n2
        Escribir "El sueldo semanal de " t " es " r
    Fin del algoritmo.  
*/

let name = prompt (`Ingrese los nombres y apellidos del trabajador`);
let hourlyWage = prompt (`Ingrese el salario por hora de este trabajador`);
let hoursWorked = prompt (`Ingrese la cantidad de horas trabajadas por este trabajador durante la semana`);

let hourlyWageNumber = Number (hourlyWage);
let hoursWorkedNumber = Number (hoursWorked);

let weekSalary = (hourlyWage * hoursWorked);

console.log (`Como ${name} gana ${hourlyWageNumber} por hora y laboró ${hoursWorkedNumber} horas en la semana, su salario semanal es ${weekSalary}.`);

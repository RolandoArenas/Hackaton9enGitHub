/*
8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano
    Algoritmo: cambio de divisa de soles peruanos a dólares americanos
        Definir n1 como real
        Definir n2 como real
        Definir r como real
        Escribir "Ingrese el tipo de cambio venta del día"
        Leer n1
        Escribir "Ingrese la cantidad de soles peruanos que desea cambiar"
        Leer n2
        r = n2 / n1
        Escribir "Usted recibiría " r " dólares americanos por sus " n2 " soles peruanos, si es que el tipo de cambio venta del día es " n1
    Fin del algoritmo.  
*/

let amountPEN = prompt (`Ingrese la cantidad de soles peruanos que desea cambiar`);
let exchangeRate = prompt (`Ingrese el tipo de cambio venta del día`);

let amountPENNumber = Number (amountPEN);
let exchangeRateNumber = Number (exchangeRate);

let amountUSD = (amountPENNumber / exchangeRateNumber);

console.log (`Usted recibiría ${amountUSD} dólares americanos por sus ${amountPENNumber} soles peruanos, si es que el tipo de cambio venta del día es ${exchangeRateNumber}.`);

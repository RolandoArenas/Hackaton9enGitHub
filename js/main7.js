/*
7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
    Algoritmo: transformación de metros de tela en pulgadas de tela
        Definir n1 como real
        Definir r como real
        Escribir "Ingrese los metros de tela que requiere"
        Leer n1
        r = n1 / 0.0254
        Escribir "Usted requiere " r " pulgadas de tela"
    Fin del algoritmo.  
*/

let neededMeters = prompt (`Ingrese los metros de tela que requiere`);
let inch = 0.0254;

let neededMetersNumber = Number (neededMeters);

let neededInches = (neededMeters / inch);

console.log (`Como usted requiere ${neededMetersNumber} metros de tela, debe comprar ${neededInches} pulgadas de tela.`);

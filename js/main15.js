/*
15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones
    Algoritmo: determinar si una persona tiene 18 años o más en el 2021 para que así pueda participar en las elecciones presidenciales 
        Definir n1 como entero
        Definir n2 como entero
        Definir b como entero
        Escribir "Ingrese el año de nacimiento de la persona que quisiera saber si puede participar en las elecciones presidenciales del 2021"
        Leer n2
	    n1 = 2021
	    Si n1-n2 >= 18
		    entonces b = 0
	    FinSi
        Si n1-n2 < 18
		    entonces b = 1
	    FinSi
        Si b = 0
            entonces escribir "Esta persona SI puede votar en las elecciones presidenciales del 2021"
        FinSi
        Si b = 1
            entonces escribir "Esta persona NO puede votar en las elecciones presidenciales del 2021"
        FinSi
    Fin del algoritmo.
*/

let name = prompt (`Ingrese sus nombres y apellidos`);
let birthYear = prompt (`Ingrese el año de su nacimiento`);

let birthYearNumber = Number.parseInt (birthYear);
let elecYear = 2021;

let agePerson = (elecYear - birthYearNumber);

if (agePerson >= 18) {
    console.log (`Felicitaciones ${name}! Usted puede votar en las elecciones presidenciales del 2021 ya que tiene 18 años o más.`);
}

else if (agePerson < 18) {
    console.log (`Que pena ${name}! Lamentablemente, usted no puede votar en las elecciones presidenciales del 2021 ya que aún no tiene 18 años.`);
}

else {
    console.error (`Usted ha ingresado mal un dato.`)
}



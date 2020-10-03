/*
10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad
    Algoritmo: en un grupo de 3 personas, determinar que persona es la menor y brindar su nombre y edad  
        Definir p1 como caracter
        Definir n1 como entero
        Definir p2 como caracter
        Definir n2 como entero
        Definir p3 como caracter
        Definir n3 como entero
        Definir n como entero
        Definir p como caracter
        Escribir "Ingrese los nombres y apellidos de la primera persona"
        Leer p1
        Escribir "Ingrese la edad de la primera persona"
        Leer n1
        Escribir "Ingrese los nombres y apellidos de la segunda persona"
        Leer p2
        Escribir "Ingrese la edad de la segunda persona"
        Leer n2
        Escribir "Ingrese los nombres y apellidos de la tercera persona"
        Leer p3
        Escribir "Ingrese la edad de la tercera persona"
        Leer n3
        Si n1 < n2 & n1 < n3
            entonces r = n1
        FinSi
        Si n2 < n1 & n2 < n3
            entonces r = n2
        FinSi
        Si n3 < n1 & n3 < n2
            entonces r = n3
        FinSi
        Si r = n1
		    entonces p = p1
	    FinSi
	    Si r = n2
		    entonces p = p2
	    FinSi
	    Si r = n3
		    entonces p = p3
	    FinSi
        Escribir "La menor de las tres personas tiene " r " años, y es " p
    Fin del algoritmo.
*/

let person1 = prompt (`Ingrese los nombres y apellidos de la primera persona`);
let age1 = prompt (`Ingrese la edad de la primera persona`);
let person2 = prompt (`Ingrese los nombres y apellidos de la segunda persona`);
let age2 = prompt (`Ingrese la edad de la segunda persona`);
let person3 = prompt (`Ingrese los nombres y apellidos de la tercera persona`);
let age3 = prompt (`Ingrese la edad de la tercera persona`);

let age1Number = Number.parseInt (age1);
let age2Number = Number.parseInt (age2);
let age3Number = Number.parseInt (age3);

if ((age1Number > age2Number) && (age1Number > age3Number)) {
    console.log (`La mayor de las tres personas es ${person1}. Su edad es ${age1Number} años.`);
}

else if ((age2Number > age1Number) && (age2Number > age3Number)) {
    console.log (`La mayor de las tres personas es ${person2}. Su edad es ${age2Number} años.`);
}    

else if ((age3Number > age1Number) && (age3Number > age2Number)) {
    console.log (`La mayor de las tres personas es ${person3}. Su edad es ${age3Number} años.`);
}

else if ((age1Number === age2Number) && (age1Number === age3Number)) {
    console.log (`${person1}, ${person2} y ${person3} tienen la misma edad y es ${age1Number} años.`);
} 

else if ((age1Number === age2Number) && (age1Number > age3Number)) {
    console.log (`Las mayores de las tres personas son ${person1} y ${person2}. Su edad es ${age1Number} años.`);
}

else if ((age1Number === age3Number) && (age1Number > age2Number)) {
    console.log (`Las mayores de las tres personas son ${person1} y ${person3}. Su edad es ${age1Number} años.`);
}

else if ((age2Number === age3Number) && (age2Number > age1Number)) {
    console.log (`Las mayores de las tres personas son ${person2} y ${person3}. Su edad es ${age2Number} años.`);
}

else {
    console.error (`Usted ha ingresado mal un dato.`);
}





/*
11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador
    Algoritmo: determinar el monto del bono que le correponde a los empleados de una tienda según su antiguedad.  
        Definir n1 como entero
        Definir n2 como entero
        Definir b como entero
        Escribir "Ingrese en que año se contrató al emnpleado"
        Leer n2
	    n1 = 2020
	    Si n1-n2 = 0
		    entonces b = 0
	    FinSi
        Si n1-n2 = 1
		    entonces b = 100
	    FinSi
	    Si n1-n2 = 2 
		    entonces b = 200
	    FinSi
	    Si n1-n2 = 3 
		    entonces b = 300
	    FinSi
	    Si n1-n2 = 4 
		    entonces b = 400
	    FinSi
	    Si n1-n2 = 5 
		    entonces b = 500
        FinSi
        Si n1-n2 > 5 
		    entonces b = 1000
        FinSi
	    Escribir "A este empleado le corresponde un bono de " b
    Fin del algoritmo.
*/

let person = prompt (`Ingrese los nombres y apellidos del trabajador`);
let yearHired = prompt (`Ingrese el año en el que este trabajador inicio su labor en la empresa`);
let yearActual = prompt (`Ingrese el año en curso`);

let yearHiredNumber = Number.parseInt (yearHired);
let yearActualNumber = Number.parseInt (yearActual);

let yearsWorking = (yearActualNumber - yearHiredNumber);

if ((yearsWorking === 0)) {
    console.log (`${person} no tiene derecho al bono ya que ingresó a la empresa este año.`)
}

else if ((yearsWorking === 1)) {
    console.log (`${person} tiene derecho a un bono de 100 soles ya que ingresó a la empresa hace 1 año.`);
}    

else if ((yearsWorking === 2)) {
    console.log (`${person} tiene derecho a un bono de 200 soles ya que ingresó a la empresa hace 2 años.`);
}    

else if ((yearsWorking === 3)) {
    console.log (`${person} tiene derecho a un bono de 300 soles ya que ingresó a la empresa hace 3 años.`);
}    

else if ((yearsWorking === 4)) {
    console.log (`${person} tiene derecho a un bono de 400 soles ya que ingresó a la empresa hace 4 años.`);
}   

else if ((yearsWorking === 5)) {
    console.log (`${person} tiene derecho a un bono de 500 soles ya que ingresó a la empresa hace 5 años o más.`);
}    

else if ((yearsWorking > 5)) {
    console.log (`${person} tiene derecho a un bono de 1000 soles ya que ingresó a la empresa hace más de 5 años.`);
}    

else {
    console.error (`Usted ha ingresado mal un dato.`);
}




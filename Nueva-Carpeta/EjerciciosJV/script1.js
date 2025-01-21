/* Lo que se pide 
Has hecho una compra y sabes el precio del producto y su iva.
Haz un script que te calcule el precio total que vas a pagar por tu compra
Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100
Precio 200€
Iva: 21%
El total son 242€ 
200 + 21*200/100 */

let precio = 200
let iva = 21

let precioTotal = precio + precio*21/100
console.log("El precio total es: "+ precioTotal)


/* En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el area y el perimetro del cuadrado.
El area la calculas como lado multiplicado por lado. EL perimetro es la suma de los cuatro lados */
//LADO 40 
//AREA 1600
//PERIMETRO 160 

let lado = 10;

let totalArea = lado * lado
let totalPerimetro = lado * 4;
console.log("El perimetro total es:" +totalPerimetro & "El total del Area: " + totalArea)



/* Escribe un programa que solcite  al usuario ingresar el numero de kilometros recorridos por su coche y el numero de litros consumidos. El script debe mostrar el consumo de combustible por kilometro 

Un problema maematico muy simple numero de litros dividido por numero de kilometros

El usuario teclea 
Num de litros:20
Num de kilometros 80
Has consumido 0.24l/Km 20/80*/

var litros = prompt("Numero de litros introducidos")
var kilometro = prompt("Numero de kilometros")

litros = parseFloat(litros)
kilometro = parseFloat(kilometro)

consumo = kilometro

console.log("Consume: "+ consumo +"litros/Km")

/* Este ejercicio es un clasico si lo haces a la primera y sin tardar entiendes las variables puedes estar seguro
AL final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera,No vale usar arrays ni asignacion multiple*/
/* varUno vale 10 varDos vale 30
Al final 
varUno vale 30 y varDos vale 10 */
var varUno = 10; // Declaramos la variable 'varUno' y le asignamos el valor 10.
var varDos = 30; // Declaramos la variable 'varDos' y le asignamos el valor 30.
console.log("varUno es " + varUno); // Mostramos en la consola el valor actual de 'varUno', que es 10.
console.log("varDos es " + varDos); // Mostramos en la consola el valor actual de 'varDos', que es 30.
var aux; // Declaramos una variable auxiliar llamada 'aux'. Por ahora no tiene valor, por lo que su valor es 'undefined'.
aux = varUno; // Asignamos a 'aux' el valor de 'varUno', que es 10. Ahora 'aux' = 10.
varUno = varDos// Asignamos a 'varUno' el valor de 'varDos', que es 30. Ahora 'varUno' = 30.;
varDos = aux; // Asignamos a 'varDos' el valor de 'aux', que es 10. Ahora 'varDos' = 10.
console.log("varUno es " + varUno); // Mostramos en la consola el nuevo valor de 'varUno', que ahora es 30.
console.log("varDos es " + varDos); // Mostramos en la consola el nuevo valor de 'varDos', que ahora es 10.
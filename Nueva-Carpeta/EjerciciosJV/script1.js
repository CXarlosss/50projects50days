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

 
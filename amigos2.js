// Calculadora - Callback  es una funcion que se pasa como parametro de otra funcion.-

let sumar= (numA , numB) => numA + numB;
let restar=(numA , numB) => numA - numB;
let multiplicar= (numA , numB) => numA * numB;
let dividir= (numA , numB) => numA / numB;

let calculadora = (numA ,numB, operacion)=> operacion (numA, numB);
console.log(calculadora (25,3,sumar));
console.log(calculadora (8,2,restar));

// ejemplo callback
function nombreYapellido (nombre,apellido) {
    return nombre +' '+ apellido;}

function saludar (nombre ,apellido, callback) {
    return '¡Hola ' + callback(nombre, apellido) +'!';     
};
// defino la funcion 'saludar' para que reciba los parametros donde el callback ser ejecutado primero internamente.  
console.log(saludar ('Juan', 'Sosa', nombreYapellido));


let doble= numero=> numero *2;
let triple =numero=> numero*3;
console.log(doble (8));


let apply = (valor, funcion)=> funcion (valor)
console.log(apply(36,doble));


function dobleDe (numero){
return 2* numero;
}
console.log(dobleDe(8));

//function triple (numero){
//return numero *3;}

//CLOSURE

function saludoGenerico (nombre){
    let saludoNormal= 'Holaaa';
    function saludar() {
        return saludoNormal + ' '+ nombre;
    }
return saludar();
}
console.log( saludar ('Joaquin'));


// clousure esta dentro de una funcion contenedora y se utiliza cuando 
// esa funcion sea ejecutada

function saludar (persona){
    let mensaje = 'Hola, bienvenidx';
    function saludoPersonal (){
        return mensaje + ' ' + persona;
    }
    return saludoPersonal ();
}
console.log(saludar('Maria'));

function inicia (){
    let nombre = 'Mozilla'; // 'nombre' es una variable local creada por la función 'inicia'
    function muestraNombre() { // 'muestraNombre' es una función interna (un closure)
      return (nombre); // dentro de esta función usamos una variable declarada en la función padre
    }
    return muestraNombre();
}
console.log(inicia('Juancho'));


function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var suma5 = creaSumador(5);
  var suma10 = creaSumador(10);
  
  console.log(suma5(2));  // muestra 7
  console.log(suma10(2)); // muestra 12 

 

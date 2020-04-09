let amigos=['alan','maria','juan','pedro'];
let amigosJSON = JSON.stringify(amigos);
console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);
console.log(amigosOriginal);

let persona= {
    nombre: 'maria',
    apellido: 'Garcia',
    edad: 33,
    ciudad: 'casanova',

};

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);

let personaOriginal = JSON.parse (personaJSON);
console.log( personaOriginal);

//ejemplo lengtht
let mensaje = 'gran dia para practicar javascript!'
console.log(mensaje.length);


//ejemplo slice
console.log(mensaje.slice (0,24));
console.log(mensaje);
console.log(mensaje.slice(-10));

// ejemplo indexof
console.log(mensaje.indexOf('dia'));

// ejemplo trim
let nombreCompleto = ' Homero Simpson ';
console.log(nombreCompleto.trim());

 // ejemplo split
 let cancion = 'and simon was his name, ooh';
console.log (cancion.split());
console.log (cancion.split(' '));
console.log (mensaje.split(' '));

// ejemplo replace

let frase = 'Aguante Python';
console.log(frase.replace( 'Python', 'JS'));
console.log(mensaje.replace('javascript','todo'));

// ejercicio de palyground
let licenciada = "¡Hola!, soy Carli";
console.log(licenciada.slice(12));


//ejemplo typeof
let nombre= 'maria';
console.log(typeof nombre);

let edad =56;
console.log(typeof edad);

//ejemplo parseInt
let edadAlumnos = ("25","44","23")
let edadConvertido= console.log(parseInt("25","44","23"));
let edadConvertidoB= console.log(parseInt("25"));
let nombreA = console.log (parseInt(edad));

//ejemplo Number
console.log(Number(nombre));
console.log(Number (parseInt(edad)));
console.log(Number (parseInt("25")));

// probando
let leyenda= ("ahora cuesta 28.3");
console.log(typeof leyenda);

console.log(Number(leyenda));
console.log(parseInt(leyenda));

console.log(parseInt(Number (parseInt("25"))));

//probando2

let texto=("25.3")
console.log (texto);

console.log(typeof texto);
console.log(Number(texto));
console.log(parseInt(texto));
// si quiero saber que paso realmente debo guardar la conversion en una "variable nueva", y consologuear el type de esa variable nueva
//como en el ejemplo:

let otraVariable= Number(texto);
//console.log(typeof otraVariable);
let variable = parseInt(texto);
console.log(typeof variable);


// ejemplo String
let textoConvertido= String(variable);
console.log(typeof textoConvertido);
console.log(textoConvertido + 5); // como es un tipo texto al concatenar me devuelve 255 


// Arrow functions de estructura basica,
// si no recibe parametros debo escrirlos igual// son anonimas pero podemos expresarlas como valor de una variable

let laMitad = numero => numero /2;
    console.log(laMitad (8));

//let dividir= (numA, numB)  => numA/ numB;
//console.log(dividir (30,5));
 
let tengoClasesHoy = dia=> {
    if (dia == 'Sábado' || dia== 'Domingo'){
        return 'Hoy no tenes clases';
    }else { 
        return'si, hoy es dia de cursar';
    
    }
}
console.log(tengoClasesHoy ('Martes'));

// practica ARROW permiten escribir funciones de forma mas compacta.-

let horaActual =() => {
    let fecha = new Date ();
    return fecha.getHours() + ':' + fecha.getMinutes();

    doble = numero=> numero *2;

}
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

function saludoGenerico (nombre){
    let saludoNormal= 'Holaaa';
    function saludar (){

        return saludoGenerico + ' '+ nombre;
    }
return saludar();
}

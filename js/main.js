
//Primera consigna
 alert("Necesito que ingreses un numero y se va a sumar con otro numero");
let numero = parseInt (prompt("Tenes que ingresar un numero"));
let suma = "+";
for(let i= 1; i <=10; i++ ){
    let resultado = numero  + i;
    alert(numero + suma + i + "=" + resultado);
} 


//Segunda consigna
 alert("Hay una palabra clave para poder salir, tenes que descubrirla");
let espacio = " ";
let entrada = prompt("Ingresa la palabra");


while (entrada != "salir"){
    alert("El usuario ingreso" + espacio + entrada);
    entrada = prompt("Vuelva a ingresar otro dato");
} 


//Tercera consigna
let ingresarNumero = parseInt (prompt ("Tenes que ingresar un numero y que repita la cantidad de veces hola"));
for(let i = 1; i<= ingresarNumero; i++ ){
    console.log (" Hola "  +  i);
    alert(" Hola "  +  i);

}






    












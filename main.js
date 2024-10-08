//1. Ejercicio 2
var a =5;
var b=10;
var c= a+b;
console.log("La suma de a y b es:"+c);


//1. Ejercicio 3

let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola " + nombre + "!");


//2. Ejercicio 1
var a=3;
var b=10;
var c= 1;
console.log("El mayor de los tres numero es: "+Math.max(...[a,b,c]));

//2. Ejercicio 2

let numeroIngresado = prompt("Ingrese un numero");
if(numeroIngresado%2===0){
  console.log("El número" +numeroIngresado+ "es par");
}else{
  console.log("El número " + numeroIngresado + " es impar");
}

//3. Ejercicio 1
var cont=10;
while(cont>0){
  console.log(cont);
  cont--;
}

//3. Ejercicio 2

let numeroIngresado2;
do{
  numeroIngresado2 = prompt("Ingrese un numero mayor a 100");

}while(numeroIngresado2<=100)
console.log("Ingresaste un numero mayor a 100: "+numeroIngresado2);

//4. Ejercicio 1
function esPar(a){
  return a%2==0;
}

var a=4;
var b=5;
console.log("El numero "+ a +" es par: "+esPar(a));
console.log("El numero "+ b +" es par: "+esPar(b));

//4. Ejercicio 2
function convertirCelsiusAFahrenheit(c){
  return c*1.8+32;
}
var gradosC=30;
console.log(gradosC+"°C son equivalentes a "+convertirCelsiusAFahrenheit(gradosC)+"°F")

//5. Ejercicio 1
let persona = {
  nombre: "Nico",
  edad: 22,
  ciudad: "Madrid",
  
  
  setCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};
persona.setCiudad("Barcelona");
console.log(persona);

//5. Ejercicio 2
let libro={
  titulo:"El Quijote",
  autor:"Nico",
  año: 2000,

  esAntiguo: function(){
    return 2024-this.año>10;
  }
};
console.log("El libro "+libro.titulo+" es antiguo: "+libro.esAntiguo())

//6. Ejercicio 1
var origin=[1,2,3,4,5,6,7,8,9,10];
var multi=[];
for (var elem of origin){
  multi.push(elem*2);
}
console.log("Numeros originales: "+origin)
console.log("Numeros multiplicados por 2: "+multi)

//6. Ejercicio 2
let pares=[];
for (var i=2;i<=20;i+=2){
  pares.push(i);
}
console.log("Primeros 10 numeros pares: "+pares)

//7. Ejercicio 1

const button= document.getElementById("button");
var parrafos = document.querySelectorAll('p');
button.addEventListener("click",()=>{
  for (var p of parrafos){
    p.style.color="blue";
  }
})

//7. Ejercicio 2
const button_alerta=document.getElementById("button_alerta");
const text_alerta=document.getElementById("text_alerta");
button_alerta.addEventListener("click",()=>{
  alert("Has ingresado:"+text_alerta.value);
  
  
})

//8. Ejercicio 1
const items = document.querySelectorAll("#lista li");
items.forEach(item => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});

//8. Ejercicio 2
const desa=document.querySelector("#Desabilitar");
const habi=document.querySelector("#Habilitar");
const text=document.querySelector("#text");

desa.addEventListener("click",()=>{
  text.disabled=true;
  
});

habi.addEventListener("click",()=>{
  text.disabled=false;
  
});

//9. Ejercicio 1
const enviar=document.getElementById("enviar");
const eliminar=document.getElementById("eliminar");
const email=document.getElementById("email");
const emailSaved=document.getElementById("emailSaved")

enviar.addEventListener("click",()=>{
  localStorage.setItem("dato",email.value);
  
})
eliminar.addEventListener("click",()=>{
  localStorage.removeItem("dato")
  
})
emailSaved.textContent=localStorage.getItem("dato");
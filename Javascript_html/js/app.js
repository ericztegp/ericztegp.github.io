

function  numeroAleatorio(max){
    let numero = Math.floor(Math.random() * max) + 1;
    return numero
}
console.log(numeroAleatorio(10))
/*
for (let i = 0; i < 6; i++) {
        let numero = numeroAleatorio(49) 
        console.log(numero)
}
*/

/*
let numero = 0
let numeros = []
let resultado = document.getElementById("resultado")


while (numeros.length < 6){
    numero = numeroAleatorio(49)
    if (numeros.indexOf(numero)>-1){
        console.log(numero)
    }
    else{
        numeros.push(numero)
    }
}
console.log(numeros)

resultado.innerHTML = numeros
*/
/*
let alfabeto= "abcdefghijklmnñopqrstuvwxyz"
let frase = 'zanahoria'
let paso = 3
let fraseCifrada = ""

for (let i=0; i < frase.length; i++) {
    let posicion = (alfabeto.indexOf(frase[i]) + paso) % alfabeto.length
    let letraCifrada = alfabeto[posicion] 
    fraseCifrada = fraseCifrada + letraCifrada
}
console.log(fraseCifrada)
*/









/*
let caracteres = "abcdefghijklmnopqrstuvwxyz"
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caracteresNumeros = "0123456789"
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./"


function numeroAleatorio(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min
}

function generarContraseña(longitud){
let todos = caracteres + caracteresMayusculas + caracteresNumeros + caracteresEspeciales
let password = ""

for (let i = 0; i < longitud; i++){
    let indice = numeroAleatorio(0, todos.length - 1)
    password += todos[indice]
}

password = password.split('').sort(() => Math.random() - 0.5).join('')
return password

}
console.log(generarContraseña(12))*/
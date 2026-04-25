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
console.log(generarContraseña(12))
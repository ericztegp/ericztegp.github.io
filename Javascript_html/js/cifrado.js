
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

function  numeroAleatorio(max){
    let numero = Math.floor(Math.random() * max) + 1;
    return numero
}
console.log(numeroAleatorio(10))


for (let i = 0; i < 6; i++) {
        let numero = numeroAleatorio(49) 
        console.log(numero)
}
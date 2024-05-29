//Criando as variaveis
let arrayNormal = []
let arrayInvertido = []
let quantidade = parseInt(prompt("Insira a quantidade de numeros que deseja colocar no array"))

//Deixando o array com numeros
for(let i = 0; i < quantidade; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + "numero"))
    arrayNormal[i] = numero
}   

console.log("Array normal é " + arrayNormal)

//Mostrando o array invertido
let contador = quantidade - 1
for(let i = 0; i < 5; i++){
    arrayInvertido[i] = arrayNormal[contador]
    contador--
}

console.log("O array invertido é " + arrayInvertido)
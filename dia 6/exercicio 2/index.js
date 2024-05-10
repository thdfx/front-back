let numero = parseInt(prompt("Insira um numero inteiro e positivo!"))

for(let i = numero; i <= numero + 2; i++){
    console.log("Tabuada do numero: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + " X " + j + " = " + (i * j))
    }
}

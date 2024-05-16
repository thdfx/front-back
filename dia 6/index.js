let tabuada = Number(prompt("Escreva um numero."))

for(let i = tabuada; i <= tabuada + 2; i++){
    console.log("Tabuada do numero: " + i)
    for (let contador = 0; contador <= 10; contador++)
    console.log(i + " X " + contador + " = " + (i*contador))
}   
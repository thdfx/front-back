//Criando variaveis

let nomes = [];
let notas = [];
let continuar = true;
let contador = 0

//Criando o loop
while(continuar){
    let nome = prompt("Insira o nome do aluno " + "n" + (contador + 1))
    let nota = Number(prompt("Insira a nota do aluno"))
    
    nomes[contador] = nome
    notas[contador] = nota
    contador++
    

    let desejaContinuar = prompt("Insira 1 se deseja continuar")
    if(desejaContinuar != "1"){
        continuar = false
    }
}

//Exibindo as inf
console.log("Notas: ")
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i] + " - " + notas[i])
}

let somaNotas = 0
for(let i = 0; i < notas.length; i++ ){
    somaNotas += notas[i]
}

let mediaGeral = somaNotas / nomes.length
console.log("A soma das notas foi de: " + somaNotas)
console.log("A media geral dos alunos foi: " + mediaGeral)
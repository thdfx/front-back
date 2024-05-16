//CRIANDO VARIAVEIS
let mediaGeral = 0 
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//nota, sexo
while(contador <= 10){
    let nota = Number(prompt("Insira a sua nota do " + contador + "aluno"))
    let sexo = prompt("Qual o seu sexo? m/f")

   if(nota > maiorNotaHomens){
    maiorNotaHomens = nota

    if(sexo = "m"){
        qtdHomens++
    }

    if(nota > 7){
        qtdMulheresAcimaDe7++
    }

}
mediaGeral += nota
contador++
}

//CAlCULANDO A MEDIA GERAL
mediaGeral = mediaGeral / 10

console.log("A quantidade de homens é de " + qtdHomens)
console.log("A quantidade de mulheres que tiveram a ntoa maior que 7 foi " + qtdMulheresAcimaDe7)
console.log("A maior nota dos homens é " + maiorNotaHomens)
console.log("A media geral das notas foi " + mediaGeral)
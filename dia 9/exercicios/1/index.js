//definindo variaveis
let nome = prompt("Insira o seu nome")
let altura = Number(prompt("Insira a sua altura"))
let idade = Number(prompt("Insira a sua idade"))
let peso = Number(prompt("Quanto voce pesa?"))
let profissao = prompt("Voce trabalha com oque?")

//chamando as variaveis
console.log("Olá, " + nome + ", Voce tem " + idade + "anos, " + "e pesa " + peso + "kg" + ", e trabalha como " + profissao)

//verificando a idade
if(idade >= 18){
    console.log("Voce pode beber umas geladas")
}else{
    console.log("Voce nao pode beber umas geladas")
}

//transformando idade em dias,semanas e meses
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("A sua idade em meses" + meses)
console.log("A sua idade em semanas" + semanas)
console.log("A sua idade em dias" + dias)

//Descobrindo o imc
let imc = peso / (altura*altura)
console.log(imc + "kg/m2")

if(imc < 18,5){
    console.log("O seu estado é de magreza!")
}else if(imc >= 18,5 && imc < 24,9){
    console.log("O seu estado é normal!")
}else if(imc >= 24,9 && imc <= 30){
    console.log("O seu estado é de sobrepeso!")
}else if(imc > 30){
    console.log("Voce esta com obesidade!")
}else{
    console.log("Opção invalida.")
}

//DESCOBRINDO O ANO DE NASCIMENTO
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Voce nasceu no ano de " + anoNasc)

//EXIBINDO ANO E IDADES
let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

//LOOP DOWHILE
do{
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
}while (continuar == "s")



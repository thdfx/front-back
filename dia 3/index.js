//DECLARANDO VARIAVEIS

let nome = ""
let idade = 0
let altura = 0
let peso = 0


//PEDINDO VARIAVEIS

nome = prompt("Insira seu nome")
idade = prompt("Insira sua idade")
altura = prompt("Insira sua altura")
peso = prompt("Insira o seu peso")
anoNasc = 2023 - idade
imc = peso / (altura * altura)

console.log("Voce nasceu no ano de " + anoNasc) 
/
console.log("Ola " + nome + ", Voce tem " + idade + " anos," +
        " Nasceu em " + anoNasc + ", tem de altura " + altura + ", pesa " + peso +
        "kg, Seu IMC é " + imc + "kg/m")

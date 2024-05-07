let nome = ""
let idade = 0
let temCarta = ""
let temCarro = ""

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual a sua idade?"))
temCarta = prompt("Voce possui carta de motorista? (sim|nao)")
temCarro = prompt("Voce tem carro? (sim|nao)")

if(idade < 18 || temCarta === "nao"){
    console.log(nome + ", Voce nao pode dirigir ainda!")
}else if(idade >= 18 && temCarta === "sim" && temCarro === "nao"){
    console.log(nome + ", Voce pode dirigir, porém nao tem um carro.")
}else{
    console.log(nome + ", Voce sera o motorista!")
}

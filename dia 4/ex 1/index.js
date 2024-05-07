let fome = prompt("Voce está com fome? s/n")
let dinheiro = prompt("Voce tem dinheiro? s/n")
let restaurante = prompt("O restaurante esta aberto? s/n")

if(fome === "n" || dinheiro === "n"){
    console.log("Hoje o jantar sera em casa")
}if(fome === "s" && dinheiro === "s" && restaurante === "n"){
    console.log("Peça um delivery!")
}if(fome === "s" && dinheiro === "s" && restaurante === "s"){
    console.log("Hoje o jantar vai ser no restaurante!")
}
let num1 = Number(prompt("Insira o primeiro numero."))
let num2 = Number(prompt("Insira o segundo numero."))
let opcao = parseInt(prompt("Escolha qual a operaçao que deseja realizar:" 
    + "\n1 = + \n2 = - \n3 = * \n4 = /"))

switch(opcao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))   
        break
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
    break
}
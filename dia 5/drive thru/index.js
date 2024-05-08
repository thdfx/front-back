let opcao = parseInt(prompt("Oque voce deseja fazer?" +
"\n1 = Abastecer Gasolina \n2 = Abastecer Alcool \n3 = calibrar pneus"))

switch(opcao) {
    case 1:
        let valorGasolina = parseInt(prompt("Qual o valor que deseja abastecer?"))
        console.log("Foi abastecido " + valorGasolina / 5 + "L de gasolina")
        break
    case 2: 
        let valorAlcool = parseInt(prompt("Qual o valor que deseja abastecer?"))
        console.log("Foi abastecido " + valorAlcool / 3 + "L de alcool")
        break
    default:
        console.log("Pneus calibrados com sucesso!")
    }
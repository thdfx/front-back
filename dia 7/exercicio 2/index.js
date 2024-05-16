let saldo = 1000
let maiorValorInserido = 0 
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false

do {
    const nome = prompt("Digite seu nome")
    const cpf = prompt("Digite seu cpf")
    const valor = Number(prompt("Digite o valor da transação"))
    const operacao = prompt("Qual operacao voce deseja? S ou D")

    if (valor < 0){
        console.log("Valor invalido. A transação nao foi realizada")
    }else if(operacao == "s" && valor > saldo){
        console.log("Saldo insuficiente. A transação nao foi realizada")
    }else if (operacao == "s"){
        console.log("Ola, " + nome + ", saeu saldo atual é de " + saldo)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido){
               maiorValorInserido = valor
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é de " + saldo)     
    }else {
        console.log("Ola," + nome + ", Seu saldo é de " + valor)
        saldo += valor
        totalTransacoes++
        maiorValorInserido += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é de " + valor)

    }

    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar) ")
    if (opcao === "1") {
        continuar = true
    }else if (opcao === "2"){
        continuar = false
    }else {
        console.log("Opcao invalida. Programa encerrado.")
        continuar = false
    }

} while (continuar)

console.log("Saldo final: R$" + saldo)
console.log("Maior valor inserido: R$" + maiorValorInserido)
console.log("Media dos valores inseridos: " + (somaValoresInseridos / totalTransacoes))
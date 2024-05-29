//Criando variaveis
let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;
//Populando os arrays
while(continuar){
    let modelo = prompt("Qual o modelo do carro?")
    let ano = prompt("Qual o ano do carro?")
    let valor = prompt("Insira o valor do carro.")

    modelos[contador] = modelo
    anos[contador] = ano
    valores[contador] = valor

    let opcaoContinuar = prompt("Se deseja continuar insira 1")
    if(opcaoContinuar != "1"){
        continuar = false;
    }
contador++
}

//Exibindo todas as informações
console.log("Carros cadastrados: ")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

//Ordenando os preços


for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++) {
        if(valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1] 
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor
            
            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor
        
        }
    }
}

console.log("Carros ordenados pelo preço:")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}


//Criando os arrays 
let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;

while(continuar){
    //solicitando a opcao, e colocando os comandos para cada ocasião

    let opcao = prompt("Oque deseja fazer? 1 - cadastrar; 2 - login; 3 - excluir; 4 - encerrar")

    switch(opcao) {
        case "1":
            nomes[contador] = prompt("Qual o seu nome?")
            senhas[contador] = prompt("Qual a sua senha?")
            contador++

            break;

        case "2":
            let nome = prompt("Qual o seu nome")
            let senha = prompt("Qual sua senha")
            let loginCerto = false

            for(let i = 0; i < nomes.length; i++ ) {
                if(nome == nomes[i] && senha == senhas[i]){ 
                    loginCerto = true
                }
            }
            if(loginCerto){
                alert("Login feito. Bem vindo!")
            }
                else { 
                    alert("login ou senha estao incorretos.")
                }
                break;

            case "3":

            let nomeExcluir = prompt("Qual o nome que deseja excluir")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0;

            for(let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]) {
                    alert("Cadastro excluido!")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
                nomes = nomesAux
                senhas = senhasAux
                contador--

                break;

            case "4":
                continuar = false
                break
            default:
                console.log("Opcao invalida.")
                break;
    }
}

function encontrarOindice(nome){
    for(let i = 0; i < nomes.length; i++){
        if (nomes[i] === nome) {
            return i;
        }
}
    return -1;
    }
        

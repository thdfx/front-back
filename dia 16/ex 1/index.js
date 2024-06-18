let nomes = []
let senhas = []


function pedindoOpcao(){
    let opcao = prompt("Oque deseja fazer? 1 - cadastrar, 2 - login, 3 - excluir cadastro, 4 - encerrar programa")
    return opcao;

}


function cadastrarUsuario(){

    nomes.push(prompt("Digite o seu nome"))
    senhas.push(prompt("Digite sua senha"))
}

function fazendoLogin(nome, senha){
    let indice = nomes.indexOf(nome)
    if (indice !== -1 && senhas[indice] == senha){
        return true;
    }else {
        return false;
    }

}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome)
    if(indice !== -1){
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Seu cadastro foi excluido")

    }else {
        console.log("Usuario nao encontrado")
    }
}

let continuar = true
while(continuar){
    let opcao = solicitarOpcao()

    switch(opcao){
        case "1":
            cadastrarUsuario()
        break;

        case "2":
            let nome = prompt("Escreva seu nome")
            let senha = prompt("Escreva sua senha")
            let login = fazendoLogin(nome, senha);
            if(login){
                console.log("Login feito com sucesso")
            }else {
                console.log("Nome ou senha estao incorretos")
            }
            break;
            case "3":
                let nom = prompt("Digite seu nome")
                excluirCadastro(nom)
                break;
            case "4":
                continuar = false
                break;
            default:
                console.log("Opcao invalida. tente de novo")
            }
}
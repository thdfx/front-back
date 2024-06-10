class Carro{
    Nome
    Potencia
    VelocidadeMax
    Aceleracao

    constructor(nome, potencia, velocidadeMax, aceleracao){
        this.Nomeome = nome
        this.Potencia = potencia
        this.VelocidadeMax = velocidadeMax
        this.Aceleracao = aceleracao
    }

    CalculoTempoMedio (distancia) {
        let resultado = distancia / (this.VelocidadeMax / this.Aceleracao)
        return resultado
    }
}
   

class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(Nome, Tipo, Distancia,){

        this.Nome = Nome;
        this.Tipo = Tipo;
        this.Distancia = Distancia;
        this.Participantes = []
        this.Vencedor = ""
}

definirVencedor(){
    let menorTempo = this.Participantes[0].CalculoTempoMedio(this.Distancia)
    let vencedor = this.Participantes[0]

    for(let i = 1; i < this.Participantes.length; i++){
        let tempo = this.Participantes[i].CalculoTempoMedio(this.Distancia)
        if(tempo < menorTempo){
            menorTempo = tempo
            vencedor = this.Participantes[i]
        }
    }

        return this.Vencedor = vencedor

    }

    ExibirVencedor(){
    alert ("O vencedor é:" + this.Vencedor.Nome)
    }

}

let corrida = new Corrida("Ferrai", "formula 1", 10000)

corrida.Participantes[0] = new Carro("Omega", 150, 120, 10)
corrida.Participantes[1] = new Carro("Supra", 200, 200, 12)
corrida.Participantes[2] = new Carro("Civic", 100, 120, 9)

corrida.definirVencedor()
corrida.ExibirVencedor()
class computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
        constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
            this.tipo = tipo;
            this.processador = processador;
            this.video = video;
            this.armazenamento = armazenamento;
            this.memoriaRam = memoriaRam;
            this.ssd = ssd;
        }
            apresentar(){
             console.log("O tipo do computador é:" + this.tipo)       
             console.log("O processador do computador é:" + this.processador)   
             console.log("O tipo de video do computador é: " + this.video)   
             console.log("O computador tem armazenamento de: " + this.armazenamento)   
             console.log("A memoriaRam do computador é: " + this.memoriaRam)   
             console.log("O computador tem SSD? " + this.ssd)   
            }
}

let meuComputador = new computador("Dekstop", "i3 10100f", "integrado", 1000, 32, true)
meuComputador.apresentar()
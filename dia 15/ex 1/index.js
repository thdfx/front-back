let arrayA = [1,3,4,6,7,9,23,14,12,10]
let arrayB = [2,4,5,8,10,22,12,16,14]
let numerosIguais = (arrayA - arrayB)
let posicaoArray = 0;

function numerosComuns (arrayA, arrayB){
    let resultado = []
    let contador = 0;


    for(let i = 0; i < arrayA.length; i++){

        for(let j = 0; j < arrayB.length; j++){


            if(arrayA[i] == arrayB[j]){

                resultado[contador] + arrayA[i]
                contador++
                j = arrayB.length
            }
        }
    }
        return resultado

}

console.log(numerosComuns(arrayA,arrayB))

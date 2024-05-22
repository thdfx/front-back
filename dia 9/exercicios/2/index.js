//Variaveis e loop
let confirmar = "n";
let nome = prompt("Digite o seu nome");
let idade = parseInt(prompt("Digite sua idade"));
let salario = parseFloat(prompt("Digite seu salario atual"));
while (confirmar != "s") {
    console.log("Nome: " + nome + ", idade: " + idade + ", salario atual:" + salario);
    confirmar = prompt("As informações estão corretas? (s) ou (n)");
}


//Previsao do salario
let aumentoSalario = 0.015
console.log("Previsao salarial dos próximos 10 anos");

for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumentoSalario
    aumentoSalario *= 2

    console.log((2023 + ano) + " = R$ " + salario)
}

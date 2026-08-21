// FUNÇÕES
// EVITAR DUPLICAÇÕES DE CÓDIGO
import readline from "readline/promises"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function somarNumeros(n1, n2){ // SÓ É EXECUTADA QUANDO CHAMADA 
    const soma = Number(n1) + Number(n2)
    console.log(`${n1} + ${n2} = ${soma}`)
}



let num1 = await rl.question("Digite o numero 1: ")
let num2 = await rl.question("Digite o numero 2: ")

somarNumeros(num1, num2)

//somarNumeros(5, 6) // CHAMANDO/EXECUTANDO A FUNÇÃO somarNumeros
let idade = 40
let maiorDeIdade = idade >= 18
let temIngresso = true
let temCarro = false
let temMoto = true

// Para ir a uma festa tem que ser maior de idade e ter ingresso

let podeIrAFesta = maiorDeIdade && temIngresso && temCarro || temMoto
console.log("Pode ir a festa?", podeIrAFesta)

// console.log("É maior de Idade?: ", maiorDeIdade)



//ex001
console.log("")

let nota1 = 10, nota2 = 7
let media = (nota1 + nota2 )/2

if (media >= 7){
    console.log(`Aprovado`)
}
else if(media >= 5){
    console.log(`Recuperação`)
}
else{
    console.log (`Reprovado`)
}

//ex002
console.log("")

let senha = 1234, tentativa = 1235

console.log(`Digite sua senha: ${tentativa}`)



if (tentativa == senha){
    console.log(`Acesso permitido`)
}
else{
    console.log(`Acesso negado`)
}

//ex003
console.log("")

let idade2 = 17

if (idade2 < 16){
    console.log(`com ${idade2} anos não pode votar`)
}
else if(idade2 >= 16 && idade2 < 18){
    console.log(`com ${idade2} anos o voto é opcional`)
}
else if(idade2 <= 69){
    console.log(`com ${idade2} anos o voto é obrigatorio`)
}
else{
    console.log(`com ${idade2} anos o voto é opcional`)
}

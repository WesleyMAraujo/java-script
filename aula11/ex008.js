/* Exemplo de if else em js usando o node js */

var media = 6

/* estrutura de decisão ou condições */
if (media > 7 && media < 11) {
    console.log(`Você esta aprovado`)
} else if (media < 7){
    console.log(`Você esta reprovado`)
} else {
    console.log(`MEDIA ACIMA DE 10 ERROR`)
}

var vel = 71
var velmax = 70
if (vel > velmax) {
    console.log(`Você esta acima da velocidade permitida da rodovia de ${velmax} sua velocidade é: ${vel}`)
} else {
    console.log(`sua velocidade esta entre normal`)
}


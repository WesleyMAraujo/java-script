var agora = new Date() //pega a hora do sistema do computador
var hora = agora.getHours() //pegando as horas
if (hora < 12 && hora > 0) {
    console.log(`Bom dia são exatamente ${hora} horas`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde, são exatamente ${hora} horas`)
} else {
    console.log(`Boa noite, são exatamente ${hora} horas`)
}

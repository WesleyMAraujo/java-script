function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 12 /* data.getHours() */
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhã.jpg'
        document.body.style.backgroundColor = 'blue'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'yellow'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'violet'
    }
}

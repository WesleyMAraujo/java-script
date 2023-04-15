function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var imprimir = document.getElementById('imprimir')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)

        var genero = ``
        if (fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        imprimir.style.textAlign = 'center'
        if (genero == 'Homem') {
            imprimir.innerHTML = `Você é ${genero} com ${idade} anos <br> <img src="imagens/foto-jovem-m.png">`
        } else {
            imprimir.innerHTML = `Você é ${genero} com ${idade} anos <br> <img src="imagens/foto-jovem-f.png">`
        }
    }
    
}
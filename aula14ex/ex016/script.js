var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar() {
    alert('chegou')
    for (var i = inicio.value; i < fim.value; i + passo.value) {
        res.innerHTML = `${i} `
    }
    
}
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var contador1 = inicio.value
var contador2 = fim.value

function contar() {
    for (; contador1 < contador2 ; contador1 = contador1 + passo.value) {
        res.innerHTML += `${contador1}`
        
    }
    
}
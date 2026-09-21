function verificar () {
    let numero = Number(window.prompt('Digite um número'))
    if (numero == 0) {
        window.alert('O número é zero')
    } else if (numero > 0) {
        window.alert(`O número ${numero} é positivo`)
    } else {
        window.alert(`O número é negativo`)
    }
}
document.getElementById('botao')
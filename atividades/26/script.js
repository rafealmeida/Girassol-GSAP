function Numeros() {

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resultado = num1 - num2

    document.getElementById('resultado').innerHTML = 'A diferença é: ' + resultado
}
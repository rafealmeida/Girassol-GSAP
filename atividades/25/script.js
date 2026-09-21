function calcular (){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)
    
    let resultado = (num1 + num2 + num3 + num4 + num5) / 5
    document.getElementById('resultado').innerHTML = 'O resultado da soma dos três números é ' + resultado
}
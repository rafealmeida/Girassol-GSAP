function calcular (){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    
    let resultado = num1 + num2 + num3
document.getElementById('resultado').innerHTML = 'O resultado da soma dos três números é ' + resultado
}

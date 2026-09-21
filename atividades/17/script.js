function media (){
    let numero1= Number(window.prompt('Digite o primeiro número :'));
    let numero2 = Number(window.prompt('Digite o segundo número:'));
    let numero3 = Number(window.prompt('Digite o terceiro número: '));
    let multiplicacao;
    let media = (numero1 + numero2 + numero3) / 3

    window.alert('O resultado da média dos três números é '+ media)
}
document.getElementById('botao')
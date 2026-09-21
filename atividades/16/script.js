function multiplicacao (){
    let numero1= Number(window.prompt('Digite o primeiro número :'));
    let numero2 = Number(window.prompt('Digite o segundo número:'));
    let numero3 = Number(window.prompt('Digite o terceiro número: '));
    let multiplicacao;
    multiplicacao = numero1 * numero2 * numero3

    window.alert('O resultado da multiplicação dos três números é '+ multiplicacao)
}
document.getElementById('botao')
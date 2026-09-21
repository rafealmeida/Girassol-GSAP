function verificar() {
    let numero = Number(window.prompt('Digite um número inteiro: '));

    if (numero % 2 == 0) {
        window.alert('O número é par.');
    } else {
        window.alert('O número é ímpar.');
    }
}
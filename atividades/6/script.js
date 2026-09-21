javascript
function formulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    window.alert('Seu formulário foi enviado com sucesso, ' + nome + '!');
}

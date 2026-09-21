function adicionarCarrinho() {

    let confirmar = window.confirm(
        "Você tem certeza que deseja adicionar este item ao carrinho?"
    );

    if (confirmar) {
        window.location.href = "outra.html";
    }
}
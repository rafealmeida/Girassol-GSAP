const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
});
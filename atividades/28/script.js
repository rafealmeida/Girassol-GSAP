function mudarCor() {
    let texto = document.querySelector("p");

    if (texto.style.color === "red") {
        texto.style.color = "black";
    } else {
        texto.style.color = "red";
    }
}
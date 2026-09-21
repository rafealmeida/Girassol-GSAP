function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")
    var data = new Date()

    var hora = 22 //Faça os testes aqui
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 0 && hora < 12) {
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"

    } else {
        img.src = "noite.png"
        document.body.style.background = "#515154"
    }
}
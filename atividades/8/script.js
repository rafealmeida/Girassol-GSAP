let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    confirm("Você tem certeza que deseja enviar formulário?");

});
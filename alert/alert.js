function dados_formulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (nome === '' || email === '' || senha === '') {
        alert("Campos em branco, por favor preencher!");
    } else {
        alert(`${nome}\n${email}\n${senha}`);
    }
}

function validarFormulario() {
    var valorCampoA = parseFloat(document.getElementById('campoA').value);
    var valorCampoB = parseFloat(document.getElementById('campoB').value);
    var mensagemPositiva = document.getElementById('mensagemPositiva');
    var mensagemNegativa = document.getElementById('mensagemNegativa');

    if (valorCampoB > valorCampoA) {
        mensagemPositiva.innerHTML = "Formulário válido!";
        mensagemNegativa.innerHTML = ""; 
        return true; 
    } else {
        mensagemNegativa.innerHTML = "Formulário inválido. O número B deve ser maior que o número A.";
        mensagemPositiva.innerHTML = ""; 
        return false; 
    }
}

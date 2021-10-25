function validar() {

    var nome = formulario.nome;
    var cpf = formulario.cpf;
    var endereco = formulario.endereco;
    var numero = formulario.numero;
    var telefoneCelular = formulario.telefoneCelular;

    /*if (nome.value == "") {
        alert('Favor digite o campo obrigatório');
        nome.focus();
        return false;
    }

    if (cpf.value == "") {
        alert('Favor digite o campo obrigatório');
        cpf.focus();
        return false;
    }

    if (endereco.value == "") {
        alert('Favor digite o campo obrigatório');
        endereco.focus();
        return false;
    }

    if (numero.value == "") {
        alert('Favor digite o campo obrigatório');
        numero.focus();
        return false;
    }*/

    if (telefoneCelular.value == "") {
        alert('Favor digite o campo obrigatório');
        telefoneCelular.focus();
        return false;
    }
        alert("Formulário enviado com sucesso");

}
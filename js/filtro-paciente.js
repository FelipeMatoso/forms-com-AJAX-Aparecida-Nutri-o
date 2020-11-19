var campoFiltro = document.querySelector("#filtrar-tabela");


campoFiltro.addEventListener("input", function () {
    //console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        pacientes.forEach(paciente => {

            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome) == true)
                paciente.classList.remove("invisivel");
            else
                paciente.classList.add("invisivel");



        });
    }
    else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }


});
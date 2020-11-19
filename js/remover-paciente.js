var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("click", function (event) {
    event.target.parentNode.classList.add("remove-fade");
    
    setTimeout(function () {
        event.target.parentNode.remove();
    },500)
});


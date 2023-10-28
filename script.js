document.addEventListener("DOMContentLoaded", function () {
    const selectButton = document.getElementById("seleccionar");
    const resultadoDiv = document.getElementById("resultado");
    const cursoSeleccionadoSpan = document.getElementById("cursoSeleccionado");
    const horarioSeleccionadoSpan = document.getElementById("horarioSeleccionado");

    selectButton.addEventListener("click", function (event) {
        event.preventDefault();

        const cursoSelect = document.getElementById("curso");
        const horarioSelect = document.getElementById("horario");

        const cursoSeleccionado = cursoSelect.options[cursoSelect.selectedIndex].text;
        const horarioSeleccionado = horarioSelect.options[horarioSelect.selectedIndex].text;

        cursoSeleccionadoSpan.textContent = cursoSeleccionado;
        horarioSeleccionadoSpan.textContent = horarioSeleccionado;

        resultadoDiv.style.display = "block";
    });
});
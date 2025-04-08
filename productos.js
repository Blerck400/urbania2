document.querySelector(".search-bar").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        redirigirATienda();
    }
});

function redirigirATienda() {
    let input = document.querySelector(".search-bar").value.toLowerCase().trim();

    if (input === "") return;

    // Siempre redirige a prueba.html con el parámetro
    window.location.href = `tienda.html?search=${encodeURIComponent(input)}`;
}


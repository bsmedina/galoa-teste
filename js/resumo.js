const verMais = () => {
    const pontos = document.getElementById("pontos");

    const maisTexto = document.getElementById("mais");

    const btnVerMais = document.getElementById("linkVerMais");

    if (pontos.style.display === "none"){

        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerHTML = "ver mais"

    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVerMais.innerHTML = "ver menos"
    }
};
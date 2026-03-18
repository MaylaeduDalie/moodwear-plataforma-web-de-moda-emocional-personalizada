console.log("O JavaScript está funcionando!");

const botaoGerar = document.getElementById("gerar");
const humor = document.getElementById("humor");
const texto = document.getElementById("texto-resultado");

botaoGerar.addEventListener("click", function () {

    if (humor.value === "feliz") {
        texto.textContent = "Looks leves e coloridos para combinar com sua felicidade!";
    } else if (humor.value === "calmo") {
        texto.textContent = "Tons suaves e neutros para manter sua tranquilidade.";
    } else if (humor.value === "confianca") {
        texto.textContent = "Peças elegantes para destacar sua confiança.";
    } else {
        texto.textContent = "Um look especial baseado no seu humor!";
    }

});

const botaoFav = document.getElementById("favoritar");

botaoFav.addEventListener("click", function () {
    botaoFav.textContent = "✔ Favoritado!";
    botaoFav.style.backgroundColor = "#2ecc71";
});

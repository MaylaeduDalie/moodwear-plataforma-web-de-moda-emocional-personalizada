console.log("O JavaScript está funcionando!");

const botao = document.getElementById("favoritar");

botao.addEventListener("click", function() {
    botao.textContent = "✔ Favoritado!";
});

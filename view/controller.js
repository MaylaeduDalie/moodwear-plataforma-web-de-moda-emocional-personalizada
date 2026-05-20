document.addEventListener("DOMContentLoaded", () => {
    const listaFavoritosDiv = document.getElementById("lista-favoritos");
    const btnFavoritar = document.getElementById("btn-salvar-php");

    // 1. Atualiza a lista visual (vinda do db.js)
    async function renderizarFavoritos() {
        const favoritos = await buscarItens();
        if (favoritos.length === 0) {
            listaFavoritosDiv.innerHTML = "<p>Você ainda não salvou nenhum look.</p>";
            return;
        }

        listaFavoritosDiv.innerHTML = "";
        favoritos.forEach(item => {
            const card = document.createElement("div");
            card.className = "card-favorito";
            card.style = "border: 1px solid #d7ccc8; padding: 15px; margin-bottom: 10px; border-radius: 8px; background: white;";
            card.innerHTML = `
                <h4 style="margin:0">${item.tituloLook}</h4>
                <p>${item.pecas}</p>
                <small>Salvo em: ${item.data}</small>
                <br><button onclick="removerFavorito(${item.id})" style="background:#e74c3c; color:white; border:none; padding:5px; cursor:pointer; margin-top:10px;">Excluir</button>
            `;
            listaFavoritosDiv.appendChild(card);
        });
    }

    // 2. Lógica do Botão
    btnFavoritar.addEventListener("click", async () => {
        const titulo = document.getElementById("titulo-look").innerText;
        const pecas = document.getElementById("descricao-pecas").innerText;

        if (titulo === "Aguardando escolhas...") {
            alert("Gere um look primeiro!");
            return;
        }

        // SALVAR NO NAVEGADOR (IndexedDB)
        const novoFavorito = {
            tituloLook: titulo,
            pecas: pecas,
            data: new Date().toLocaleString()
        };
        await adicionarItem(novoFavorito);
        renderizarFavoritos();

        // ENVIAR PARA O PHP (Silenciosamente)
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('pecas', pecas);

        fetch('index.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then(data => console.log("PHP respondeu:", data))
        .catch(err => console.log("GitHub não roda PHP, mas o código foi enviado."));

        alert("Look favoritado!");
    });

    window.removerFavorito = async (id) => {
        if (confirm("Remover dos favoritos?")) {
            await deletarItem(id);
            renderizarFavoritos();
        }
    };

    renderizarFavoritos();
});
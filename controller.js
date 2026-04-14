document.addEventListener("DOMContentLoaded", () => {
    const listaFavoritosDiv = document.getElementById("lista-favoritos");

    // 1. Função para Renderizar a Lista de Favoritos na Tela
    async function renderizarFavoritos() {
        const favoritos = await buscarItens(); // Função do seu db.js
        
        if (favoritos.length === 0) {
            listaFavoritosDiv.innerHTML = "<p>Sua lista de favoritos está vazia.</p>";
            return;
        }

        listaFavoritosDiv.innerHTML = ""; // Limpa a lista antes de reconstruir

        favoritos.forEach(item => {
            const card = document.createElement("div");
            card.className = "card-favorito";
            card.style = "border: 1px solid var(--border); padding: 15px; margin-bottom: 10px; border-radius: 8px; background: white;";
            
            card.innerHTML = `
                <h4 style="margin-top:0">${item.tituloLook}</h4>
                <p><strong>Peças:</strong> ${item.pecas}</p>
                <small>Salvo em: ${item.data}</small>
                <br><br>
                <button onclick="removerFavorito(${item.id})" style="background-color: #e74c3c; padding: 5px 10px; font-size: 0.8rem;">
                    🗑️ Excluir
                </button>
            `;
            listaFavoritosDiv.appendChild(card);
        });
    }

    // 2. Lógica do botão Favoritar
    document.getElementById("favoritar").addEventListener("click", async () => {
        const titulo = document.getElementById("titulo-look").textContent;
        const pecas = document.getElementById("descricao-pecas").textContent;

        if (titulo === "Aguardando escolhas...") return;

        const novoFavorito = {
            tituloLook: titulo,
            pecas: pecas,
            data: new Date().toLocaleString()
        };

        await adicionarItem(novoFavorito); // Função do db.js
        renderizarFavoritos(); // Atualiza a tela na hora
    });

    // 3. Função Global para excluir (precisa ser window para o onclick funcionar)
    window.removerFavorito = async (id) => {
        if (confirm("Deseja remover este look dos favoritos?")) {
            await deletarItem(id); // Função do db.js
            renderizarFavoritos(); // Atualiza a tela
        }
    };

    // Carrega ao iniciar
    renderizarFavoritos();
});
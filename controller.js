// controller.js - Ponte entre UI e Banco de Dados

document.addEventListener("DOMContentLoaded", () => {
    const botaoFavoritar = document.getElementById("favoritar");

    // Evento para salvar o look atual no IndexedDB
    botaoFavoritar.addEventListener("click", async () => {
        // Captura os dados selecionados no momento
        const corpo = document.querySelector('input[name="corpo"]:checked')?.value;
        const estilo = document.querySelector('input[name="estilo"]:checked')?.value;
        const humor = document.getElementById("humor").value;
        const tituloLook = document.getElementById("titulo-look").textContent;

        // Validação simples
        if (!corpo || !estilo || !humor || tituloLook === "Seu Look MoodWear") {
            console.warn("Gere um look completo antes de favoritar!");
            return;
        }

        const novoFavorito = {
            corpo,
            estilo,
            humor,
            tituloLook,
            data: new Date().toLocaleString()
        };

        try {
            await adicionarItem(novoFavorito);
            console.log("✅ Look salvo com sucesso nos favoritos!");
            
            // Após salvar, lista todos para conferência
            await atualizarListaNoConsole();
        } catch (erro) {
            console.error("❌ Erro ao salvar favorito:", erro);
        }
    });

    // Função para listar os dados no console de forma organizada
    async function atualizarListaNoConsole() {
        const favoritos = await buscarItens();
        console.group("📋 Meus Looks Favoritos (IndexedDB)");
        console.table(favoritos);
        console.groupEnd();
    }

    // Carrega a lista inicial ao abrir a página
    atualizarListaNoConsole();
});
console.log("MoodWear: Motor de Combinação Ativado!");

// 1. CAPTURA DE ELEMENTOS
const botaoGerar = document.getElementById("gerar");
const selectHumor = document.getElementById("humor");

// Elementos de Saída (Resultado)
const imgLook = document.getElementById("imagem-look");
const figcaptionLook = document.getElementById("legenda");
const textoResultado = document.getElementById("texto-resultado");
const tituloLook = document.getElementById("titulo-look");
const botaoFav = document.getElementById("favoritar");

// 2. O SEU NOVO LOOKBOOK (Base de dados)
const lookBook = {
    // Exemplo 1: Casual + Ampulheta + Feliz
    'casual_ampulheta_feliz': {
        titulo: "Mix de Cores e Conforto",
        imagem: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
        legenda: "Jeans colorido e blusa solta destacando a sua silhueta.",
        texto: "Uma combinação vibrante e confortável de jeans e T-shirt colorida para destacar a sua alegria e silhueta ampulheta."
    },
    // Exemplo 2: Elegante + Retangular + Calmo
    'elegante_retangular_calmo': {
        titulo: "Elegância Serena",
        imagem: "https://images.unsplash.com/photo-1550639524-a6f58345a0b1?w=600&q=80",
        legenda: "Vestido midi com cinto suave.",
        texto: "Um vestido fluido em tons neutros. O cinto define a cintura no corpo retangular, mantendo uma elegância serena."
    },
    
    // FALLBACKS (Padrões de Segurança)
    'casual_default': {
        titulo: "Look Casual",
        imagem: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600",
        legenda: "Conforto e praticidade para o seu dia.",
        texto: "Um look casual padrão em tons terrosos que se adapta ao seu corpo."
    },
    'default': {
        titulo: "O seu Look MoodWear",
        imagem: "https://images.unsplash.com/photo-1434389678241-7e51084b655a?q=80&w=600",
        legenda: "Look neutro e versátil.",
        texto: "Separamos um look especial em tons de bege e marrom para combinar com o seu dia!"
    }
};

// 3. LÓGICA DE GERAÇÃO
botaoGerar.addEventListener("click", function () {
    const humorSelecionado = selectHumor.value;
    
    const radioCorpoMarcado = document.querySelector('input[name="corpo"]:checked');
    const radioEstiloMarcado = document.querySelector('input[name="estilo"]:checked');

    // Avisa se o utilizador esqueceu de marcar as bolinhas
    if (!radioCorpoMarcado || !radioEstiloMarcado) {
        alert("Por favor, selecione o seu Tipo de Corpo e o seu Estilo Predominante primeiro!");
        return;
    }

    const corpoSelecionado = radioCorpoMarcado.value;
    const estiloSelecionado = radioEstiloMarcado.value;

    // Cria a combinação (ex: casual_ampulheta_feliz)
    const chaveCombinacao = `${estiloSelecionado}_${corpoSelecionado}_${humorSelecionado}`;
    console.log("A procurar look para: " + chaveCombinacao);

    // Busca a imagem certa
    let recomendacaoFinal = lookBook[chaveCombinacao];

    // Se não achar a exata, usa um padrão para o site não quebrar
    if (!recomendacaoFinal) {
        recomendacaoFinal = lookBook[`${estiloSelecionado}_default`];
    }
    if (!recomendacaoFinal) {
        recomendacaoFinal = lookBook['default'];
    }

    // Atualiza o ecrã
    if (recomendacaoFinal) {
        tituloLook.textContent = recomendacaoFinal.titulo;
        imgLook.src = recomendacaoFinal.imagem;
        figcaptionLook.textContent = recomendacaoFinal.legenda;
        textoResultado.textContent = recomendacaoFinal.texto;

        botaoFav.textContent = "❤️ Favoritar Look";
        botaoFav.style.backgroundColor = "var(--bg-bege-medium)";
        botaoFav.style.color = "var(--primary-dark)";
    }
});

// 4. LÓGICA DE FAVORITAR
botaoFav.addEventListener("click", function () {
    if (botaoFav.textContent !== "✔ Favoritado!") {
        botaoFav.textContent = "✔ Favoritado!";
        botaoFav.style.backgroundColor = "var(--green-success)";
        botaoFav.style.color = "var(--white)";
    }
});
// script.js
console.log("MoodWear: Motor de Combinação Ativado!");

const botaoGerar = document.getElementById("gerar");
const selectHumor = document.getElementById("humor");
const textoResultado = document.getElementById("texto-resultado");
const tituloLook = document.getElementById("titulo-look");
const descricaoPecas = document.getElementById("descricao-pecas");

// BANCO DE DADOS DE COMBINAÇÕES
const modulosLook = {
   corpos: {
    'ampulheta': "Valorize a cintura com peças que marquem essa região. Você pode usar cintos, roupas ajustadas ou cortes que acompanhem o corpo. Evite peças muito largas que escondam suas curvas naturais.",
    
    'retangular': "Crie a ilusão de curvas adicionando volume em algumas partes do corpo. Aposte em cintos, saias rodadas, blusas com detalhes ou sobreposições que deem mais forma à silhueta.",
    
    'triangulo': "Destaque a parte superior do corpo para equilibrar com o quadril. Use cores claras, estampas ou detalhes na parte de cima, e prefira peças mais neutras e simples na parte de baixo.",
    
    'trianguloInvertido': "Equilibre o visual trazendo mais volume para a parte inferior. Saias, calças mais soltas, bolsos ou texturas ajudam a harmonizar com os ombros mais largos.",
    
    'oval': "Priorize conforto e alongamento da silhueta. Use peças com caimento leve, linhas verticais e evite roupas muito apertadas ou muito largas. O equilíbrio é o segredo."
},

estilos: {
    'casual': "Prefira peças confortáveis e versáteis. Jeans, camisetas, tênis ou sandálias são ótimas escolhas. Você pode adaptar com jaquetas, sobreposições ou acessórios simples.",
    
    'elegante': "Invista em tecidos mais estruturados e cortes bem definidos. Blazers, camisas, calças de alfaiataria ou saias mais alinhadas funcionam muito bem.",
    
    'classico': "Opte por peças atemporais e neutras. Cores como preto, branco, bege e azul marinho são ótimas. Roupas simples, bem ajustadas e sem muitos detalhes funcionam melhor.",
    
    'romantico': "Aposte em tecidos leves, cores suaves e detalhes delicados. Rendas, babados, estampas florais e modelagens mais fluidas combinam muito com esse estilo.",
    
    'criativo': "Aqui você pode ousar! Misture cores, estampas e combinações diferentes. Sobreposições, peças únicas e acessórios chamativos ajudam a expressar sua personalidade.",
    
    'dramatico': "Use peças marcantes e com presença. Cores fortes ou escuras, cortes estruturados e combinações mais impactantes ajudam a transmitir esse estilo.",
    
    'sexy': "Valorize o corpo de forma equilibrada. Peças mais ajustadas, decotes ou aberturas estratégicas podem ser usados, sempre priorizando conforto e confiança."
},

humores: {
    'feliz': { 
        tom: "Vibrante", 
        cores: "Amarelo, laranja, rosa ou outras cores alegres", 
        vibe: "refletir sua alegria e leveza" 
    },

    'calmo': { 
        tom: "Sereno", 
        cores: "Azul claro, verde suave, bege ou tons neutros", 
        vibe: "manter a tranquilidade e o conforto" 
    },

    'confianca': { 
        tom: "Poderoso", 
        cores: "Preto, vermelho, branco ou tons mais marcantes", 
        vibe: "transmitir segurança e presença" 
    },

    'energetico': { 
        tom: "Energético", 
        cores: "Cores vivas, contrastantes ou até neon", 
        vibe: "mostrar disposição e movimento" 
    },

    'motivado': { 
        tom: "Determinado", 
        cores: "Azul escuro, verde ou combinações equilibradas", 
        vibe: "passar foco e produtividade" 
    },

    'ousado': { 
        tom: "Ousado", 
        cores: "Preto, vinho, combinações contrastantes", 
        vibe: "chamar atenção com atitude" 
    },

    'criativo': { 
        tom: "Inovador", 
        cores: "Roxo, turquesa, combinações diferentes", 
        vibe: "expressar originalidade" 
    },

    'inspirado': { 
        tom: "Artístico", 
        cores: "Tons suaves ou misturas harmônicas", 
        vibe: "estimular ideias e criatividade" 
    },

    'sonhador': { 
        tom: "Lúdico", 
        cores: "Lilás, azul claro, branco ou tons delicados", 
        vibe: "trazer leveza e imaginação" 
    }
}
};

// FUNÇÃO PRINCIPAL
botaoGerar.addEventListener("click", function () {
    const humorValue = selectHumor.value;
const humorTexto = selectHumor.options[selectHumor.selectedIndex].text;
    const corpo = document.querySelector('input[name="corpo"]:checked')?.value;
    const estilo = document.querySelector('input[name="estilo"]:checked')?.value;

    if (!humor || !corpo || !estilo) {
        alert("Por favor, selecione corpo, estilo e humor!");
        return;
    }

    const infoCorpo = modulosLook.corpos[corpo];
    const infoEstilo = modulosLook.estilos[estilo];
    const infoHumor = modulosLook.humores[humorValue];

    // TÍTULO
    tituloLook.textContent = `${infoHumor.tom} & ${estilo.charAt(0).toUpperCase() + estilo.slice(1)}`;

    // DESCRIÇÃO
    descricaoPecas.innerText =
        `👔 PEÇAS:\n${infoEstilo}\n\n📐 CORPO:\n${infoCorpo}\n\n🎨 PALETA:\n${infoHumor.cores}`;

    // TEXTO FINAL
    textoResultado.textContent =
    `Hoje você está se sentindo ${humorTexto}, então montamos um look com energia ${infoHumor.tom.toLowerCase()} para ${infoHumor.vibe}`;
});
// Ache o evento de favoritar no seu script.js e adicione esta lógica:
function salvarNoBackend(tituloLook, pecasLook) {
    const dados = {
        titulo: tituloLook,
        pecas: pecasLook
    };

    // Faz o Front-end enviar os dados direto para o seu servidor PHP
    fetch('http://localhost:8000/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.text())
    .then(data => {
        console.log("Resposta do PHP:", data);
        alert("Sucesso! O Back-end gravou o look no SQLite!");
    })
    .catch(error => {
        console.error("Erro ao enviar para o Back-end:", error);
    });
}
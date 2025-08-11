const perguntas = {
        "1": {
    "titulo": "Desafio 1: Protótipo de Jogo com Inteligência Artificial",
    "descricao": "Curso de Jogos Digitais — Desenvolva um protótipo de jogo com pelo menos uma mecânica de gameplay (ex: combate, puzzle ou exploração) e implemente uma inteligência artificial básica para o inimigo ou NPC. A IA deve tomar decisões baseadas no comportamento do jogador. Envie um vídeo demonstrando a IA em ação e o link do projeto."
  } 
}

function carregarDesafios() {
    const container = document.getElementById("listaDesafios");
    for (const id in perguntas) {
        const pergunta = perguntas[id];
        const div = document.createElement("div");
        div.className = 'desafio';
        div.innerHTML = `
            <h3>${pergunta.titulo}</h3>
            <p>${pergunta.descricao}</p>
        `;
        container.appendChild(div);
    }
}

function exibirDesafioPrincipal() {
    const parametros = new URLSearchParams(window.location.search)

    const id = parametros.get("id");

    if (id && perguntas[id]) {
        const desafios = perguntas[id];

        document.getElementById("modalTitulo").innerHTML = desafios.titulo;
        document.getElementById("modalDescricao").innerText = desafios.descricao;

        document.getElementById("modal").style.display = "block";
    }
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.onload = () => {
    carregarDesafios();
    exibirDesafioPrincipal();
}
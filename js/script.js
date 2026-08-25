const perguntas = [
    {
        pergunta: "O que você deve fazer ao presenciar alguém sofrendo bullying?",
        opcoes: ["Ignorar e ir embora", "Apoiar a vítima e avisar um adulto", "Rir junto com os outros"],
        correta: 1
    },
    {
        pergunta: "O que caracteriza o cyberbullying?",
        opcoes: ["Praticar ofensas e agressões no ambiente online", "Fazer novos amigos em jogos", "Ajudar colegas em fóruns de estudo"],
        correta: 0
    }
];

let indiceAtual = 0;

function carregarPergunta() {
    const q = perguntas[indiceAtual];
    document.getElementById("pergunta").innerText = q.pergunta;
    
    const divOpcoes = document.getElementById("opcoes");
    divOpcoes.innerHTML = "";

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(index);
        divOpcoes.appendChild(btn);
    });
}

function verificarResposta(selecionada) {
    const resultado = document.getElementById("resultado");
    if (selecionada === perguntas[indiceAtual].correta) {
        resultado.innerText = "Correto! Empatia é fundamental.";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Incorreto. Tente refletir mais sobre o respeito ao próximo.";
        resultado.style.color = "red";
    }

    setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            resultado.innerText = "";
            carregarPergunta();
        } else {
            document.getElementById("quiz").innerHTML = "<h3>Parabéns por concluir o quiz!</h3>";
            resultado.innerText = "";
        }
    }, 2000);
}

carregarPergunta();
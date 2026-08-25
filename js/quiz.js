const perguntas = [
    {
        pergunta: "O que caracteriza o bullying no ambiente escolar?",
        opcoes: [
            "Brincadeiras pontuais entre amigos sem intenção de machucar",
            "Agressões físicas, verbais ou psicológicas repetitivas e intencionais",
            "Discordar de uma opinião durante uma aula"
        ],
        correta: 1
    },
    {
        pergunta: "Se você presenciar uma situação de bullying, qual a melhor atitude?",
        opcoes: [
            "Ignorar para não arrumar confusão",
            "Incentivar o agressor",
            "Apoiar a vítima e avisar um professor ou responsável"
        ],
        correta: 2
    }
];

let indice = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const q = perguntas[indice];
    document.getElementById("pergunta").innerText = q.pergunta;
    const divOpcoes = document.getElementById("opcoes");
    divOpcoes.innerHTML = "";

    q.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => responder(i);
        divOpcoes.appendChild(btn);
    });
}

function responder(opcaoSelecionada) {
    if (opcaoSelecionada === perguntas[indice].correta) {
        pontuacao++;
    }

    indice++;
    if (indice < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("quiz").innerHTML = `
            <h2>Quiz Finalizado!</h2>
            <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
        `;
    }
}

mostrarPergunta();
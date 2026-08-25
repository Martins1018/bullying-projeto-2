document.addEventListener("DOMContentLoaded", () => {
  const perguntas = [
    {
      pergunta: "1. O que caracteriza o bullying?",
      opcoes: [
        "Uma brincadeira pontual entre amigos.",
        "Comportamento agressivo, intencional e repetitivo sem motivação evidente.",
        "Uma discussão motivada por uma opinião diferente."
      ],
      correta: 1
    },
    {
      pergunta: "2. Qual é a melhor atitude ao presenciar uma situação de bullying?",
      opcoes: [
        "Apoiar a vítima e buscar ajuda de um adulto ou responsável.",
        "Rir junto para não virar o próximo alvo.",
        "Ignorar completamente e fingir que não viu."
      ],
      correta: 0
    },
    {
      pergunta: "3. O que é o Cyberbullying?",
      opcoes: [
        "Jogar um jogo online com regras rígidas.",
        "Praticar ofensas, humilhações ou espalhar boatos no ambiente digital.",
        "Desligar a internet durante uma conversa."
      ],
      correta: 1
    }
  ];

  let indiceAtual = 0;
  let pontuacao = 0;

  const perguntaTexto = document.getElementById("pergunta-texto");
  const opcoesDiv = document.getElementById("opcoes-container");
  const perguntaContainer = document.getElementById("pergunta-container");
  const resultadoContainer = document.getElementById("resultado-container");
  const resultadoTexto = document.getElementById("resultado-texto");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  function carregarPergunta() {
    const q = perguntas[indiceAtual];
    perguntaTexto.innerText = q.pergunta;
    opcoesDiv.innerHTML = "";

    q.opcoes.forEach((opcao, i) => {
      const btn = document.createElement("button");
      btn.className = "btn-opcao";
      btn.innerText = opcao;
      btn.onclick = () => verificarResposta(i);
      opcoesDiv.appendChild(btn);
    });
  }

  function verificarResposta(selecionada) {
    if (selecionada === perguntas[indiceAtual].correta) {
      pontuacao++;
    }
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      exibirResultado();
    }
  }

  function exibirResultado() {
    perguntaContainer.style.display = "none";
    resultadoContainer.style.display = "block";
    resultadoTexto.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
  }

  btnReiniciar.addEventListener("click", () => {
    indiceAtual = 0;
    pontuacao = 0;
    resultadoContainer.style.display = "none";
    perguntaContainer.style.display = "block";
    carregarPergunta();
  });

  // Inicia o quiz
  carregarPergunta();
});
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

function carregarPergunta() {
  const q = perguntas[indiceAtual];
  document.getElementById("pergunta-texto").innerText = q.pergunta;
  const opcoesDiv = document.getElementById("opcoes-container");
  opcoesDiv.innerHTML = "";

  q.opcoes.forEach((opcao, i) => {
    const btn = document.createElement("button");
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
  document.getElementById("pergunta-container").style.display = "none";
  document.getElementById("resultado-container").style.display = "block";
  document.getElementById("resultado-texto").innerText = 
    `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  document.getElementById("resultado-container").style.display = "none";
  document.getElementById("pergunta-container").style.display = "block";
  carregarPergunta();
}

// Inicializa o quiz
carregarPergunta();
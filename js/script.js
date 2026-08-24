document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PORTAL DE ESCUTA (SIMULADO) ---
    const formEscuta = document.getElementById('form-escuta');
    const respostaAcolhimento = document.getElementById('resposta-acolhimento');
    const fraseMotivacional = document.getElementById('frase-motivacional');

    const frases = [
        "Sua história importa e suas emoções são válidas. Respire fundo e siga em frente.",
        "Pedir ajuda não é sinal de fraqueza, mas de muita coragem.",
        "Não há problema em não estar bem o tempo todo. Seja paciente com você mesmo.",
        "Dias difíceis passam. Lembre-se de olhar ao redor e ver quem está pronto para te apoiar."
    ];

    formEscuta.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const indexSorteado = Math.floor(Math.random() * frases.length);
        fraseMotivacional.textContent = `"${frases[indexSorteado]}"`;

        respostaAcolhimento.classList.remove('hidden');
        document.getElementById('desabafo').value = '';
    });

    // --- 2. QUIZ INTERATIVO ---
    const quizData = [
        {
            question: "Quando um amigo parece triste e isolado com frequência, qual é a atitude mais adequada?",
            options: [
                "Ignorar, afinal cada um cuida de seus próprios problemas.",
                "Oferecer apoio com empatia, escutá-lo e sugerir procurar um adulto de confiança.",
                "Fazer brincadeiras para tentar forçar a pessoa a sorrir."
            ],
            correct: 1
        },
        {
            question: "Sentir ansiedade antes de uma prova importante é algo comum?",
            options: [
                "Sim, ansiedade leve faz parte, mas se for extrema é importante buscar apoio.",
                "Não, indica que a pessoa não estudou nada.",
                "Sim, e significa que a pessoa deve desistir de fazer a avaliação."
            ],
            correct: 0
        },
        {
            question: "O que caracteriza a prática da empatia na escola?",
            options: [
                "Tratar com carinho apenas os colegas mais próximos.",
                "Tentar compreender e respeitar os sentimentos e as diferenças de todos ao redor.",
                "Concordar com tudo o que os outros dizem sem expor sua opinião."
            ],
            correct: 1
        },
        {
            question: "Se você estiver passando por um momento emocionalmente difícil, quem você DEVE procurar?",
            options: [
                "Guardar tudo para si até passar.",
                "Postar desabafos apenas para desconhecidos em redes sociais.",
                "Professores, pedagogos, direção da escola, familiares ou o CVV (Ligue 188)."
            ],
            correct: 2
        },
        {
            question: "Como você pode agir para manter o ambiente escolar mais acolhedor?",
            options: [
                "Incentivando a inclusão de todos os colegas em grupos e atividades.",
                "Ignorando situações de desrespeito com os colegas de classe.",
                "Formando grupos fechados que não aceitam novos integrantes."
            ],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const quizBody = document.getElementById('quiz-body');
    const quizResult = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');

    function loadQuestion() {
        const currentData = quizData[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${currentData.question}`;
        optionsContainer.innerHTML = '';

        currentData.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.classList.add('btn-option');
            btn.textContent = option;
            btn.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedIndex) {
        if (selectedIndex === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizBody.classList.add('hidden');
        quizResult.classList.remove('hidden');
        scoreText.textContent = `Você acertou ${score} de ${quizData.length} perguntas! ${score >= 3 ? 'Parabéns pela empatia e conhecimento!' : 'Continue aprendendo sobre saúde emocional!'}`;
    }

    window.restartQuiz = function() {
        currentQuestionIndex = 0;
        score = 0;
        quizResult.classList.add('hidden');
        quizBody.classList.remove('hidden');
        loadQuestion();
    };

    loadQuestion();

    // --- 3. ACESSIBILIDADE ---
    document.getElementById('btn-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.remove('high-contrast');
    });

    document.getElementById('btn-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        document.body.classList.remove('dark-mode');
    });

    let currentFontSize = 100;

    document.getElementById('btn-font-increase').addEventListener('click', () => {
        if (currentFontSize < 130) {
            currentFontSize += 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    document.getElementById('btn-font-decrease').addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    const btnBackToTop = document.getElementById('btn-back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnBackToTop.style.display = 'block';
        } else {
            btnBackToTop.style.display = 'none';
        }
    });

    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// ==============================
// PORTAL DE ESCUTA
// ==============================

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        const mensagem = document.getElementById("mensagem");

        if (nome.trim() === "") {

            mensagem.innerHTML =
                "💙 Obrigado por compartilhar. Lembre-se de que você não está sozinho e pode procurar alguém de confiança.";

        } else {

            mensagem.innerHTML =
                "💙 " + nome +
                ", obrigado por compartilhar seus sentimentos. Você merece respeito e pode procurar alguém de confiança para conversar.";

        }

        mensagem.style.display = "block";

        formulario.reset();

    });

}


// ==============================
// QUIZ
// ==============================

function corrigirQuiz() {

    let pontos = 0;

    const respostas = document.querySelectorAll(
        "#quiz input:checked"
    );

    respostas.forEach(function(item) {

        pontos += Number(item.value);

    });


    const resultado =
        document.getElementById("resultado");


    if (respostas.length < 5) {

        resultado.innerHTML =
            "⚠️ Responda todas as 5 perguntas antes de ver o resultado.";

        return;
    }


    let mensagem = "";


    if (pontos === 5) {

        mensagem =
            "🏆 Excelente! Você acertou todas as perguntas!";

    } else if (pontos >= 3) {

        mensagem =
            "👏 Muito bem! Você teve um bom resultado.";

    } else {

        mensagem =
            "📚 Continue aprendendo! Informação e respeito ajudam a combater o bullying.";

    }


    resultado.innerHTML =
        mensagem +
        "<br><br>Você acertou " +
        pontos +
        " de 5 perguntas.";

}


// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botaoTopo =
    document.getElementById("topo");


window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});


if (botaoTopo) {

    botaoTopo.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
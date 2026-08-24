function corrigirQuiz(){


let pontos=0;


let respostas=document.querySelectorAll(
"#quiz input:checked"
);



respostas.forEach(function(item){

pontos += Number(item.value);

});



document.getElementById("resultado").innerHTML=

"Você acertou " + pontos + " de 5 perguntas!";


}

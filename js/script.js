function enviarMensagem(){

let resposta=document.getElementById("resposta");

resposta.innerHTML=
"Obrigado por compartilhar. Você merece ser ouvido. Procure um adulto de confiança quando precisar de apoio.";

}



function modoEscuro(){

document.body.classList.toggle("dark");

}



function aumentarFonte(){

document.body.style.fontSize="120%";

}



function voltarTopo(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}

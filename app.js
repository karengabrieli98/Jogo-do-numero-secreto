let listaDeNumerosSorteados = [];
let numeroSecreto = 7;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() { 
   exibirTextoNaTela('h1', 'Jogo do numero secreto');
   exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

 function  verificarChute()  {
   let chute = document.querySelector('input').value;

   if ( chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
    let mensagemTentativas =  `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativas );
    document.getElementById('reiniciar').removeAttribute('disabled');
    limparCampo();
 } else {
   if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O número secreto é menor');
   } else {
    exibirTextoNaTela('p', 'O número secreto é maior');
   }
   tentativas++;
   limparCampo();
 }
 
 }   
 

 function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
  }


function reiniciarJogo() {
   numeroSecreto;
   limparCampo();
   tentativas =1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
}


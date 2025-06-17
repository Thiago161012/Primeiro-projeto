//let titulo = document.querySelector ('h1');
//titulo.innerHTML = ('Jogo do número secreto');

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = ('Escolha um número entre 1 e 10');

// Versão resumida abaixo

let listaDeNumerosSorteados = [];

let numeroLimite = 100; 

let numeroSecreto = gerarUmNumeroAleatorio();
  

let tentativas = 1;

// Dentro do '()' atribuimos o 'exibirTextoNaTela' a tag, texto, sendo assim criamos e atribuimos a função para que ela siga os 2 parametros !!  
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
} 
// AQUI COM OS PARAMETROS ATRIBUIDOS A 'exibirTextoNaTela', executamos . acima nos criamos a função e atribuimos os parametros agora aqui nos executamos e a partir dai ela começa a funcionar!!

function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p','Escolha um número entre 1 e 100');
}
exibirMensagemInicial();
//Aqui o .value é para receber o valor digitado, seja ele em string ou number, esse codigo faz com que voce receba o VALOR, ou seja voce recebe a informação que foi escrita no campo 'input'!!
function verificarChute(){
  let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
      exibirTextoNaTela ('h1', 'Acertou');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
          exibirTextoNaTela('p', mensagemTentativas); 
           document.getElementById('reiniciar').removeAttribute('disabled');
        } else
    if (chute > numeroSecreto){
      exibirTextoNaTela('p', `O número secreto é menor que ${chute}` );
    } else {
      exibirTextoNaTela('p', `O número secreto é maior que ${chute}` );
    }
  tentativas++;  
  limparCampo();
} 
  
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}    
    
 




//Aqui criamos a função para que o gerarNumeroAleatorio de fato gere um numero aleatorio com isso é utilizado o Math.random, e para que o numer volte para nos de alguma maneira é utilizado o return
    function gerarUmNumeroAleatorio(){
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      console.log (numeroEscolhido);
      let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
        if (quantidadeDeElementosDaLista == numeroLimite) {
          listaDeNumerosSorteados = [];
        }
        


      if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
      } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        }

}


function reiniciarJogo(){
  numeroSecreto = gerarUmNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

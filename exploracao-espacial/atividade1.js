// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let expandido = false;

botoes = document.querySelectorAll('.botao-expandir-retrair');

function expandirRetrair(evt){
  let botao = evt.currentTarget;
  let paragrafo = botao.parentNode;
  paragrafo.classList.toggle('expandido');

  if(expandido===false){
    botao.innerHTML='-';
    expandido=true;
  }
  else{
    botao.innerHTML='+';
    expandido=false;
  }

}

for(let botao of botoes){
  botao.addEventListener('click', expandirRetrair);
}

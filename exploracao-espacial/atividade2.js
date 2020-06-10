// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;

let botaoNext = document.querySelector('#proximo');
let botaoPrev = document.querySelector('#anterior');
let slide = document.querySelector('#slide');

function changeImg(sum){
  indiceDaFotoCorrente+=sum;
  if(indiceDaFotoCorrente===5){
    indiceDaFotoCorrente=0;
  }
  else if(indiceDaFotoCorrente===-1){
    indiceDaFotoCorrente=4;
  }
  slide.src=(servidorDasImagens+nomesDasImagens[indiceDaFotoCorrente]);
}

function nextImg(evt){
  changeImg(1);
}

function prevImg(evt){
  changeImg(-1);
}


botaoNext.addEventListener('click', nextImg);
botaoPrev.addEventListener('click', prevImg);

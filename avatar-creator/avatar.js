//Nome

let inputNome = document.querySelector('#nome');

function alterarNome(evt){
  let nome = evt.currentTarget.value;
  let nomeAvatar = document.querySelector('#avatar-nome');
  nomeAvatar.innerHTML = nome;
}

inputNome.addEventListener('input', alterarNome);

//Cor

let inputCor = document.querySelector('#cor');

function alterarCor(evt){
  let cor = evt.currentTarget.value;

  let avatarCorpo = document.querySelector('#avatar-corpo');
  let avatarCabeca = document.querySelector('#avatar-cabeca');

  avatarCorpo.style.backgroundColor = cor;
  avatarCabeca.style.backgroundColor = cor;
}

inputCor.addEventListener('input', alterarCor);

//Cabelo

let inputCabelo = document.querySelector('#cabelo');

function alterarCabelo(evt){
  let cabelo = evt.currentTarget.value;

  let avatarCabelo = document.querySelector('#avatar-cabelo');
  avatarCabelo.src = cabelo;
}

inputCabelo.addEventListener('change', alterarCabelo);

//ExpressaoFacial

let expressoes = document.getElementsByName('expressao-facial');

function alterarExpressao(evt){
  let avatarExpressao = document.querySelector('#avatar-expressao');

  for(let expressao of expressoes){
    if(expressao.checked){
      avatarExpressao.src = expressao.value;
    }
  }
}

for(let expressao of expressoes){
  expressao.addEventListener('input', alterarExpressao);
}

//Acessorios

let inputBandana = document.getElementsByName('avatar-bandana');
let inputLacinhos = document.getElementsByName('avatar-lacinhos');
let inputOculos = document.getElementsByName('avatar-oculos');

function alterarAcessorios(evt){
  let id = evt.currentTarget.name;
  let avatarAcessorio = document.getElementById(id);

  if(evt.currentTarget.checked){
      avatarAcessorio.classList.add('visivel');
  }
  else{
      avatarAcessorio.classList.remove('visivel');
  }

}

inputBandana[0].addEventListener('input', alterarAcessorios);
inputLacinhos[0].addEventListener('input', alterarAcessorios);
inputOculos[0].addEventListener('input', alterarAcessorios);

//Salvar Avatar

let avatarEl = document.querySelector('#avatar-preview')

function baixarAvatar(evt){
  // no clique de um botão "Baixar imagem"...
  // 'avatarEl' deve conter o elemento #avatar-preview
  function downloadURI(uri, name) {
      var link = document.createElement("a");

      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      clearDynamicLink(link);
  }

  function DownloadAsImage() {
      var element = avatarEl;
      html2canvas(element).then(function (canvas) {
          var myImage = canvas.toDataURL();
          myImage.crossOrigin="anonymous";
          window.open(myImage);
          downloadURI(myImage, "Avatar.png");
      });
  }

  DownloadAsImage();

}

let botaoBaixar = document.querySelector('#baixar-avatar');

botaoBaixar.addEventListener('click', baixarAvatar);

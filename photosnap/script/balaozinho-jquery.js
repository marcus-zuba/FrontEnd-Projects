//Exercicio 1 e 3

$marcacoes = $('.marcacao');
$balaozinho = $('#balaozinho');

function mouseEntrou(evt){
  $balaozinho.html(
    ('<h2>'+$(this).data('titulo')+'</h2>'+
    '<p>'+$(this).data('conteudo')+'</p>'
  ));
}

function mouseSaiu(evt){
  $balaozinho.html('');
}

//Exercicio 4

function mouseMexeu(evt){
  $balaozinho.css('left', (evt.pageX + 'px'));
  $balaozinho.css('top', (evt.pageY + 'px'));
}

$marcacoes.hover(mouseEntrou, mouseSaiu);
$marcacoes.mousemove(mouseMexeu);


//Exercicio 5 e Desafio 2
$marcacaoAtual = $($marcacoes[0]);

function marcacaoClicada(evt){
  $marcacaoAtual = $(evt.currentTarget);
}

$marcacoes.click(marcacaoClicada);

function posicionar(evt){
  let esquerda = $('#balao-x').val();
  let cima = $('#balao-y').val();
  let largura = $('#balao-largura').val();
  let altura = $('#balao-altura').val();
  $marcacaoAtual.css('left', (esquerda+'px'));
  $marcacaoAtual.css('top', (cima+'px'));
  $marcacaoAtual.css('width', (largura+'px'));
  $marcacaoAtual.css('height', (altura+'px'));
}

$('input').keyup(posicionar);

//Desafio 3

$inputImagem = $('#imagem-usuario');

function alterarImagem(evt){
  let reader = new FileReader();
  reader.onload = function(){
    let img = reader.result;
    $('img').attr('src',img);
    $('img').css('width', '500px');
  }
  reader.readAsDataURL(evt.currentTarget.files[0]);
}

$inputImagem.change(alterarImagem);

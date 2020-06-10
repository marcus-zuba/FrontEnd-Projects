// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
function clicouNoFilme(evt){
  let filme = evt.currentTarget;
  let episodio = filme.dataset.idEpisodio;

  function atualizarDescricao(filmes){
    for(filme of filmes.results){
      if(filme.episode_id == episodio){
        $('#intro').html(filme.opening_crawl);
      }
    }
  }

  function getDescricaoFilmes(){
    return $.ajax({
      url: 'https://swapi.dev/api/films/',
      dataType: 'json',
    });
  }

  getDescricaoFilmes().done(atualizarDescricao);

}

let algarismos = ['I','II','III','IV','V','VI'];

function insereFilmeNaPágina(filme, $lista){
  $li = $('<li data-id-episodio="'+ filme.episode_id +'">' + 'Episode ' + algarismos[filme.episode_id-1] + ':' + filme.title + '</li>');
  $li.appendTo($lista);
  $li.click(clicouNoFilme);
}

function comparaFilme(a, b){
  if(a.episode_id < b.episode_id){
    return -1;
  }
  if(a.episode_id > b.episode_id){
    return 1;
  }
  return 0;
}

function sucess(resposta){
  // alert(filmes.results);
  $lista = $('#filmes > ul');
  $lista.empty();
  resposta.results.sort(comparaFilme);
  for(filme of resposta.results)
    insereFilmeNaPágina(filme, $lista);
}

function getData(){
  return $.ajax({
    url: 'https://swapi.dev/api/films/',
    dataType: 'json',
  });
}

getData().done(sucess);

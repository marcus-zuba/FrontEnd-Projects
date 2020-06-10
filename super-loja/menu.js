let itensDoMenu = document.querySelectorAll('#menu-principal li');

itensDoMenu.forEach(function(itemEl) {
  itemEl.addEventListener('click', ativaItemMenu);
});

function ativaItemMenu(e) {
  itensDoMenu.forEach(function(itemEl) {
    itemEl.classList.remove('menu-ativo');
  });
  e.currentTarget.classList.add('menu-ativo');
}

function exibirMenu(evt){
  let bodyEl = document.querySelector('body');
  bodyEl.classList.toggle('menu-visivel');
}

let botaoExibirMenu = document.querySelector('#alterna-menu');
botaoExibirMenu.addEventListener('click', exibirMenu);

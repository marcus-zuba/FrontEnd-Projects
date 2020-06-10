let tarefas = [];

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-tarefas');
function insereTarefaNaPagina(tarefa) {
  let tarefaLiEl = document.createElement('li');
  tarefaLiEl.innerHTML = tarefa.nome;
  tarefaLiEl.classList.add('item-tarefa');
  if (tarefa.marcado) {
    tarefaLiEl.classList.add('marcado');
  }

  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
}


// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);





// Exercício 2: incluir uma nova tarefa
// -----------
//
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
botaoIncluirEl.addEventListener('click', function(e) {
  let nomeInputEl = document.querySelector('#nova-tarefa-nome');

  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: 'outros',
    marcado: false
  };

  // coloca-o no vetor 'tarefas'
  tarefas.push(novaTarefa);
  // cria o <li> referente a essa tarefa e o
  // insere na página
  insereTarefaNaPagina(novaTarefa);

  // limpar o input e devolver o foco pra ele
  nomeInputEl.value = '';
  nomeInputEl.focus();
});

//Exercicio 3 e 4 - Salvar e Carregar a lista de tarefas e o nome do usuário

let botaoSalvar = document.querySelector('#salvar');
let inputNome = document.querySelector('#nome-usuario');

function salvar(evt){
  let nomeUsuario = inputNome.value;
  localStorage.setItem('nomeUsuario', nomeUsuario);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

botaoSalvar.addEventListener('click', salvar);


let botaoCarregar = document.querySelector('#carregar');

function carregar(evt){
  let nomeUsuario = localStorage.getItem('nomeUsuario');
  inputNome.value = nomeUsuario;
  containerEl.innerHTML = '';
  tarefas = JSON.parse(localStorage.getItem('tarefas'));
  for(let tarefa of tarefas){
    insereTarefaNaPagina(tarefa);
  }
}

botaoCarregar.addEventListener('click', carregar);

//Desafio 1 - Implementar a lógica de minimizar e ampliar a marca

let marca = document.querySelector('#marca');
let minimizado = sessionStorage.getItem('minimizado');

if(minimizado != null && minimizado === 'true'){
  marca.classList.add('minimizado');
}

let botaoMinimizar = document.querySelector('#minimizar');

function minimizar(evt){
  if(minimizado ==='false' || minimizado === null){
    minimizado='true';
    marca.classList.add('minimizado');
    sessionStorage.setItem('minimizado', true);
  }
  else{
    minimizado='false';
    marca.classList.remove('minimizado');
    sessionStorage.setItem('minimizado', false);
  }
}

botaoMinimizar.addEventListener('click', minimizar);

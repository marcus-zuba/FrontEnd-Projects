let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

let listaTarefas = document.querySelector('#lista-tarefas');

listaTarefas.innerHTML = '';

function insereTarefaNaPagina(tarefa){
  let trf = document.createElement('li');
  trf.innerHTML = tarefa.nome;
  let categoria = 'categoria-' + tarefa.categoria;
  trf.classList.add(categoria);
  trf.classList.add('item-tarefa');
  if(tarefa.marcado === true){
    trf.classList.add('marcado')
  }
  let primeiroFilho = listaTarefas.firstChild;
  if(primeiroFilho==null){
    listaTarefas.appendChild(trf);
  }
  else{
    listaTarefas.insertBefore(trf, primeiroFilho);
  }
}

for(let trf of tarefas){
  insereTarefaNaPagina(trf);
}

let botaoNovaTarefa = document.querySelector('#incluir-nova-tarefa');
let novaTarefaNome = document.querySelector('#nova-tarefa-nome');

function incluirNovaTarefa(){

  let categoria = document.querySelector('#nova-tarefa-categoria').value;

  let tarefa = {
    nome: novaTarefaNome.value,
    categoria: categoria,
    marcado: false
  }
  tarefas.push(tarefa);
  insereTarefaNaPagina(tarefa);
  novaTarefaNome.value='';
  novaTarefaNome.focus();
}

botaoNovaTarefa.addEventListener('click', incluirNovaTarefa);

function keyUpNovaTarefaNome(evt){
  if(evt.key==='Enter'){
    incluirNovaTarefa();
  }
}

novaTarefaNome.addEventListener('keyup', keyUpNovaTarefaNome);

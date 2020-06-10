let botaoResolver = document.querySelector('#resolver');

function resolver(){

  let A = parseFloat(document.querySelector('#coeficiente-a').value);
  let B = parseFloat(document.querySelector('#coeficiente-b').value);
  let C = parseFloat(document.querySelector('#coeficiente-c').value);

  if(A===0){
    alert('A equação digitada não é de segundo grau!')
    return 0;
  }

  let delta = document.querySelector('#resultado-delta');
  delta.value = (Math.pow(B, 2) - (4*A*C));

  let x1 = document.querySelector('#resultado-x1');
  let x2 = document.querySelector('#resultado-x2');

  if(delta.value>=0){
    x1.value = (-B+Math.sqrt(delta.value))/(2*A);
    x2.value = (-B-Math.sqrt(delta.value))/(2*A);
  }else{
    x1.value = '';
    x2.value = '';
  }

  let quantidadeRaizes = document.querySelector('#quantidade-raizes');
  if(delta.value<0){
    quantidadeRaizes.value = 0;
  }
  else if(delta.value===0){
    quantidadeRaizes.value = 1;
  }
  else{
    quantidadeRaizes.value = 2;
  }

  let orientacaoParabola = document.querySelector('#orientacao-parabola');
  if(A>0){
    orientacaoParabola.value = 'Pra cima';
  }
  else{
    orientacaoParabola.value = 'Pra baixo';
  }
  let posicaoXY = document.querySelector('#posicao-xy');
  posicaoXY.value = '('+ (-B/2*A) + ',' + (-delta.value/4*A) + ')';
}

botaoResolver.addEventListener('click',resolver);

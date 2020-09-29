//Exercicio 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
   
const idades = usuarios.map(item => item.idade);

const trabRock = usuarios.filter(item => item.empresa=='Rocketseat' && item.idade>18);

const trabGoogle = usuarios.find(item => item.empresa=='Google');

const dobro = usuarios.map(item => {
    item.idade*=2;
    return item;
});
    
const dobroMenorQue50 = dobro.filter(item => item.idade<=50);

console.log(idades);
console.log(trabRock);
console.log(trabGoogle);
console.log(dobroMenorQue50);

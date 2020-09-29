// 3.1

const arr = [1, 2, 3, 4, 5];

const a = arr.map(function(item) {
 return item + 10;
});

const b = arr.map(item => item+10);

//console.log(a);
//console.log(b);


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
 return usuario.idade;
}

const mostraIdadeMelhorada = (usuario) => usuario.idade;

//console.log(mostraIdade(usuario));
//console.log(mostraIdadeMelhorada(usuario));

// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}

const mostraUsuarioMelhorada = (nome='Diego',idade=18) => ({nome, idade});

//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));
//console.log(mostraUsuarioMelhorada(nome, idade));
//console.log(mostraUsuarioMelhorada(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

const promise = () => new Promise((resolve, reject) => resolve);
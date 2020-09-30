import axios from 'axios';

//Questão 1

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

umPorSegundo();

//Questão 2

async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch(err){
        console.log('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('marcuszubaaaslkdlakdkad');


//Questão 3

class Github{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch(err){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/dslkvmskv');
Github.getRepositories('marcus-zuba/O-Maravilhoso-Mundo-dos-Determinantes');


//Questão 4

const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    }
    catch(err){
        console.log('Usuário não existe');
    }
}

buscaUsuario('diego3g');

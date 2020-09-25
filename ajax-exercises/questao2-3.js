var minhaPromise = function(url){
    console.log(url);
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject(xhr.status);
                }
            }
        }
    });
}

function adicionarUsuario(){
    if(document.getElementsByTagName('ul')[0]!=null){
        document.body.removeChild(document.getElementsByTagName('ul')[0]);
    }
    let name = document.getElementsByName("user")[0].value;
    let url = "https://api.github.com/users/" + name + "/repos";

    let lista = document.createElement('ul');
    let carregando = document.createElement('li');
    carregando.append(document.createTextNode("Carregando..."));
    lista.append(carregando);
    document.body.append(lista);

    minhaPromise(url)
        .then(function(response){
            lista.innerHTML="";
            response.forEach(element => {
                let li = document.createElement('li');
                li.append(document.createTextNode(element.name));
                lista.append(li);                
            });
        })
        .catch(function(error){
            console.log(error);
            if (error === 404){
                lista.innerHTML="";
                let li = document.createElement('li');
                li.append(document.createTextNode('Usuário não Existe!'));
                lista.append(li);
            }
            else{
                console.log("Erro na requisição!");
            }
        });

}
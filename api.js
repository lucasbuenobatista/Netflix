function Pesquisa(e){
    e.preventDefault();

    let filme = document.querySelector('.TextoPesquisar').value;

    if(filme){
        const _url = `https://www.omdbapi.com/?s=${filme}&apikey=cb976d7c`;
        const _opções = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }

        fetch(_url, _opções)
            .then(function(response){
                //tratamento do erro

                if(!response.ok) throw new Error['Erro ao executar requisição']

                //retorno do objeto .json
                return response.json();

            })

            .then(function(data){
                console.log(data);
                let conteudo = '';
                for(let i = 1; i < data.Search.length; i++){
                    conteudo += `<li class="films">`;
                    conteudo += `<figure class="figuras">`;
                    conteudo += `<img class="img" src="${data.Search[i].Poster}"/>`;
                    conteudo += `</figure>`;
                    conteudo += `<legend class="legenda">`;
                    conteudo += `<span class="ano">${data.Search[i].Year}</span>`;
                    conteudo += `<h2 class="titulo">${data.Search[i].Title}</h2>`;
                    conteudo += `</legend>`;
                    conteudo += `</li>`;


                }

                document.getElementById("Filmes").innerHTML = conteudo

            })

    }else{
        alert("Digite um filme!")
    }


}






window.onload = () => {
    const submit = document.querySelector('.BotaoPesquisar');
    submit.addEventListener('click', Pesquisa);
}
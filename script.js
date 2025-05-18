
function getProjects(){
    //link do meu github para mostrar os projetos no site
    const urlGitHub = 'https://api.github.com/users/jamersonmychael/repos'

    //Essa variavel vai passar as informações para o html, na quarta section do corpo do site
    var loadingElement = document.getElementById('loading')

    //fetch ele vai ler e pegar as informações(repositorios) do link do meu github chamando a função showProjects
    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            console.log(response)
            showProjects(response)
        })
        .catch((e) => {
            console.log(e)
        })
}

//Essa fução vai retornar os links dos repositorios 
function showProjects(data){
    var listElement = document.getElementById('meus-projetos-list')

    //Criando um laço de repetição vai armazenar o link de cada um dos meus repositorios
    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i] ['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

//chamando a função get e carregando os links dos repositorios na aba de projetos do site
getProjects()
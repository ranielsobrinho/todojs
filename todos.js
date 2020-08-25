// Referenciando todos os elementos necessários para a nossa lista
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#input');
var buttonElement = document.querySelector('#btn');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// TODO Quando clico no botao de add o valor é renderizado
//mesmo nao tendo nada no input, trabalhar nessa parte
//função de renderização das todos
function renderTodos() {
    //removendo todo o conteúdo do listElement
    listElement.innerHTML = '';
    for (todo of todos) {
        //criando a tag li (element)
        var todoElement = document.createElement('li');
        //armazenando o texto do todo em uma variável
        var todoText = document.createTextNode(todo);

        //fazendo o link de excluisão
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('X');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(linkText);

        //fazendo append do texto do todo ao element
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        //fazendo o append do element li á lista de elementos
        //que é a nossa tag ul>li
        listElement.appendChild(todoElement);
    }
};

renderTodos();

//funcão de adicionar todos
function addTodos() {
    //pegando o valor que está dentro do input
    var todoText = inputElement.value;

    //empurrando o valor para a lista de todos
    todos.push(todoText);

    //apagando o texto atual do input
    inputElement.value = '';

    //renderizando todos
    renderTodos();
    saveToStorage();
};

//fazendo com que a função seja executada somente ao click do botão
buttonElement.onclick = addTodos;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
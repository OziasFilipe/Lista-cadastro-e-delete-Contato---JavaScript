//LocalStorage - armazenando valores na memoria do navegador 

let nome = document.getElementById('nome');
let idade = document.getElementById('idade');

function deletarLocalStorage (){

  localStorage.removeItem('nome');
  sessionStorage.removeItem('idade');
}


 
if (typeof localStorage.nome == 'undefined' ||   localStorage.nome == 'null' || localStorage.nome == ''


){

localStorage.nome = prompt('NOME: ');
sessionStorage.idade = prompt('Idade: ');

}

// SessionStorage

    // temporariamente armazenado na memoria do navegador

nome.innerText = localStorage.nome;
idade.innerText = sessionStorage.idade;
console.log("Nome: "+nome.innerText);
console.log("Idade: "+sessionStorage.idade)




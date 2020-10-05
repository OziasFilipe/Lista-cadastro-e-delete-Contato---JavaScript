/* // Exmeplo 1

let lista = ['maça','banana','uva'];


outraLista = [

   ...lista,'abacate','coco','manga'
];



for (listaOrdenada in outraLista){

console.log(outraLista[listaOrdenada]);

}
*/


var identificador = 0 ;

function  cadastrarDados(i){

    identificador = identificador + i;
    console.log(identificador);

    var corpoDaColuna = document.createElement('tr');
    
    corpoDaColuna.setAttribute('id',identificador);

  var nome_list = document.createTextNode(prompt('Digite o Nome:'));
  var sobrenome_list = document.createTextNode(prompt('Digite o sobrenome:'));
  var idade_list = document.createTextNode(prompt('Digite a idade:'));
  var sexo_list = document.createTextNode(prompt('Digite o seu sexo:'));
  var tamanhodocabelo_list = document.createTextNode(prompt('Digite tamanho do seu cabelo:'));
  var profissao_list = document.createTextNode(prompt('Digite a sua profissao:'));
  var botaoDeletar = document.createTextNode('Deletar');
  

  var linhas_nome = document.createElement('td');
  corpoDaColuna.appendChild(linhas_nome);
  linhas_nome.appendChild(nome_list);

  var linhas_sobrenome = document.createElement('td');
  corpoDaColuna.appendChild(linhas_sobrenome);
  linhas_sobrenome.appendChild(sobrenome_list);

  var linhas_idade = document.createElement('td');
  corpoDaColuna.appendChild(linhas_idade);
  linhas_idade.appendChild(idade_list);


  var linhas_sexo = document.createElement('td');
  corpoDaColuna.appendChild(linhas_sexo);
  linhas_sexo.appendChild(sexo_list);

  
  var linhas_profissao = document.createElement('td');
  corpoDaColuna.appendChild(linhas_profissao);
  linhas_profissao.appendChild(profissao_list);


  var linhas_cabelo = document.createElement('td');
  corpoDaColuna.appendChild(linhas_cabelo);
  linhas_cabelo.appendChild(tamanhodocabelo_list);

  

  var linhas_option = document.createElement('button');
  corpoDaColuna.appendChild(linhas_option).setAttribute("class","btn btn-danger");

  corpoDaColuna.appendChild(linhas_option).setAttribute("onclick",`deletarDados(${identificador})`);
  linhas_option.appendChild(botaoDeletar);




 corpo.appendChild(corpoDaColuna);
 

  //nome.innerText = prompt('Digite o Nome:');
  //sobrenome.innerText = prompt('Digite o sobrenome:');
  //idade.innerText = prompt('Digite a idade:');
  //sexo.innerText = prompt('Digite o seu sexo:');
  //profissao.innerText = prompt('Digite sua profissao:');
  //tamanhodecabelo.innerText = prompt('Digite tamanho do seu cabelo:');

}

function deletarDados(u){
  alert('teste delete');

  let itemApagar = document.getElementById(u);
  

  
  corpo.removeChild(itemApagar);

  
  console.log(u);
}





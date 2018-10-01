 //Dados inciais do projeto
 var dados =[
  {
    "id": 1,
    "date": "2018-09-01T13:27:57.334Z",
    "storeId": 1,
    "storeName": "Dito Savassi",
    "score": 5
  },
  {
    "id": 2,
    "date": "2018-09-01T13:27:57.334Z",
    "storeId": 2,
    "storeName": "Dito Rio de Janeiro",
    "score": 4
  },
  {
    "id": 3,
    "date": "2018-09-02T13:27:57.334Z",
    "storeId": 1,
    "storeName": "Dito Savassi",
    "score": 5
  },
  {
    "id": 4,
    "date": "2018-09-3T13:27:57.334Z",
    "storeId": 1,
    "storeName": "Dito Savassi",
    "score": 3
  },
  {
    "id": 5,
    "date": "2018-09-03T13:27:57.334Z",
    "storeId": 1,
    "storeName": "Dito Savassi",
    "score": 2
  },
]; 


//Feita a tabela 1 pois a mesma conta so com 2 linhas 

var totaal = [{
  "satisfacao": 0,
  "avaliacao" :dados.length,
  "excelente" :0,
  "bom": 0,
  "razoavel": 0,
  "ruim" :0,
  "horrivel":0,
}
];


//Variaveis que sao contadores
let i, j,a;

//Checando por meio do for quantas lojas a diferentes nos dados iniciais
let cont = 0;

for(j = 1; j<dados.length; j++){
  if(dados[j-1].storeId==dados[j].storeId){
  }
  else{
    cont = cont+1;
  }  
}

//Criaçao dos arrays para serem alocados logo em seguida
let lojas = new Array();
let lojasTodas = new Array();

/*For disposto a preencher o array lojas que logo apos de ser preenchido e puxado para o array lojasTodas
  se tornando apenas um elemnto do mesmo(Um array dentro de outro)*/

for(a = 0; a<cont; a++){

  var excelente = 0, bom = 0, razoavel = 0, ruim = 0, horrivel = 0, avaliacao = 0; satisfacao = 0;
  let lojas = new Array();
  for(i = 0; i<dados.length; i++){
    

    if(dados[i].storeId == a+1){
      avaliacao = avaliacao+1;
      lojas.storeName = dados[i].storeName;
      lojas.avaliacao = avaliacao;

      if(dados[i].score == 1){
        horrivel = horrivel + 1;
        lojas.horrivel = horrivel;
        lojas.ruim = ruim;
        lojas.razoavel = razoavel;
        lojas.bom = bom;
        lojas.excelente = excelente;
      }

      if(dados[i].score == 2){
        ruim = ruim + 1;
        lojas.horrivel = horrivel;
        lojas.ruim = ruim;
        lojas.razoavel = razoavel;
        lojas.bom = bom;
        lojas.excelente = excelente;
      }

      if(dados[i].score == 3){
        razoavel = razoavel+1;
        lojas.horrivel = horrivel;
        lojas.ruim = ruim;
        lojas.razoavel = razoavel;
        lojas.bom = bom;
        lojas.excelente = excelente;
      }

      if(dados[i].score == 4){
        bom = bom+1;
        lojas.horrivel = horrivel;
        lojas.ruim = ruim;
        lojas.razoavel = razoavel;
        lojas.bom = bom;
        lojas.excelente = excelente;
        
      }

      if(dados[i].score == 5){
        excelente = excelente+1;
        lojas.excelente = excelente;
        lojas.horrivel = horrivel;
        lojas.ruim = ruim;
        lojas.razoavel = razoavel;
        lojas.bom = bom;

      }
    }
}
//Trecho responsavel por puxar um array para outro
lojasTodas.push(lojas);
}

/*Preenchendo a sessão satisfaçao que precisava antes dos outros dados 
  (a mesma também e setada para não ter mais que 2 valores depois da virgula)*/

for(let g = 0; g <cont; g++){
  lojasTodas[g].satisfacao = parseFloat((((lojasTodas[g].excelente + lojasTodas[g].bom)/lojasTodas[g].avaliacao)*100).toFixed(2)) + "%";
}

//Coloca valores gerais em outro array para a primeira tabela
for(let g = 0; g <cont; g++){
  
  totaal[0].excelente = totaal[0].excelente + lojasTodas[g].excelente;
  totaal[0].bom = totaal[0].bom + lojasTodas[g].bom;
  totaal[0].razoavel = totaal[0].razoavel + lojasTodas[g].razoavel;
  totaal[0].ruim = totaal[0].ruim+ lojasTodas[g].ruim;
  totaal[0].horrivel = totaal[0].horrivel + lojasTodas[g].horrivel;
}

totaal[0].satisfacao = ((totaal[0].excelente +  totaal[0].bom)/totaal[0].avaliacao)*100;

//Passando os dados para porcentagem e não deixando ter mais de 2 casas decimais
let aux;

aux = totaal[0].excelente/dados.length*100;
totaal[0].excelente = parseFloat(aux.toFixed(2));
aux= totaal[0].bom /dados.length*100;
totaal[0].bom = parseFloat(aux.toFixed(2));
aux = totaal[0].razoavel /dados.length*100;
totaal[0].razoavel = parseFloat(aux.toFixed(2));
aux= totaal[0].ruim/dados.length*100;
totaal[0].ruim = parseFloat(aux.toFixed(2));
aux = totaal[0].horrivel/dados.length*100;
totaal[0].horrivel = parseFloat(aux.toFixed(2));





//Uso de angular para enviar os dados para a primeira tabela
var avalia = angular.module('avalia', []);

avalia.controller('Index' , function(){
    var vm = this;

    vm.total = [
      {
      "satisfacao":totaal[0].satisfacao + "%",
      "avaliacao" :totaal[0].avaliacao,
      "excelente" :totaal[0].excelente + "%",
      "bom": totaal[0].bom + "%",
      "razoavel": totaal[0].razoavel + "%",
      "ruim" :totaal[0].ruim + "%",
      "horrivel":totaal[0].horrivel + "%",
    },
    ];

});

/*Como não foi conseguido mandar o arrray lojasTodas por angular o mesmo foi passado normalmente*/
for(let k = 0; k < cont; k++){
  let insereEL = document.querySelector('#insere');
  let table = document.querySelector('#tab');
  var tr = table.insertRow(insereEL); 
  tr.innerHTML +="<td><a>  "+(k+1)+" "+"</a>"+ lojasTodas[k].storeName +"</td>" + "<td>"+ lojasTodas[k].satisfacao +"</td>" +
                "<td>"+ lojasTodas[k].avaliacao +"</td>" + "<td>"+ lojasTodas[k].excelente +"</td>" +
                "<td>"+ lojasTodas[k].bom +"</td>" + "<td>"+ lojasTodas[k].razoavel +"</td>" + 
                "<td>"+ lojasTodas[k].ruim +"</td>" + "<td>"+ lojasTodas[k].horrivel +"</td>" +
                "<td><spam>+</spam></td>";
}

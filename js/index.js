 
 //Dados recebidos no inicio do projeto  
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
  }
]; 

//Como o sistema e pequeno ja aloquei os arrays
lojas = [
{
  "storeName": "",
  "satisfacao": 0,
  "avaliacao" :0,
  "excelente" :0,
  "bom": 0,
  "razoavel": 0,
  "ruim" :0,
  "horrivel":0,
},

{
  "storeName": "",
  "satisfacao": 0,
  "avaliacao" :0,
  "excelente" :0,
  "bom": 0,
  "razoavel": 0,
  "ruim" :0,
  "horrivel":0,
}
];


/*Transferindo dados da base de dados recebida ao começo do projeto para o array ja
  organizado de acordo com os dados necessarios */
let i;
for(i = 0; i<dados.length; i++){

  if(dados[i].storeId == 1){
    lojas[0].storeName = "Dito Savassi";
    lojas[0].avaliacao = lojas[0].avaliacao+1;
    if(dados[i].score == 1){
      lojas[0].horrivel = lojas[0].horrivel + 1;
    }
    if(dados[i].score == 2){
      lojas[0].ruim = lojas[0].ruim + 1;
    }
    if(dados[i].score == 3){
      lojas[0].razoavel = lojas[0].razoavel + 1;
    }
    if(dados[i].score == 4){
      lojas[0].bom = lojas[0].bom + 1;
    }
    if(dados[i].score == 5){
      lojas[0].excelente = lojas[0].excelente + 1;
    }
  }

  if(dados[i].storeId == 2){
    lojas[1].storeName = "Dito Rio de Janeiro";
    lojas[1].avaliacao = lojas[1].avaliacao+1;
    if(dados[i].score == 1){
      lojas[1].horrivel = lojas[1].horrivel + 1;
    }
    if(dados[i].score == 2){
      lojas[1].ruim = lojas[1].ruim + 1;
    }
    if(dados[i].score == 3){
      lojas[1].razoavel = lojas[1].razoavel + 1;
    }
    if(dados[i].score == 4){
      lojas[1].bom = lojas[1].bom + 1;
    }
    if(dados[i].score == 5){
      lojas[1].excelente = lojas[1].excelente + 1;
    }
  }
  
}

lojas[0].satisfacao = (lojas[0].bom + lojas[0].excelente)/lojas[0].avaliacao;
lojas[1].satisfacao = (lojas[1].bom + lojas[1].excelente)/lojas[1].avaliacao;


//Uso de angular para enviar os dados para a tabela
var avalia = angular.module('avalia', []);

avalia.controller('Index' , function(){
    var vm = this;

    vm.loja=[
      {
        "storeName": lojas[0].storeName,
        "satisfacao": lojas[0].satisfacao,
        "avaliacao" :lojas[0].avaliacao,
        "excelente" :lojas[0].excelente,
        "bom": lojas[0].bom,
        "razoavel": lojas[0].razoavel,
        "ruim" :lojas[0].ruim,
        "horrivel":lojas[0].horrivel,
      },
      
      {
        "storeName": lojas[1].storeName,
        "satisfacao": lojas[1].satisfacao,
        "avaliacao" :lojas[1].avaliacao,
        "excelente" :lojas[1].excelente,
        "bom": lojas[1].bom,
        "razoavel": lojas[1].razoavel,
        "ruim" :lojas[1].ruim,
        "horrivel":lojas[1].horrivel,
      },
    ];

});
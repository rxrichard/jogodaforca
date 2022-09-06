let palavraSecretaCategoria;
let palavraSecretaSorteada;
let lista = [];
let tentativas = 6;
const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "EQUADOR",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "CHILE",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "INDONESIA",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "MALDIVAS",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "INGLATERRA",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "GROELANDIA",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "UZBEQUISTAO",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "INDONESIA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "CREGUENHEM",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "BICICLETA",
    categoria: "TRANSPORTE",
  }),
  (palavra012 = {
    nome: "LANCHA",
    categoria: "TRANSPORTE",
  }),
  (palavra013 = {
    nome: "NAVIO",
    categoria: "TRANSPORTE",
  }),
  (palavra014 = {
    nome: "TELEFERICO",
    categoria: "TRANSPORTE",
  }),
  (palavra015 = {
    nome: "MOTOCICLETA",
    categoria: "TRANSPORTE",
  }),
  (palavra016 = {
    nome: "BARCO",
    categoria: "TRANSPORTE",
  }),
  (palavra017 = {
    nome: "AERONAVE",
    categoria: "TRANSPORTE",
  }),
  (palavra018 = {
    nome: "TREM",
    categoria: "TRANSPORTE",
  }),
  (palavra019 = {
    nome: "CAIAQUE",
    categoria: "TRANSPORTE",
  }),
  (palavra020 = {
    nome: "FUNICULAR",
    categoria: "TRANSPORTE",
  }),
  (palavra021 = {
    nome: "XICARA",
    categoria: "OBJETOS",
  }),
  (palavra022 = {
    nome: "MOEDA",
    categoria: "OBJETOS",
  }),
  (palavra023 = {
    nome: "ESPARADRAPO",
    categoria: "OBJETOS",
  }),
  (palavra024 = {
    nome: "SINO",
    categoria: "OBJETOS",
  }),
  (palavra025 = {
    nome: "CHUVEIRO",
    categoria: "OBJETOS",
  }),
  (palavra026 = {
    nome: "TAMBORETE",
    categoria: "OBJETOS",
  }),
  (palavra027 = {
    nome: "LAMPADA",
    categoria: "OBJETOS",
  }),
  (palavra028 = {
    nome: "BOCAL",
    categoria: "OBJETOS",
  }),
  (palavra029 = {
    nome: "CORTINA",
    categoria: "OBJETOS",
  }),
  (palavra030 = {
    nome: "LAPIS",
    categoria: "OBJETOS",
  }),
  (palavra031 = {
    nome: "MELANCIA",
    categoria: "ALIMENTOS",
  }),
  (palavra032 = {
    nome: "AMENDOIM",
    categoria: "ALIMENTOS",
  }),
  (palavra033 = {
    nome: "ESFIRRA",
    categoria: "ALIMENTOS",
  }),
  (palavra034 = {
    nome: "GOROROBA",
    categoria: "ALIMENTOS",
  }),
  (palavra035 = {
    nome: "JANTAR",
    categoria: "ALIMENTOS",
  }),
  (palavra036 = {
    nome: "SABOROSO",
    categoria: "ALIMENTOS",
  }),
  (palavra037 = {
    nome: "DESJEJUM",
    categoria: "ALIMENTOS",
  }),
  (palavra038 = {
    nome: "MASTIGAR",
    categoria: "ALIMENTOS",
  }),
  (palavra039 = {
    nome: "ENGOLIR",
    categoria: "ALIMENTOS",
  }),
  (palavra040 = {
    nome: "DOCERIA",
    categoria: "ALIMENTOS",
  }),
  (palavra040 = {
    nome: "DRAGAO",
    categoria: "ANIMAIS",
  }),
  (palavra041 = {
    nome: "GALINHA",
    categoria: "ANIMAIS",
  }),
  (palavra042 = {
    nome: "PAVAO",
    categoria: "ANIMAIS",
  }),
  (palavra043 = {
    nome: "CAMELO",
    categoria: "ANIMAIS",
  }),
  (palavra044 = {
    nome: "PERU",
    categoria: "ANIMAIS",
  }),
  (palavra045 = {
    nome: "ZEBRA",
    categoria: "ANIMAIS",
  }),
  (palavra046 = {
    nome: "DROMEDARIO",
    categoria: "ANIMAIS",
  }),
  (palavra047 = {
    nome: "CALANGO",
    categoria: "ANIMAIS",
  }),
  (palavra048 = {
    nome: "SAGUI",
    categoria: "ANIMAIS",
  }),
  (palavra049 = {
    nome: "LAGARTIXA",
    categoria: "ANIMAIS",
  }),
  (palavra050 = {
    nome: "HIPOPOTAMO",
    categoria: "ANIMAIS",
  }),
  (palavra051 = {
    nome: "A ERA DO GELO",
    categoria: "TV E CINEMA",
  }),
  (palavra052 = {
    nome: "HOMEM ARANHA",
    categoria: "TV E CINEMA",
  }),
  (palavra053 = {
    nome: "CASA MONSTRO",
    categoria: "TV E CINEMA",
  }),
  (palavra054 = {
    nome: "TELA QUENTE",
    categoria: "TV E CINEMA",
  }),
  (palavra055 = {
    nome: "STRANGER THINGS",
    categoria: "TV E CINEMA",
  }),
  (palavra056 = {
    nome: "O REI DO GADO",
    categoria: "TV E CINEMA",
  }),
  (palavra057 = {
    nome: "MULHER MARAVILHA",
    categoria: "TV E CINEMA",
  }),
  (palavra058 = {
    nome: "O INCRIVEL HULK",
    categoria: "TV E CINEMA",
  }),
  (palavra059 = {
    nome: "BOB ESPONJA",
    categoria: "TV E CINEMA",
  }),
  (palavra060 = {
    nome: "PANICO NA TV",
    categoria: "TV E CINEMA",
  }),
];

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length); //qtd de itens da lista

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
  console.log(
    `Palavra Sorteada: ${palavraSecretaSorteada}, Categoria: ${palavraSecretaCategoria}`
  );
}

montarPalavra();
function montarPalavra() {
  const categoria = document.querySelector("#category"); //pega a categoria
  categoria.innerHTML = palavraSecretaCategoria; //add a categoria

  const palavraTela = document.querySelector("#secret_word"); // pega a palavra sorteada
  palavraTela.innerHTML = "";

  //adiciona a quantidade de letras que a palavra sorteada tem na tela
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (lista[i] == undefined) {
      if (palavraSecretaSorteada[i] == " ") {
        lista[i] = " ";
        palavraTela.innerHTML + `<div class="espaco">${lista[i]}</div>`;
      } else {
        lista[i] = "&nbsp;";
        palavraTela.innerHTML =
          palavraTela.innerHTML + `<div class="letters">${lista[i]}</div>`;
      }
    } else {
      if (palavraSecretaSorteada[i] == " ") {
        lista[i] = " ";
        palavraTela.innerHTML + `<div class="espaco">${lista[i]}</div>`;
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML + `<div class="letters">${lista[i]}</div>`;
      }
    }
  }
  console.log(lista)
}
function verificaLetraEscolhida(letra) {
  document.getElementById(`key-${letra}`).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra(`key-${letra}`,false);
    comparaListas(letra);

    montarPalavra();
  }
}

function mudarStyleLetra(key,condicao) {
  if(condicao == false){
    document.getElementById(key).style.backgroundColor = "#FF1911";
    document.getElementById(key).style.color = "#fff";
  }else{
    document.getElementById(key).style.backgroundColor = "#229A00";
    document.getElementById(key).style.color = "#fff";
  }

}

function comparaListas(letra) {
  const position = palavraSecretaSorteada.indexOf(letra);
  //diminui quando a pessoa erra
  if (position < 0) {
    tentativas--;
    console.log(tentativas);
    //aparecer imagem
    carregaImagemForca();
    if (tentativas == 0) {
      abreModal(
        "Ops, você perdeu",
        `Não foi dessa vez. A palavra secreta era ${palavraSecretaSorteada}`
      );
    }
  } else {
    mudarStyleLetra(`key-${letra}`,true);
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        lista[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != lista[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    tentativas = 0;
    abreModal("PARABÉNS", `Você acertou`);
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca01.png')";
      break;
    case 4:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca02.png')";
      break;
    case 3:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca03.png')";
      break;
    case 2:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca04.png')";
      break;
    case 1:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca05.png')";
      break;
    case 0:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca06.png')";

      break;
    default:
      document.getElementById("image").style.backgroundImage =
        "url('./img/forca.png')";

      break;
  }
}

function abreModal(title, msg) {
  let modalTitle = document.querySelector("#TituloModalCentralizado");
  modalTitle.innerText = title;

  let modalMsg = document.querySelector("#modalBody");
  modalMsg.innerHTML = msg;

  $("#myModal").modal({
    show: true,
  });
}

function reiniciar() {
  location.reload();
}

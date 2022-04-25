let colorsDiv = document.getElementsByClassName('color');
let colors = ['black', 'yellow', 'red', 'blue']
for (let i = 0; i < colors.length; i++) {
    colorsDiv[i].style.backgroundColor = colors[i];
    colorsDiv[i].addEventListener('click', selecionarCorEvento);
}

function criarQuadrado() {

    let pixelBoard = document.getElementById('pixel-board');

    for (let linha = 0; linha < 5; linha++) {
        let divLinha = document.createElement('div')

        for (let coluna = 0; coluna < 5; coluna++) {
            let pixels = document.createElement('div');
            divLinha.appendChild(pixels);
            pixels.className = "pixel";
            pixels.addEventListener('click', selecionarPixelEvento);
        }

        pixelBoard.appendChild(divLinha);
    }

}
criarQuadrado();

function selecionarCorEvento(e) {     //seleciona a cor da paleta de cores
    let elementoAtual = obterElementoSelecionado();
    removerClasseSelecionado(elementoAtual);

    let elementoClicado = e.target;
    adicionarClasseSelecionado(elementoClicado);
}

function obterElementoSelecionado() {  //seleciona o elemento
    return document.getElementsByClassName('color selected')[0];
}

function adicionarClasseSelecionado(elemento) { //adiciona classe selected ao elemento 
    elemento.classList.add('selected');
}

function removerClasseSelecionado(elemento) { //remove a classe anterior selected para dar lugar ao novo elemento de cor escolhido
    elemento.classList.remove('selected');
}

// requisito 8


function selecionarPixelEvento(e) { // seleciona o pixel desejado dentro do quadro (pixel-board) de pixels

    /*
    obter a COR selecionada (elemento)
    extrair a cor
    obter o elemento clicado
    colocar a cor no elemento clicado
    */

    let corSelecionadaDoElemento = obterElementoSelecionado();
    let cor = extrairCor(corSelecionadaDoElemento);
    let elementoClicado = e.target;
    preencherComCor(elementoClicado, cor);

}


function extrairCor(elemento) {
    return elemento.style.backgroundColor;

}


function preencherComCor(elemento, cor) {
    elemento.style.backgroundColor = cor;
}

// requisito 9 criar botao
let sectionBotao = document.getElementById('sectionInput');
let botaoLimpar = document.createElement('button');
botaoLimpar.id = 'clear-board';
botaoLimpar.innerText = 'Limpar';
botaoLimpar.addEventListener('click', pintarDeBranco);
sectionBotao.appendChild(botaoLimpar);

function pintarDeBranco(e) {
    let pixels = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }
}

//requisito 10

let idInput = document.getElementById('sectionInput');
let buttonVQV = document.createElement('button');

function configurarButtonVQV() {

    buttonVQV.id = 'generate-board';
    buttonVQV.innerText = 'VQV';
    idInput.appendChild(buttonVQV);

    buttonVQV.addEventListener('click', () => {
        let input = document.getElementById('board-size');
        if (input.value === '') {
            alert('Board inválido!');
        }
    })
}configurarButtonVQV();

// 
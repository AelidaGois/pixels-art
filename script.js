let colorsDiv = document.getElementsByClassName('color');
let colors = ['black','yellow','red','blue']
for (let i = 0; i < colors.length; i++){
    colorsDiv[i].style.backgroundColor = colors[i];
    colorsDiv[i].addEventListener('click',selecionarCor);
}

function criarQuadrado() {

    let pixelBoard = document.getElementById('pixel-board');

    for (let linha = 0; linha < 5; linha++) {
        let divLinha = document.createElement('div')

        for (let coluna = 0; coluna < 5; coluna++) {
            let pixels = document.createElement('div');
            divLinha.appendChild(pixels);
            pixels.className = "pixel";
        }

        pixelBoard.appendChild(divLinha);
    }

}
criarQuadrado();

// function obterCor (elemento){

//     return elemento.style.backgroundColor;
// }

function selecionarCor (e){
let elementoAtual = obterElementoSelecionado();
removerClasseSelecionado(elementoAtual);

let elementoClicado = e.target;
adicionarClasseSelecionado(elementoClicado);
}

function obterElementoSelecionado (){
return document.getElementsByClassName('color selected')[0];
}

function adicionarClasseSelecionado (elemento){
    elemento.classList.add('selected');
}

function removerClasseSelecionado (elemento){
    elemento.classList.remove('selected');
}


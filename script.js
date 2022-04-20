window.onload = document.getElementsByClassName('color')[0].style.background = "black";
window.onload = document.getElementsByClassName('color')[1].style.background = "yellow";
window.onload = document.getElementsByClassName('color')[2].style.background = "red";
window.onload = document.getElementsByClassName('color')[3].style.background = "blue";


function criarQuadrado() {

    let pixelBoard = document.getElementById('pixel-board');
    
for (let linha = 0; linha < 5; linha++){
    let divLinha = document.createElement('div')
    pixelBoard.appendChild(divLinha);
    for(let coluna = 0; coluna < 5; coluna++){
        let pixels = document.createElement('div');
        divLinha.appendChild(pixels);
        pixels.className= "pixel";
    }


    




}

}
criarQuadrado()

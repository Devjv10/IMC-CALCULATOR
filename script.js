
 
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let resultado = document.querySelector('#resultado');
let botao  = document.querySelector('#enviar');
let mensagem = document.querySelector('#mensagem');

function imc() {

    mensagem.textContent = "";  

    if (!peso.value || !altura.value) {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    let pesoNum = parseFloat(peso.value);
    let alturaNum = parseFloat(altura.value);

    // se digitar em cm, converte
    if (alturaNum > 3) {
        alturaNum = alturaNum / 100;
    }

    let resultadoIMC = pesoNum / (alturaNum ** 2);

    resultado.value = resultadoIMC.toFixed(2);

    if (resultadoIMC < 18.5) {
        mensagem.textContent = "Abaixo do peso";
    }
    else if (resultadoIMC <= 24.9) {
        mensagem.textContent = "Peso normal";
    }
    else if (resultadoIMC <= 29.9) {
        mensagem.textContent = "Sobrepeso";
    }
    else if (resultadoIMC <= 34.9) {
        mensagem.textContent = "Obesidade grau 1";
    }
    else if (resultadoIMC <= 39.9) {
        mensagem.textContent = "Obesidade grau 2";
    }
    else {
        mensagem.textContent = "Obesidade grau 3";
    }
}

botao.addEventListener('click', imc);

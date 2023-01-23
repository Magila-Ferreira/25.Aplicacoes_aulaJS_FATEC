/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let botao = document.getElementById("botao");

let minhaData = document.getElementById("umaData");
let erroData = document.getElementById("erroData");

let minhaData2 = document.getElementById("data2");
let erroData2 = document.getElementById("erroData2");

let meuNome = document.getElementById("nome");
let erroNome = document.getElementById("erroNome");

let mensagemErroData = "Por favor, corrija este campo";
let mensagemErroNome = "Preencha o campo nome";

botao.addEventListener("click", verificar);
botao.onclick = verificar();

minhaData.addEventListener("blur", function() {
    verificaData(minhaData.value, erroData, mensagemErroData);
});

minhaData.onblur = verificaData(minhaData.value, erroData, mensagemErroData);

minhaData2.addEventListener("blur", function() {
    verificaData(minhaData2.value, erroData2, mensagemErroData);
});

meuNome.addEventListener("blur", function() {
    verificaCampo(meuNome.value, erroNome, mensagemErroNome);
});

function verificaData(valor, campoErro, mensagemErro) {
    if (! dataValida(valor)) {
        campoErro.innerHTML = mensagemErroData;
    } else {
        campoErro.innerHTML = "";
    }
}

function verificar() {
    verificaData(minhaData.value, erroData, mensagemErroData);
    verificaData(minhaData2.value, erroData2, mensagemErroData);
    
    if (campoVazio(meuNome.value)) {
        erroNome.innerHTML = mensagemErroNome;
    }
}

// innerHTML = .textContent
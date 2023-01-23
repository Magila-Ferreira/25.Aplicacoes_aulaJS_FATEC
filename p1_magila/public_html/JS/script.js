/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let q3 = document.getElementById("q3");
let q5 = document.getElementById("q5");

let num = 5;  // 0+1+2+3+4+5 = 15;
let soma = 0;
let palavra = "dois";
let vetorPalavra = palavra;

let somaQ3 = questaoTres(num);
let questao5 = invertePalavra(palavra);


// QUESTÃO 1
//alert("Aluna: Mágila Morgana S. Ferreira - QUESTÃO 1");

// QUESTÃO 3
function questaoTres(num) {
    for (let cont = 0; cont <= num; cont++) {
        soma = soma + cont;
    }

    q3.innerHTML = soma;
    return soma;
}

// QUESTÃO 5
// dois
function invertePalavra(palavra) {


    q5.innerHTML = vetorPalavra;
    return vetorPalavra;
}

// QUESTÃO 7
const nome = document.getElementById("nome");
const telefone = document.getElementById("tel");
const bt = document.getElementById("btQuestao7");
const formUser = document.getElementById("formUser");
const exibeNome = document.getElementById("exibeNome");
const exibeTel = document.getElementById("exibeTel");

bt.addEventListener("click", function (e) {
    e.preventDefault();
    validaCampos(nome.value, telefone.value);
})

function validaCampos(nome, telefone) {
    if (nome && telefone) {
        exibeNome.innerHTML = nome;
        exibeTel.textContent = telefone;
        formUser.style.display = "inline-block";
        limpaCampos();
    } else {
        alert("Preencha todos os campos!");
        formUser.style.display = "none";
    }
}

function limpaCampos() {
    nome.value = "";
    telefone.value = "";
}


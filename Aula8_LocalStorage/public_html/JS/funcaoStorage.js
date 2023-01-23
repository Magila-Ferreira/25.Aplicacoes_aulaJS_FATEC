/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function gravar(nome, valorOriginal) {
    if (window.localStorage) {
        let valor = JSON.stringify(valorOriginal);
        window.localStorage.setItem(nome, valor);
    } else {
        alert("Local Storage indisponível");
    }
}
function ler(nome) {
    if (window.localStorage) {
        let valor = window.localStorage.getItem(nome);
        valorOriginal = JSON.parse(valor);
        return valorOriginal;
    } else {
        alert("Local Storage indisponível");
    }
    return null;
}
function inicio() {
    let matriz = [
        ["João", 23, 1.80],
        ["Maria", 18, 1.75]
    ];
    let ano = 2022;
    let diaDaSemana = "sexta-feira";

    gravar("PessoaTeste", matriz);
    gravar("AnoAtual", ano);
    gravar("diaSemana", diaDaSemana);
}
function fim() {
    let m = ler("PessoaTeste");
    let a = ler("AnoAtual");
    let d = ler("diaSemana");

    alert("Ano atual " + a + "\nDia da semana " + d);
}
function teste() {
    let entrada = "Fatec Bragança Paulista, Bragança Paulista, SP";
    let saida;

    // Verificar se o localStorage está disponível
    if (window.localStorage) {
        alert("Local Storage disponível");
    } else {
        alert("Local Storage indisponível");
    }

//  Grava no LocalStorage
    window.localStorage.setItem("testeJS", entrada);

//  Ler do localStorage
    saida = window.localStorage.getItem("testeJS");
    window.alert("Resultado \n" + saida);

    saida = saida.replace("Bragança Paulista", "BP");
    window.alert("Resultado \n" + saida);

    let vetor = ["FATEC BRAGANÇA PAULISTA", "BRAGANÇA PAULISTA", "SP"];
    window.localStorage.setItem("teste2", vetor);
    alert(vetor[0]);
    let vetor2 = window.localStorage.getItem("teste2");
    alert(vetor2);

// Guardar um vetor no localStorage
    window.localStorage.setItem("teste3", JSON.stringify(vetor));

// Recuperar vetor do local Storage
    let vetor3 = JSON.parse(window.localStorage.getItem("teste3"));
    alert(vetor3);
}
/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Verifica qualquer campo
function verificaCampo(valor, campoErro, mensagemErro) {
    if (campoVazio(valor)) {
        campoErro.innerHTML = mensagemErro;        
    } else {
        campoErro.innerHTML = "";
    }
}

// Verifica um campo de preenchimento obrigatório
function campoVazio(valor) {
    return valor.length !== 0 ? false : true;
}

// Função genérica: não modifica o HTML
function dataValida(data) {
    let dia, mes, ano, hora, minuto, segundo;
    let vetorData;
    let tamanho = data.length;

    if (data === null) {
        return false;
    }
    if (tamanho < 8) {
        return false;
    }
    // Comando procura por símbolos em um vetor
    data = data.replaceAll("-", "/");
    vetorData = data.split("/");

    if (vetorData[0].length === 4) {
        dia = vetorData[2];
        mes = vetorData[1];
        ano = vetorData[0];
    } else {
        dia = vetorData[0];
        mes = vetorData[1];
        ano = vetorData[2];
    }

    if (dia.length > 2) {
        let vetorDia = dia.split("T");
        dia = vetorDia[0];
        let vetorHora = vetorDia[1].split(":");
        hora = vetorHora[0];
        minuto = vetorHora[1];
    }

    if (mes < 1 || mes > 12) {
        return false;
    }

    if (ano < 100) {
        return false;
    }

    // Dois iguais "Não são exatamente iguais, devido ao tipo String / int"
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        // meses com 31 dias
        if (dia <= 31) {
            return true;
        } else {
            return false;
        }
    } else {
        if (mes != 2) {
            if (dia <= 30) {
                return true;
            } else {
                return false;
            }
        } else {
            // verificação exclusiva para fevereiro
            if (((ano % 400) === 0)
                    ||
                    ((ano % 100 !== 0) && (ano % 4 === 0))
                    ) {
                // ano bissextou ou fev com 29 dias
                if (dia <= 29) {
                    return true;
                } else {
                    return false;
                }
            } else {
                // fev tem no maximo 28 dias
                if (dia <= 28) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    return true;
}

// dataValida("31/02/2022") --> False

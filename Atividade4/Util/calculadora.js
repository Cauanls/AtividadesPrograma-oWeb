
/**
 * Soma dois numeros inteiros
 * @param {Number} n1 um numero inteiro
 * @param {Number} n2 um numero inteiro
 * @returns {Number} a soma entre a e b
 */

function somar(n1, n2){
    return n1 + n2;
}

function sub(n1, n2){
    return n1 - n2;
}

function multi(n1, n2){
    return n1 * n2;
}

function div(n1, n2){
    return n1 / n2;
}

module.exports = {
    somar,
    sub,
    multi,
    div
}
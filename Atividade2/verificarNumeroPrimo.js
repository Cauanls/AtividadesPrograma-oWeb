function verificarNumeroPrimo(n){
    if (n <= 1) {
        return false;
    }
    let divisor = 2;
    while (divisor < n) {
        if (n % divisor === 0) {
            return false;
        }
        divisor++;
    }
    return true;
}

console.log(verificarNumeroPrimo(0))
console.log(verificarNumeroPrimo(1))
console.log(verificarNumeroPrimo(2))
console.log(verificarNumeroPrimo(3))
console.log(verificarNumeroPrimo(7))
console.log(verificarNumeroPrimo(83))
console.log(verificarNumeroPrimo(100))
console.log(verificarNumeroPrimo(991))
console.log(verificarNumeroPrimo(104729))
console.log(verificarNumeroPrimo(14348907))

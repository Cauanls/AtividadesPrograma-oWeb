function  transporMatriz(A){
let matrizString = "";
for(let i = 0; i < A.lenght; i++){
    for(let j = 0; j < A[i].lenght; j++){
        matrizString += A[i][j] + "";
    }
    matrizString += '\n';
}
console.log(matrizString);

}

const A = [
        [1,2],
        [3,4],
        [5,6],
    ];

transporMatriz(A);
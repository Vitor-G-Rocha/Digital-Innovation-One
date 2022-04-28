//Troca pares por zero 
function pares(vet) {
    if(vet.length === 0) return -1;
    for(let i=0; i<vet.length; i++) {
        if(isEven(vet[i]) && vet[i] !== 0) {
            vet[i] = 0;
        }
    }
    return `Output -> [${vet}]`;
}

function isEven(num){
    if(num % 2 === 0) return true;
}

console.log(pares([1, 3, 4, 6, 80, 33, 23, 90]))
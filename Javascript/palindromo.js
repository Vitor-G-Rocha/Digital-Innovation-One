function verificaPalindromo(palavra) {    
    palavra = palavra.replace(/ /g, "").toLowerCase();
    let vet = [];
    vet = palavra;
    let j = vet.length - 1;
    for(let i = 0; i < vet.length; i++){        
        if(vet[i] === vet[j]){
            console.log(`${i}: [${vet[i]} , ${vet[j]}] \u2713`)
        } else {
            console.log(`${i}: [${vet[i]} , ${vet[j]}] \u2716`)
            return `Não é palindromo!`
        }         
        j--;  
        if(i == j) return `É um palindromo!`;     
    }    
}

console.log(verificaPalindromo('Lava cleiton esse aval'))
function operadores(x, y){ //Funcao com 2 parametros
    let igualdade;
    let maiorMenor10;
    let maiorMenor20
    if(x === y){          //Verifica se ambos sao iguais
        igualdade = "são";
    } else {
        igualdade = "não são";
    }
    if(x + y < 10){     //Se e menor que 10
        maiorMenor10 = "menor";
        maiorMenor20 = "menor";
    } else {
        if(x + y < 20){
            maiorMenor10 = "maior";
            maiorMenor20 = "menor";
        } else {
            maiorMenor10 = "maior";
            maiorMenor20 = "maior";
        } 
    }    
    console.log(`Os números ${x} e ${y} ${igualdade} iguais. Sua soma é ${x + y}, que é ${maiorMenor10} que 10 e ${maiorMenor20} que 20`);
}

operadores(1, 2)
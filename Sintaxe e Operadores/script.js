function verificaNum(num1, num2){

    num1 == num2 ? console.log('São numeros iguais') : console.log('São números diferentes');

    var soma = num1 + num2;

    if (soma > 10 &&  soma < 20){
        console.log("A soma dos dois numeros é maior que 10 e menor que 20");
    }else if(soma < 10){
        console.log("A soma dos dois numeros é menor que 10");
    }else {
        console.log("A soma dos dois numeros é maior que 20");
    }
}

verificaNum(1, 1);
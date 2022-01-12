// var jogador1 = 0;
// var jogador2 = 0;
// var placar;

// jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores inválidos');

// if(jogador1 > 0 && jogador2 == 0){
//     console.log('Jogador 1 marcou ponto');
//     placar = jogador1 > jogador2;
// } else if( jogador2 > 0 && jogador1 ==0){
//     console.log('jogador 2 marcou ponto');
// }


// switch(placar){
//     case placar = jogador1 > jogador2:
//         console.log('jogador 1 ganhou');
//         break;
//     case placar = jogador2 > jogador1:
//         console.log('jogador 2 ganhou');
//         break;
//     default:
//         console.log('ninguem ganhou ainda');
//         break;
// }


//Lacos de repeticao

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5' ];
let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
};

//FOR
// for(let count = 0; count < array.length; count++){
//     console.log(array[count]);
// }

//FOR/IN repeticao enquanto houver arquivo para ser lido no arquivo
// for(let i in array){
//     console.log(i);
// }

//com objeto
// for(i in object){
//     console.log(i);
// }

//FOR/OF - FUNCIONA COMO UMA REPETICAO A PARTIR DE UM VALOR, nao funciona com objetos
// for(i of array){
//     console.log(i);
// }

//While

var a = 0;
while ( a < 10 ) {
    a++;
    console.log(a)
}


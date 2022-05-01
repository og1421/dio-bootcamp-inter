const meuArray = [30, 3, 40, 5, 223, 2049, 96156 ,651];

function valoresUnicos (arr){
    const mySet = new Set (arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
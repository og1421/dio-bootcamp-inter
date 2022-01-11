let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];

// forEach - ira iterar dentro do array
array.forEach(
    function(item, index) {
        //console.log(item, index);
    }
)

//PUSH - irá adicionar um item no final do array
array.push(3);


//POP - Remove um item do final do array
array.pop();

//SHIFT - Remove um item do começo da fila
array.shift();

//UnSHIFT - adiciona um item no começo da fila
array.unshift(3121);

//indexOF - retorna o indece de um item no array
array.indexOf(true);
//console.log(array);

//splice - remove ou substitui um item pelo indice
array.splice(0,3);

//slice - retorna uma parte do aarray ja existente

let object = { String: 'string', Number: 1, Boolean: true, array: ['array1']};
console.log(object)

var stringq = object.String;
console.log(stringq);
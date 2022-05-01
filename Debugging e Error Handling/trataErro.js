function validaArray(arr, num){

    try{
        if(!arr && !num) throw new ReferenceError("Não foram inseridos parametros");

        if(typeof arr !== 'object') throw new TypeError("Array não é do tipo object");
    
        if(typeof num !== 'number') throw new TypeError("Array não é do tipo numero");
    
        if(arr.length != num) throw new RangeError("Tamanho de array invalido");

        return arr;
    }catch (e){
        if (e instanceof ReferenceError){
            console.log("este é um erro de Referencia");
            console.log(e.message);
        }else if (e instanceof TypeError){
            console.log("este é um erro de typeError");
            console.log(e.message);
        }else if (e instanceof RangeError){
            console.log("este é um erro de RangeError");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray());
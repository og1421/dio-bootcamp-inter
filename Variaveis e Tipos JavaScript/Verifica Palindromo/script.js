
//Solucao somente para uma palavra, sem espaço
function verificaPalindromo (string) {
    if(!string) return "insira uma string";

    return string.split("").reverse().join("") === string;
}

//Solucao 2
function verifica2 (string){
    if(!string) return "insira uma string";

    for (let i = 0; i < string.lenght/2; i++){
        if(string[i] !== string[string.lenght - 1 - i]){
            return;
        }

        return true;
    }
}
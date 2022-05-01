function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: "Orlando",
    idade: 25
};

const pessoa2 = {
    nome: "Carlos",
    idade:"21"
}

console.log(calculaIdade.call(pessoa1, 15));
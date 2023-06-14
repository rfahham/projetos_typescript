// Constructor dentro do POO
// Classe que inicia uma instância de uma pessoa informando os parâmetros nome e idade
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        // Chamando o método
        this.apresentar();
    }
    //Método
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", e eu tenho ").concat(this.idade, " anos "));
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('Ricardo Fahham', 52);
pessoa1;

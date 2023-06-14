// Constructor dentro do POO

// Classe que inicia uma instância de uma pessoa informando os parâmetros nome e idade

class Pessoa {
    private nome: string
    private idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        // Chamando o método
        this.apresentar()
    }

    //Método
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, e eu tenho ${this.idade} anos `);
    }

}

const pessoa1 =  new Pessoa('Ricardo Fahham', 52)
pessoa1



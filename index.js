
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = this.tipoDeAtaque(tipo);
    }

    //função que identifica o tipo da classe e retorna o atributo "ataque"
    tipoDeAtaque(tipo){
        switch(tipo){
            case "guerreiro":
                return "espada!"
            case "mago":
                return "magia!"
            case "ninja":
                return "shuriken!"
            case "monge":
                return "artes marciais!"       
            case "arqueiro":
                return "arco e flecha!"
            case "paladino":
                return "maça!"   
                
        }
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let herois = [
    {nome: "João", idade: 18, tipo: "guerreiro"},
    {nome: "Maria", idade: 17, tipo: "mago"},
    {nome: "Gustavo", idade: 19, tipo: "ninja"},
    {nome: "Eduarda", idade: 16, tipo: "monge"},
    {nome: "Tobias", idade: 23, tipo: "arqueiro"},
    {nome: "Paulinha", idade: 36, tipo: "paladino"}
]


herois.forEach(function(heroi){
    let novoHero = new Heroi(heroi.nome, heroi.idade, heroi.tipo)
    novoHero.atacar();
})
abstract class Animal {
    private nome: string;

    constructor (nome: string) {
        this.nome = nome
    }

    public conversar(a2: Animal) {
        if (this.constructor === a2.constructor) {
        console.log("Ambos conversaram, e se entenderam.")
        }
        else {
            console.log("Ambos conversaram, porém, não se entenderam.")
        }
    }
}

class Cachorro extends Animal {



}

class Gato extends Animal {

    

}

let animal1 = new Gato ("Meg")
let animal2 = new Cachorro ("Mel")
let animal3 = new Gato ("Petra")

animal1.conversar(animal2)
animal3.conversar(animal1)
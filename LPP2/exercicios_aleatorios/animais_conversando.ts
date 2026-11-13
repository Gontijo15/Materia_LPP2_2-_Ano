abstract class Animal {
    nome: string;
    raca: string;

    constructor (nome: string, raca: string) {
        this.nome = nome
        this.raca = raca
    }

    abstract fazerSom(): void
}

class Cachorro extends Animal {
    
    fazerSom(): void {
        console.log("Au Au!")
    }
}

class Gato extends Animal {
    
    fazerSom(): void {
        console.log("Miaaauu?")
    }
}

class Rato extends Animal {
    
    fazerSom(): void {
            console.log("Quiik quiiiiik!!!")
        }
}

class Lagarto extends Animal {
    
    fazerSom(): void {
        console.log("Geca, geca, geca...")
    }
}

class Raposa extends Animal {
    
    fazerSom(): void {
        console.log("Rrrrrrrrrrr!... RRRRRRRRRR!")
    }

conversa (a1: Animal, a2: Animal) {
    if (a1.constructor.name === a2.constructor.name)
}
}

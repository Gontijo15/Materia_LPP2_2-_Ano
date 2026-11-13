class Animal {
    nome: string;

    constructor (n: string) {
        this.nome = n;
    }

    public fazSom(): any {
        console.log(`${this.nome}: Aqui o bichinho faz barulho, mas que bichinho eu sou?`);
    }
}

class Cachorro extends Animal {
    tutor: string;

    constructor (n: string, t: string) {
        super(n);
        this.tutor = t;
    }

    public fazSom(): any {
        console.log(`${this.nome}: Woof, Woof!`);
    }
}

class Gato extends Animal {
    tutor: string;

    constructor (n: string, t: string) {
        super(n);
        this.tutor = t;
    }

    public fazSom(): any {
        console.log(`${this.nome}: MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU... :)`);
    }
}

class Selvagem extends Animal {
    especie: string;

    constructor (n: string, e: string) {
        super(n);
        this.especie = e;
    } 
}

let ani = new Animal('Ani, O Mau');
ani.fazSom();

let catioro = new Cachorro('Catioro', 'Hermenegildo, O Bom');
catioro.fazSom();

let gatito = new Gato('Gatito', 'Zoroastra, O Neutro');
gatito.fazSom();

let bichito = new Selvagem('Bichito', 'Pulma');
bichito.fazSom();
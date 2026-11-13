class Cachorro {
    private _name: string;
    private _race: string

    constructor(
        name: string,
        race: string
    ){
        this._name = name
        this._race = race
    }

    getName(): string {
        return this._name;
    }

    getRace(): string {
        return this._race;
    }

    latir(): any {
        console.log("O cachorro ", this.getName(), " da raça ", this.getRace(), " latiu")
    } 
}

class Pessoa {
    private _name: string;
    private _age: number

    constructor(
        name: string,
        age: number
    ) {
        this._name = name
        this._age = age
    }

    getName(): string {
        return this._name;
    }

    getAge(): number {
        return this._age;
    }

    apertaMao(p1: Pessoa, p2: Pessoa): any {
        console.log(p1.getName(), " aperta a mão de ", p2.getName())
    }
}
let catioro = new Cachorro("Pedro Lucas", "Somelier de Hentais")
let pessoa1 = new Pessoa("Nero", 19)
let pessoa2 = new Pessoa("Leo", 27)
catioro.latir()
pessoa1.apertaMao(pessoa1, pessoa2)
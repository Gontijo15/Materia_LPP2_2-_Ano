class Funcionaria {
    private _name: string;
    private _cargo: string;
    private _salario: number;

    constructor(
        name: string,
        cargo: string,
        salario: number
        ) {
            this._name = name;

            this._cargo = cargo;

            this._salario = salario;

            if (salario < 3000)
            {
                this._salario = 3000;
            }
            else if (salario > 20000)  
            {
                this._salario = 20000;
            }
    }
    
    getSalario(): number {
        return this._salario;
    }

    getName(): string {
        return this._name;
    }

    getCargo(): string {
        return this._cargo;
    }

    setSalario(newsalario: number) {
         if (newsalario < 3000)
            {
                this._salario = 3000;
            }
            else if (newsalario > 20000)  
            {
                this._salario = 20000;
            }
            else {
                this._salario = newsalario;
            }
    }
}

class Gerente {
    
    public Gerenciar (f1: Funcionaria, f2: Funcionaria, f3: Funcionaria)
    {
        f1.setSalario(f1.getSalario() + (f1.getSalario() * 0.1));

        console.log(f1.getName() + " é " + f1.getCargo() + " e ganha " + f1.getSalario())

        f2.setSalario(f2.getSalario() + (f2.getSalario() * 0.1));

        console.log(f2.getName() + " é " + f2.getCargo() + " e ganha " + f2.getSalario())

        f3.setSalario(f3.getSalario() + (f3.getSalario() * 0.1));

        console.log(f3.getName() + " é " + f3.getCargo() + " e ganha " + f3.getSalario())
    }
}

let pessoa1 = new Funcionaria ("Carla", "Recepcionista", 5000);
console.log(pessoa1.getSalario(), pessoa1.getName(), pessoa1.getCargo())
pessoa1.setSalario(2000)
console.log(pessoa1.getSalario())
let pessoa2 = new Funcionaria ("Rogéria", "Secretária", 6500);
let pessoa3 = new Funcionaria ("Luciana", "Faxineira", 1);
let pessoa4 = new Funcionaria ("Maria", "Secretária", 3250000);
let pessoa5 = new Funcionaria ("Júlia", "Recepcionista", 15500);
let pessoa6 = new Gerente ();

pessoa6.Gerenciar(pessoa1, pessoa2, pessoa3)
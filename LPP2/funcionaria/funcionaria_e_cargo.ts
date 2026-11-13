class Funcionaria {
    private _nome: string;
    private _salario: number;

    constructor (nome: string, salario: number) {
        this._nome = nome;
        if (salario < 3000) {
            salario = 3000
            this._salario = salario;
        }    
        else {
            this._salario = salario;
        }
    }
    getNome(): string {
        return this._nome;
    }
    getSalario(): number {
        return this._salario;
    }

    setSalario(newsalario: number) {
        if (newsalario < 3000)
        {
            this._salario = 3000;
        }
        else {
            this._salario = newsalario;
        }
    }
}

class Cargo {
    private _descricao: string;
    private _salarioBase: number;

    constructor (descricao: string, salarioBase: Funcionaria) {
        this._descricao = descricao
        this._salarioBase = salarioBase.getSalario()

        if (descricao == "Gerente") {
            this._descricao = "Gerente: Responsável por gerenciar o campus."
            salarioBase.setSalario(salarioBase.getSalario() + salarioBase.getSalario())
            this._salarioBase = salarioBase.getSalario()
        }
        else if (descricao == "Docente") {
            this._descricao = "Docente: Responsável por vigiar e auxiliar os alunos."
            salarioBase.setSalario(salarioBase.getSalario() + (salarioBase.getSalario() * 0.3))
            this._salarioBase = salarioBase.getSalario()
        }
        else if (descricao == "Prefessor") {
            this._descricao = "Professor: Responsável por dar as aulas e ensinamentos para os alunos."
            salarioBase.setSalario(salarioBase.getSalario() + (salarioBase.getSalario() * 0.5))
            this._salarioBase = salarioBase.getSalario()
        }
        else if (descricao == "Faxineiro") {
            this._descricao = "Faxineiro: Responsável pela limpeza e conservação do campus."
            salarioBase.setSalario(salarioBase.getSalario() + (salarioBase.getSalario() * 0.15))
            this._salarioBase = salarioBase.getSalario()
        }
    }
}
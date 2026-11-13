class HollowKnight {
    readonly nome: string;
    private deusdaescuridao: string;

    constructor (nome: string, deusdaescuridao: string) {
        this.nome = nome;
        this.deusdaescuridao = deusdaescuridao;
    }
    
    private setSenhoraDaCeda(): any {
        this.deusdaescuridao = "Senhor(a) da Seda" //ajeitei o "seda" pra vc
    }

    private getDeusDaEscuridao(): any {
        return this.deusdaescuridao
    }

    guarana(senha: string): any {
        if(senha == "GUARANA") {
            this.setSenhoraDaCeda();
            console.log(this.getDeusDaEscuridao())
            return console.log("HEDALE ITS REAL");
            
        }
        else {
            return console.log("CHAAAAAAAAAAAAAAAW");
        }
    }

}

let cavaleirinho = new HollowKnight("Sérjão Foguetes", "Deus da Redstone")
console.log(cavaleirinho.nome)
cavaleirinho.guarana("GUARANA")
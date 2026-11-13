function getRandomInt(min: number, max: number): number 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Jogador
{
    nome: string;
    pv: number = 100 //Pontos de vida

    constructor(nome: string, acerto: number)
    {
        this.nome = nome;
    }

    batalha(desafiante1: Jogador, desafiante2: Jogador) {
        while (true) {
            
        }
    }
}

class Guerreiro extends Jogador
{
    furia: number = 0;

    critou(): boolean
    {
        let critico = false;
        
        let numeroAleatorio = getRandomInt(1, 20);

        if(numeroAleatorio + this.furia < 20)
        {
            this.furia += 1
        }
        else
        {
            critico = true
            this.furia = 0
        }
        return critico
    }

    causarDano(danoVida: number, alvo: Jogador): void
    {
        let numeroAleatorio = getRandomInt(10, 15);
        danoVida = numeroAleatorio;

        if(this.critou())
        {
            danoVida += danoVida
        }

        alvo.pv -= danoVida;
        if(alvo.pv <= 0)
        {
            console.log(alvo.nome, ' desmaiou');
        }
    }
}

class Arqueiro extends Jogador
{
    mirou: boolean = false;

    mira()
    {
        this.mirou = true;
    }

    causarDano(danoVida: number, alvo: Jogador): void
    {
        let numeroAleatorio = getRandomInt(5, 20);
        danoVida = numeroAleatorio;

        if(this.mirou)
        {
            danoVida += (danoVida/2);
            this.mirou = false;
        }

        alvo.pv -= danoVida;

        if(alvo.pv <= 0)
        {
            console.log(alvo.nome, ' desmaiou');
        }
    }
}

// HTML
// <p id="status">Escolha seu caminho...</p>
// <button id="btn-esquerda">⬅️ Ir para Esquerda</button>
// <button id="btn-direita">➡️ Ir para Direita</button>

// TYPE SCRIPT
// const statusTexto = document.getElementById('status') as HTMLParagraphElement;
// const btnEsquerda = document.getElementById('btn-esquerda') as HTMLButtonElement;
// const btnDireita = document.getElementById('btn-direita') as HTMLButtonElement;

// // Função única que decide o que acontece com base na escolha
// function escolherCaminho(opcao: 'esquerda' | 'direita'): void {
//   if (opcao === 'esquerda') {
//     statusTexto.textContent = "🏃 Você encontrou um tesouro na floresta!";
//   } else {
//     statusTexto.textContent = "🐉 Um dragão apareceu no castelo!";
//   }
  
//   // Desativa os botões após a escolha
//   btnEsquerda.disabled = true;
//   btnDireita.disabled = true;
// }

// // Associa os cliques à função de decisão
// btnEsquerda.addEventListener('click', () => escolherCaminho('esquerda'));
// btnDireita.addEventListener('click', () => escolherCaminho('direita'));
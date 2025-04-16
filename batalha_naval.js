/**Estou preparando meu projeto para as alterações */

const teclado = require('prompt-sync')({ sigint: true });
let jogoFinalizado = false;

while (!jogoFinalizado) {
    let tabuleiro = [];
    const quantidadeBarcos = 10;
    const quantidadeJogadas = 12;
    let quantidadeTiros = 12;
    let pontos = 0;

    for (let i = 0; i < 5; i++) {
        tabuleiro[i] = [];
        for (let j = 0; j < 5; j++) {
            tabuleiro[i][j] = false;  
        }
    }

    for (let i = 0; i < quantidadeBarcos; i++) {
        let posX = Math.floor(Math.random() * 5);  
        let posY = Math.floor(Math.random() * 5);  
        tabuleiro[posX][posY] = true;  
    }

    for (let i = 0; i < quantidadeJogadas; i++) {
        let jogadaX = parseInt(teclado("Digite a posição do tiro em X (0-4): "));
        let jogadaY = parseInt(teclado("Digite a posição do tiro em Y (0-4): "));

        if (isNaN(jogadaX) || isNaN(jogadaY) || jogadaX < 0 || jogadaX > 4 || jogadaY < 0 || jogadaY > 4) {
            console.log("Digite números válidos entre 0 e 4 para as posições.");
            i--;  
            continue;
        }

        quantidadeTiros--;  

        if (tabuleiro[jogadaX][jogadaY] === true) {
            console.log("  BARCO AFUNDADO ");
            tabuleiro[jogadaX][jogadaY] = false;  
            pontos += 10;  
        } else {
            console.log("  TIRO NA ÁGUA ");
        }

        console.log(`Quantidade de tiros restantes: ${quantidadeTiros}`);
        console.log(`Pontuação: ${pontos}`);
        console.log("------------------------------");

        if (quantidadeTiros === 0) {
            console.log(" JOGO FINALIZADO! ");
            if (pontos > 60) {
                console.log("  PARABÉNS, VOCÊ VENCEU ");
            } else {
                console.log("  QUE PENA, VOCÊ PERDEU ");
            }

            let continuar = teclado("Digite 'n' para jogar novamente ou qualquer outra tecla para sair: ");
            if (continuar.toLowerCase() === 'n') {
                jogoFinalizado = false;
                break;  
            } else {
                jogoFinalizado = true;
                break;  
            }
        }
    }
}
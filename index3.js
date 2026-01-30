
let resultado = calculadoradeRankeadas(87, 5);
console.log(resultado);

function calculadoradeRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
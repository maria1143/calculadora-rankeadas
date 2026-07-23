
// Por isso usamos o módulo readline para ler entrada do usuário pelo terminal.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o número de vitórias ao usuário.
rl.question('Digite o número de vitórias do herói: ', (vitoriasInput) => {
  // Pergunta o número de derrotas ao usuário.
  rl.question('Digite o número de derrotas do herói: ', (derrotasInput) => {
    // Converte as respostas de texto em números.
    const vitorias = Number(vitoriasInput);
    const derrotas = Number(derrotasInput);

    // Validação simples: verifica se as entradas são números válidos.
    if (Number.isNaN(vitorias) || Number.isNaN(derrotas)) {
      console.log('Por favor, digite números válidos para vitórias e derrotas.');
      rl.close();
      return;
    }

    // Chama a função que determina o nível com base nas vitórias.
    const resultado = calculadoradeRankeadas(vitorias, derrotas);
    console.log(resultado);
    rl.close();
  });
});

function calculadoradeRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Determine o nível usando apenas a quantidade de vitórias.
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna uma frase com saldo de vitórias e nível.
  return `O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}`;
}

// Regras de classificação:
// Se vitórias for menor ou igual a 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal
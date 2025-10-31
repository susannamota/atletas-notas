
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularNotas() {
  
  return atletas.map(function (atleta) {
    let notasOrganizadas = atleta.notas.sort((a, b) => a - b)
    let notasValidas = notasOrganizadas.slice(1,4)
    let somaNotas = notasValidas.reduce(function (acumulador, itemAtual) {
      return acumulador + itemAtual
    }, 0)
    let media = somaNotas / notasValidas.length;

    console.log(`Nome: ${atleta.nome}`);
    console.log(`Notas Ordenadas: ${notasOrganizadas}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`_________________________________`)
    
  })
}
calcularNotas(); 
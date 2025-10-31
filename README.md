*Este projeto faz parte do programa DEVstart*


## Sistema de Cálculo de Notas de Atletas

O sistema processa notas de atletas, organizando-as em ordem crescente, descartando a maior e a menor nota, e calculando a média das notas restantes. 

 **Funcionalidades**

Ordenação de notas: Organiza as notas de cada atleta em ordem crescente
Filtragem de notas válidas: Descarta a maior e a menor nota
Cálculo de média: Calcula a média aritmética das notas válidas
Apresentação formatada: Exibe os resultados de forma clara e organizada

**Tecnologias Utilizadas**

JavaScript ES6+
Array methods: map(), sort(), slice(), reduce()
Template literals para formatação de strings


**Exemplo de Saída**

Nome: Cesar Abascal
Notas Ordenadas: 7.88,8.42,9.34,10,10
Média: 9.25
_________________________________

🔧 Código Javascript

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


**Melhorias Futuras**
Adicionar funcionalidade de ranking


Desenvolvido como parte de um exercício de lógica de programação com JavaScript, Por **Susanna Mota**.

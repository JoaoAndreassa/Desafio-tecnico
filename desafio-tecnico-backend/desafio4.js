const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};


const total = Object.values(estados).reduce((soma, valor) => soma + valor, 0);


console.log("Percentual de representação por estado:\n");

for (const [estado, valor] of Object.entries(estados)) {
  const percentual = (valor / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

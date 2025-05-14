const fs = require('fs');
const path = require('path');


const dados = JSON.parse(fs.readFileSync(path.join(__dirname, '../dados/dados.json'), 'utf8'));


const diasComFaturamento = dados.filter(dia => dia.valor > 0);


const valores = diasComFaturamento.map(dia => dia.valor);


const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);


const soma = valores.reduce((acc, val) => acc + val, 0);
const media = soma / valores.length;


const diasAcimaDaMedia = valores.filter(valor => valor > media).length;

// Resultados
console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);

function pertenceFibonacci(numero) {
  let a = 0, b = 1;

  while (b < numero) {
    [a, b] = [b, a + b];
  }

  return b === numero || numero === 0;
}

// Teste:
const numero = 21;

if (pertenceFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
}

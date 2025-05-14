function inverterString(str) {
  let resultado = '';


  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}


const original = "Vamos Juntos ser Target Sistemas?";

const invertida = inverterString(original);

console.log("String original:", original);
console.log("String invertida:", invertida);

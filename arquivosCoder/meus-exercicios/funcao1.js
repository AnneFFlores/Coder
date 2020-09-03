//Função sem retorno
function imprimirSoma(a, b) {
  console.log("a soma de a + b é igual: ", a + b);
}
imprimirSoma(2, 4)

//Função com retorno,já declarando valor para um parametro:
function soma(a, b = 4) {
  return a + b
}
console.log(soma(2));

console.log(soma(2, 4));

//Função com retorno,já declarando valor para DOIS parametros:

// function soma(a = 3, b = 5) {
//   return b + a
// }
// console.log(soma(2, 1));
// console.log(soma());
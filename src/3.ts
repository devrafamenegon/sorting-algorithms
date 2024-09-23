/* 
  Função buscaLinear(A, k)
    Entrada: 
        A - um vetor de n elementos
        k - o valor que estamos procurando
    Saída: 
        índice do elemento k em A, ou -1 se k não for encontrado
    
    Para i de 0 até n - 1 faça:
        Se A[i] == k então:
            Retorne i  // Retorna o índice onde o valor k foi encontrado
    Fim para
    
    Retorne -1  // Retorna -1 se k não for encontrado em A
  Fim função
*/

function buscaLinear(arr: number[], k: number): number {
  // Percorre o array de 0 até o último índice
  for (let i = 0; i < arr.length; i++) {
    // Verifica se o elemento atual é igual a k
    if (arr[i] === k) {
      return i; // Retorna o índice se encontrar o valor
    }
  }
  // Se não encontrar, retorna -1
  return -1;
}

function exercise3() {
  // Exemplo de uso:
  const array = [10, 23, 45, 70, 80];
  const valorProcurado = 45;
  const resultado = buscaLinear(array, valorProcurado);

  if (resultado !== -1) {
    console.log(`Valor encontrado no índice ${resultado}`);
  } else {
    console.log("Valor não encontrado");
  }
}

exercise3();

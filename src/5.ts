/* 
  Função shellSort(A)
    Entrada: 
        A - um array de n elementos
    Saída: 
        A ordenado
    
    n = tamanho do array A
    gap = n // 2  // Define o intervalo inicial
    
    Enquanto gap > 0 faça:
        Para i de gap até n - 1 faça:
            temp = A[i]
            j = i
            
            // Move os elementos de A[0...i-gap] que são maiores que temp
            Enquanto j >= gap e A[j - gap] > temp faça:
                A[j] = A[j - gap]
                j = j - gap
            
            A[j] = temp  // Insere temp na posição correta
        Fim para
        
        gap = gap // 2  // Reduz o gap pela metade
    Fim enquanto
  Fim função
*/

function shellSort(arr: number[]): number[] {
  let n = arr.length;

  // Inicialmente, o gap é metade do tamanho do array
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Realiza o Insertion Sort para os elementos com base no gap
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j: number;

      // Move os elementos que estão `gap` posições à frente
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      // Coloca o temp (valor original de arr[i]) na posição correta
      arr[j] = temp;
    }
  }

  return arr;
}

function exercise5() {
  // Exemplo de uso
  const array = [12, 34, 54, 2, 3];
  console.log("Array original:", array);
  const arrayOrdenado = shellSort(array);
  console.log("Array ordenado:", arrayOrdenado);
}

exercise5();

/* 
  O Shellsort melhora o Insertion Sort ao reduzir o número de comparações e movimentações de elementos distantes no array. 
  Dependendo da sequência de gaps escolhida, ele pode ser significativamente mais eficiente que o Insertion Sort tradicional, 
  especialmente para conjuntos de dados de tamanho médio.
*/

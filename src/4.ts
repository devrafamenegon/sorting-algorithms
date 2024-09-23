/* 
  Função insertionSort(A)
    Entrada: 
        A - um array de n elementos
    Saída: 
        A ordenado
    
    Para i de 1 até n - 1 faça:
        chave = A[i]  // Elemento atual a ser inserido
        j = i - 1

        // Move os elementos de A[0...i-1] que são maiores que chave
        // para uma posição à frente de sua posição atual
        Enquanto j >= 0 e A[j] > chave faça:
            A[j + 1] = A[j]
            j = j - 1
        
        // Insere a chave na posição correta
        A[j + 1] = chave
    Fim para
  Fim função
*/

function insertionSort(arr: number[]): number[] {
  // Percorre o array a partir do segundo elemento
  for (let i = 1; i < arr.length; i++) {
    const chave = arr[i]; // Elemento atual a ser inserido
    let j = i - 1;

    // Move os elementos arr[0...i-1] que são maiores que a chave
    // para uma posição à frente de sua posição atual
    while (j >= 0 && arr[j] > chave) {
      arr[j + 1] = arr[j]; // Move o elemento para a direita
      j--;
    }

    // Insere a chave na posição correta
    arr[j + 1] = chave;
  }

  // Retorna o array ordenado
  return arr;
}

function exercise4() {
  // Exemplo de uso:
  const array = [4, 3, 5, 1];
  console.log("Array original:", array);
  const arrayOrdenado = insertionSort(array);
  console.log("Array ordenado:", arrayOrdenado);
}

exercise4();

/* 
  O Insertion Sort é simples e eficiente para pequenos conjuntos de dados, ou quando a lista está quase ordenada. 
  No entanto, sua complexidade O(n²) para grandes conjuntos de dados o torna menos eficiente comparado a outros algoritmos 
  como Merge Sort ou Quick Sort.
*/

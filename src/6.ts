/* 
  Função selectionSort(A)
    Entrada: 
        A - um array de n elementos
    Saída: 
        A ordenado
    
    Para i de 0 até n - 2 faça:
        minIndex = i  // Assume que o menor elemento está na posição i
        
        // Encontra o menor elemento na parte não ordenada
        Para j de i + 1 até n - 1 faça:
            Se A[j] < A[minIndex] então
                minIndex = j  // Atualiza o índice do menor elemento
            Fim se
        Fim para
        
        // Troca o menor elemento encontrado com A[i]
        Se minIndex ≠ i então
            Troca A[i] com A[minIndex]
        Fim se
    Fim para
  Fim função
*/

function selectionSort(arr: number[]): number[] {
  let n = arr.length;

  // Percorre todo o array
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume que o menor valor é o primeiro elemento

    // Encontra o menor valor na parte não ordenada do array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Atualiza o índice do menor elemento
      }
    }

    // Se o menor valor não for o valor atual de arr[i], faz a troca
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Troca os valores
    }
  }

  return arr; // Retorna o array ordenado
}

function exercise6() {
  // Exemplo de uso
  const array = [5, 3, 6, 2, 10];
  console.log("Array original:", array);
  const arrayOrdenado = selectionSort(array);
  console.log("Array ordenado:", arrayOrdenado);
}

exercise6();

/*
  O Selection Sort é fácil de entender e implementar, mas sua complexidade O(n²) o torna impraticável para grandes conjuntos de dados. 
  Ele tem um número fixo de comparações e trocas, independentemente da ordem inicial dos elementos. É útil para conjuntos pequenos ou 
  quando a simplicidade do código é uma prioridade.
*/

function quickFind(
  arr: number[],
  low: number,
  high: number,
  k: number
): number {
  // Verifica se o índice k está dentro do limite
  if (k < 0 || k >= high - low + 1) {
    throw new Error("k está fora do intervalo.");
  }

  // Escolhe o pivô (aqui, o último elemento)
  const pivot = arr[high];
  let i = low - 1;

  // Particiona o array
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca arr[i] com arr[j]
    }
  }

  // Coloca o pivô na posição correta
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  const pivotIndex = i + 1;

  // Verifica se encontramos o k-ésimo menor elemento
  if (pivotIndex - low === k) {
    return arr[pivotIndex]; // Encontrou o k-ésimo menor elemento
  } else if (pivotIndex - low > k) {
    return quickFind(arr, low, pivotIndex - 1, k); // Busca na parte esquerda
  } else {
    return quickFind(arr, pivotIndex + 1, high, k - (pivotIndex - low + 1)); // Busca na parte direita
  }
}

function exercise7() {
  // Exemplo de uso
  const S = [7, 1, 3, 10, 17, 2, 21, 9];
  const k = 5; // queremos o 5º menor elemento
  const kMenorElemento = quickFind(S, 0, S.length - 1, k - 1); // k-1 porque os índices começam em 0
  console.log(`O ${k}º menor elemento é: ${kMenorElemento}`);
}

/* 
  Este algoritmo tem uma complexidade média de O(n), mas pode ter um desempenho pior (O(n²)) em casos específicos de entradas 
  já ordenadas ou quase ordenadas, se o pivô não for escolhido de forma adequada. Para evitar isso, uma escolha aleatória do pivô 
  ou métodos de escolha mais sofisticados podem ser utilizados em implementações reais.
*/

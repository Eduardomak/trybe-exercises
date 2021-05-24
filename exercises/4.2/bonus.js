//Ordene o array numbers em ordem crescente e imprima seus valores

//exemplo de uma maneira
/* let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let index = 1; index < array.length; index += 1) {
  console.log(index)
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    console.log(secondIndex)
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
      console.log(array)
    }
  }
} */
//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//vai percorrer todo o array numbers
for(let indexG = 1; indexG < numbers.length; indexG+=1){
  //vai comparar os indices
  for(let indexP = 0; indexP < indexG; indexP+=1){
    if(numbers[indexG]<numbers[indexP]){
      //preciso de uma variável para armazenar o valor de uma variável para poder trocar
      let changer = numbers[indexP];
      numbers[indexP] = numbers[indexG];
      numbers[indexG] = changer;
    }
  }
}
console.log(`o vetor numbers em orderm crescente: ${numbers}`)
//2
for(let index1 = 1; index1 < numbers.length; index1+=1){

  for(let index2 = 0; index2 < index1; index2+=1){
    if(numbers[index1]>numbers[index2]){

      let changer = numbers[index2];
      numbers[index2] = numbers[index1];
      numbers[index1] = changer;
    }
  }
}
console.log(`o vetor numbers em orderm decrescente: ${numbers}`)
//3
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let multiplicador = [];
for(let indM = 0; indM < numeros.length - 1; indM +=1){ 
  multiplicador.push(numeros[indM]*numeros[indM+1])
}
multiplicador.push(numeros[numeros.length-1]*2);
console.log(`Resultado das multiplicações: ${multiplicador}`)
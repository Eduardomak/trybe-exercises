let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
console.log(`numeros do array: ${numbers}`)
//2
let soma = 0;
for(indexSoma = 0; indexSoma < numbers.length; indexSoma+=1){
  soma+= numbers[indexSoma]
}
console.log(`soma dos números: ${soma}`)
//3
let mediaAritmetica = soma/numbers.length
console.log(`média aritmética: ${mediaAritmetica}`)
//4
if(mediaAritmetica>20){
  console.log(`valor maior que 20`);
}
else{
  console.log(`valor menor ou igual a 20`);
}
// O Switch não é muito indicado nessas situações. É melhor usar o if
/* switch(mediaAritmetica){
  case 1:
  console.log(`valor maior que 20`);
  break;
  default:
    console.log(`valor menor ou igual a 20`);
  } */
  //5
  let valorMaximo = numbers[0]
  for(let index=1; index < numbers.length; index+=1){
    if(numbers[index] > valorMaximo){
      valorMaximo=numbers[index]
    }
  }
  console.log(`Valor Máximo é igual a: ${valorMaximo}`);
  //6
  let numImpar = 0;
  for(let iIm=0; iIm < numbers.length; iIm+=1){
    if (numbers[iIm]%2 ===1){
      numImpar+=1;
    }
  }
  console.log(`Numeros impar: ${numImpar}`)
  //7
  let valorMinimo = numbers[0];
  for(let iMin=0; iMin<numbers.length;iMin+=1){
    if(numbers[iMin]<valorMinimo){
      valorMinimo=numbers[iMin];
    }
  }
  console.log(`valor mínimo: ${valorMinimo}`)
  //8
let arrAleat = [1,2,3,4,2,1,1,2,3,4,2,1,1,2,3,4,4,33,2,2,2,43,12,43,21]
console.log(`imprimindo array: ${arrAleat}`)
//9
let divPor2 = [];
for(let iArr = 0; iArr <arrAleat.length; iArr+=1){
  divPor2.push(arrAleat[iArr]/2);
}
console.log(`Resultado do array dividido por 2: ${divPor2}`)

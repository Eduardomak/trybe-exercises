let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//1
console.log(`Bem vinda ${info.personagem}`);
//2
info['recorrente'] = 'Sim'
console.log(info);
//3
for (let key in info){
  console.log(key);
}
//4
for (let key2 in info){
  console.log(info[key2]);
}
//5
let info2 = {
  chave1: "Tio Patinhas", 
  chave2: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
  chave3: "O Ultimo MacPatinhas" ,
  chave4: "Sim" , 
}
for(let key9 in info2){
  console.log(info2[key9])
}
/*   for(let key4 in info2){
    if(info2[key4]===info[key4]){
      console.log("Ambos recorrentes")
    }
    else{
      console.log(`${info[key4]} e ${info2[key4]}`)
    }
  
  } */
  for (let properties in info) {
    if (
      info[properties] === info.recorrente &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + " e " + info2[properties]);
    }
  }
  let phrase = "ahiba"
  let test = ""
  for(let oj = 0; oj < phrase.length; oj +=1){
    if(phrase[oj] === "a"){
    test+= 1
  }
    else{
      test+=phrase[oj]
    }
  }
  console.log(test)

// Desafio 9
function div3or5(arg) {
  let result;
  if(arg % 3 === 0) {
    result = 'fizz';
  } else{
    result = 'buzz';
  }
  return result
}

function fizzBuzz(array) {
  let phrase = []; 
  
  for (let index = 0; index < array.length; index += 1) {
    phrase[index] = 'bug!';

    if (array[index] % 15 === 0 ) {
      phrase[index] = 'fizzBuzz';
    }
    else if (array[index] % 3 === 0 || array[index] % 5 === 0) {
      phrase[index] = div3or5(array[index]);
    }
  }
  return phrase;
}
console.log(fizzBuzz([9, 25]))
  /* for (let index = 0; index < string.length; index += 1) {
   if (string[index] === 'a') {
     phrase += 1;
   }
   else if (string[index] === 'e') {
     phrase += 2;
   }
   else if (string[index] === 'i') {
    phrase += 3;
  }
  else if (string[index] === 'o') {
    phrase += 4;
  }
  else if (string[index] === 'u') {
    phrase += 5;
  }
  else {
    phrase += string[index]
  }
 } */
 return phrase
 function encode2() {

 }
}
function decode(string) {
  let phrase = ''
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      phrase += 'a';
    }
    else if (string[index] === '2') {
      phrase += 'e';
    }
    else if (string[index] === '3') {
     phrase += 'i';
   }
   else if (string[index] === '4') {
     phrase += 'o';
   }
   else if (string[index] === '5') {
     phrase += 'u';
   }
   else {
     phrase += string[index]
   }
  }
  return phrase
}


let phrase = 'string';
  newPhrase = '';
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];

  for(let index = 0; index < phrase.length; index += 1) {
    if(phrase[index] !== 'a' && phrase[index] !== 'e' && phrase[index] !== 'i' && phrase[index] !== 'o' && phrase[index] !== 'u' ) {
      newPhrase += phrase[index]
      console.log(newPhrase)
    }
    for(let index2 = 0; index2 < numbers.length; index2 +=1){
      if(phrase[index] === vowel[index2]){
        newPhrase += numbers[index2];
      }
    }
  }
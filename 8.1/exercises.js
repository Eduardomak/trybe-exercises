
//Esse método abaixo não funciona pq o js não enxerga os argumentos de newEmployees como sendo argumentos das arrow functions em id.
/* const newEmployees = (nome1, nome2, nome3) => {
  const employees = {
    id1: nome1 => {
      const email = nome1.toLowerCase().split(' ').join('_')
      return {nome1, email: `${email}@trybe.com`}
    }, 
    id2: nome2 => {
      const email = nome2.toLowerCase().split(' ').join('_')
      return {nome2, email: `${email}@trybe.com`}
    }, 
    id3: nome3 => {
      const email = nome3.toLowerCase().split(' ').join('_')
      return {nome3, email: `${email}@trybe.com`}
    } 
  }
  return employees;
};
console.log(newEmployees('Pedro Guerra','Luiza Drummond','Carla Paiva')) */

//Tentando passar uma função como argumento
function employee(nomeCompleto) {
  const email = nomeCompleto.toLowerCase().split(' ').join('_')
  return {nomeCompleto: nomeCompleto, email: `${email}@trybe.com`}
}
// Ao usar uma função como argumento, não precisamos dar o nome da função no argumento, isso pode ser feito mais tarde.
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employee))

//Exercicio 2
const checkResult = (number,myNumber) => myNumber === number

const raffleCheck = (myNumber, callback) => {
  const number = Math.floor(Math.random()*5)+1;
  return callback(myNumber, number) ? 'Lucky day, you won' : 'Try again!';
}
console.log(raffleCheck(2, checkResult));

//Exercicio 3 minha solução
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rAnswers, sAnswers) => {
  let points = 0;
  for(let index = 0; index < rAnswers.length; index += 1) {
    rAnswers[index] === sAnswers[index] ? points += 1 : points -= 0.5
    sAnswers[index] === 'N.A' ? points += 0.5 : points = points
  }
  return points;
}

const finalResult = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers)
}
console.log(finalResult(rightAnswers, studentAnswers, checkAnswers))

//Exercicio 3 outra solução
/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
})); */
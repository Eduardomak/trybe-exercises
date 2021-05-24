//exercicio 1
let asterisco = "";
let n = 8;

for(let i=0; i<n; i+=1){
  asterisco+="*"
}

for(let index=0;index<n;index+=1){
  console.log(`${asterisco}`)
}
//exercicio 2
let asterisco2 = "";
let h = 5;

for(let index2=0; index2 < h; index2+=1){
  asterisco2+="*"
  console.log(`${asterisco2}`)
}
//exercicio3
let inputline = "";
let symbol = "*";
let g = 4;
let result = g;

for(let index3 = 0;index3 <= g ; index3+=1){
  for(let index4 = 0; index4 <= g ; index4+=1){
    if(index4 < result){
      inputline+=" ";
    }
    else {
      inputline+=symbol
    }
  }
console.log(inputline)
inputline = "";
result-=1;
}
let n1 = 5;
let n2 = 11;
let igual;
let soma;
let maiorQueDez;
let maiorQueVinte;


if(n1 == n2){
igual=""
} else {
 igual="nao"
}
soma=n1+n2;
if(n1 + n2 > 10){
    maiorQueDez="maior"
} else {
    maiorQueDez="menor"
}

if(n1 + n2 >  20){
    maiorQueVinte="maior"
} else {
    maiorQueVinte="menor"
}

console.log(`Os numeros ${n1} e ${n2} ${igual} sao iguais.Sua soma é ${soma},que é ${maiorQueDez} que 10 e ${maiorQueVinte} que 20`);
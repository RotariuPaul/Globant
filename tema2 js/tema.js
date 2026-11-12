//1
let a=1,b=2;
let aux;

aux=a;
a=b;
b=aux;
console.log(a,b);

//2
a=a+b;
b=a-b;
a=a-b;

console.log(a,b);

//3

let arr=[1,2,3,4,5];

aux=arr[0];
arr[0]=arr[4];
arr[4]=aux;

console.log(arr);

//4

for(let i=1;i<=10;i++)
    console.log(i);

//5

for(let i=1;i<=20;i++)
    if(i%2==0) console.log(i);

//6

let s=0;
for(let i=1;i<=100;i++)
    s+=i;
console.log(s);

//7

arr=[1,34,54,12,76,12,37,100]
let max=arr[0];

for(let i=1;i<arr.length;i++)
    if(max<arr[i]) max=arr[i];

console.log(max);

//8

function multiply(a,b){
    return a*b;
}

console.log(multiply(2,4));

//9

function isEven(a){
    if(a%2==0)
        return true;
    return false;
}

console.log(isEven(43));

//10

function celsiusToFahrenheit(c){
    return (c*9/5)+32;
}

console.log(celsiusToFahrenheit(5),"F");

//11

function swapElements(arr,index1,index2){
    aux=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=aux;
    return arr;
}
arr=[1,2,3,4]
console.log(swapElements(arr,1,3));

//12

function sumArray(numbers){
    let s=0;
    for(let i=0;i<numbers.length;i++)
        s+=numbers[i];
    return s;
}

console.log(sumArray([1,2,3,4]));   
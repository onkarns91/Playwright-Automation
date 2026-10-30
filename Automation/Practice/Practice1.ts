//1. Reverse a string without using built-in reverse methods

function reverse(word: string) {

    var Newword: string = "";
    for (let i = word.length - 1; i >= 0; i--) {
        Newword += word[i]
    }
    console.log(Newword);
}
reverse('playwright')

//2. Find the second-largest number in an array

const given: number[] = [40, 564,122, 122, 78, 90];

let largest: number = -Infinity;
let Secondlargest: number = -Infinity;

for (let i = 0; i < given.length; i++) {
    let Currentnum = given[i];
    if (Currentnum > largest) {
        Secondlargest = largest;
        largest = Currentnum;
    }
    else if (Currentnum < largest && Secondlargest < Currentnum) {
        Secondlargest = Currentnum;
    }
} console.log(Secondlargest)


//3. Find missing numbers in an array
const given1: number[] = [2,5,7]

let result1: number[] = [];

for(let i=1;i<=7;i++){

    if(given1.indexOf(i)==-1){
        result1.push(i)
    }
    
}console.log(result1)

//4. Remove duplicate elements from an array

const newarr: number[] = [44,56,2,15,4,89,66,56,77,11,44,55,65,56]  //44,56,2,15,4,89,66,77,11,55,65

let resultarr: number[] = [];

for(let i=0;i<newarr.length;i++){

    if(resultarr.indexOf(newarr[i])==-1){
        resultarr.push(newarr[i])
    }
    
}console.log('resultarr :',resultarr)

//approach 2
let set =new Set(newarr)
console.log('set',[...set])

//5 Count occurrences of each character
var char :string[] = ['y','w','e','w','e','w','y','u','t','u','w']

var count:number=0

for(let i=0;i<=char.length;i++){
    if(char.indexOf(char[i])==-1){
        count++
        
    }
    console.log(count)
}
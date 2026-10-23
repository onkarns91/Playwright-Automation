let day="monday "

console.log(day.length); //get length of string

console.log(day.trim().length);  //trim : Removes the leading and trailing white space and line terminator characters from a string.
console.log(day.slice(0,3)); //get specific part of string

console.log(day[4]);  

//split string
let split=(day.split(" ")[0]); 
console.log(split);
console.log(split.length);

let splitm=split.split("m")[1].split("y")[0]; 
console.log(splitm);

let nonly=day.split("o")[1].split("d")[0];
console.log(nonly);


//using parseInt & toString
let date='23';
let nextdate='26';
let diff= parseInt(nextdate)-parseInt(date);  //parseInt :Converts a string to an integer.
console.log(diff);
console.log(diff.toString());  //toString :Returns a string representation of an object.

let newtext=day+"is funday";
console.log(newtext);
let value=newtext.indexOf("day");
console.log(value)
console.log(newtext.indexOf("day",5)); //("day",5) :The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.


//get count of "day"
let count=0;
let values=newtext.indexOf("day");
while(values!==-1)
{
   count++
   values=newtext.indexOf("day",values +1)
}
console.log(count)


//1 Remove Duplicate Characters from String
let string1='programming';
let arr1=string1.split('');
console.log(arr1);
let uniques=new Set(arr1);
console.log(uniques);
let array=[...uniques]; //convert string into array ,using spread operator
console.log(array)
let uniquevalue=array.join('')
console.log(uniquevalue) 


//2
//approach 1 :using Set method
let string='proggrramming'
// console.log(`\nbefore remove duplicate char : ${string}`);
// let split1=string.split('');
// console.log(`\nsplit: ${split1}`);
// let set=new Set(split1);
// console.log("\nSet char : ",set);
// let arr=[...set];
// console.log(`\nconverted string into array : ${arr}`);
// let finl=arr.join('')
// console.log(`\nafter remove duplicate char : ${finl}`);


//approach 2 : without using Set method

let result="";

for(i=0;i<string.length;i++)
{
   if(result.indexOf(string[i])===-1)
   {
      result=result+string[i];
   }
} console.log(result)


var marks=Array(6);
// var marks=Array(10,20,30,40,50,60); //aprroach 1

// console.log(marks);
marks=[10,20,230,40,60,60];//aprroach 2
console.log('array :',marks)
var submarks=marks.slice(2,4);
console.log(marks[2]); //print 3rd array's value
marks[2]=566;  //change value
console.log('change array value',marks)

marks.push(89);  //Appends new elements to the end of an array, and returns the new length of the array.
marks.unshift(111); //Inserts new elements at the start of an array, and returns the new length of the array.
console.log('before pop',marks);
marks.pop();  //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log('after pop',marks);
console.log(marks.length); //Gets or sets the length of the array
console.log(marks.indexOf(40)); //Returns the index of the first occurrence of a value in an array , or -1 if it is not present.
console.log(marks.includes(522)); //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log('submarks :',submarks);


var sum1=0; var i;
//approach 1
for(i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum1=sum1+marks[i]; 
}
console.log(sum1);

//approch 2 > using reduce 
let total1=marks.reduce((sum1,mark)=>sum1+mark,0); //reduce() : used when you want to combine all array values into one final value.
console.log(total1);


// create an array with even numbers of score array
let scores=[12,13,14,15,16];

//approach 1
let evenscore=[];
for(i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenscore.push(scores[i])
    }
}
console.log(evenscore);

//approach 2
let evenscore2=scores.filter(score=>score%2==0); //filter : used when you want to select only specfic items from an array.
console.log(evenscore2);
let eventhree=evenscore2.map(scores=>scores*3)
console.log(eventhree);



let fiveadd=scores.map(score=>score+10) //map : user when you want to change/transform every item in an array.
console.log(fiveadd);


//chaning functions : filter>multiply by 3>add all
let sumval=scores.filter(score=>score%2==0).map(scores=>scores*3).reduce((sum,mark)=>sum+mark,0); 
console.log('sumval :',sumval);



//sorting Arrays
//A. string
let fruits=['banana','apple','strawberry','guva'];
console.log(fruits.sort());   //Sorts an array in place. 
console.log(fruits.reverse());  //Reverses the elements in an array in place. 

//B. Numeric values
let Num=[10,2,569,9,36];
//approach 1
console.log(Num.sort(function(a,b){
   return (a-b)
})); 
//approach 2
console.log(Num.sort((a,b)=>(a-b))); //a-b :for Ascending order

console.log(Num.sort((a,b)=>(b-a))); //b-a :for descending order
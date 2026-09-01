
var marks=Array(6);
// var marks=Array(10,20,30,40,50,60); //aprroach 1

console.log(marks);
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
console.log(submarks);


var sum=0;
var i;
for(i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum=sum+marks[i]; 
}
console.log(sum);
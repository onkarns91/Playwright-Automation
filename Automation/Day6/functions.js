//block function


function add(a,b)
{
    return(a+b)
}
let sum =add(2,3);
console.log(sum);

// function without name -(anyonymus function):function expressions

//approach 1
let addition=function(c,d)
{
   return c+d
}
console.log(addition(5,6));

//approach 2
let total=(c,d)=>c+d;
console.log(total(5,8)); 
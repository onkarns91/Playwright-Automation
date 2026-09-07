//keywords : Var ,let and const

/* In TypeScript (and JavaScript), `var`, `let`, and `const` are keywords used to declare variables, but they have different behaviors and scopes.
Aspects of variables
1. **Scope**:
- Var - functional Scoped
- Let and Const - block scoped */

function varscope(){
    if(true){
        var x=10
        console.log("inside block varscope: ", x)
    }
    console.log("out of block varscope: ", x) // x is accessible here because var is functional scoped
}
varscope() //calling the function 


function blockscope(){
    if(true){
        let y=20
        const z=30
        console.log("inside block blockscope: ", y, z)
    }
    // console.log("out of block: ", y, z) // y and z are not accessible here because they are block scoped 
}
blockscope()


/* 2. **Declaration/value assignment**:
- `var` and `let`: Can be declared without a value, and its value can be assigned later.
- `const`: Must be declared with a value, and its value cannot be changed later. */

var a; // valid
a = 5; // valid
console.log(a);

//let b; // valid
//b = 10; // valid
//console.log(b);

const c = 15; // valid
// c = 20; // invalid, will throw an error because const cannot be reassigned
console.log(c);


/* 3. re-declaration:
- `var`: Can be re-declared within the same scope.
- `let` and `const`: Cannot be re-declared within the same scope. */

var n = "John";
var n ="onkar"; // valid, re-declaration allowed
console.log(n);

/* let m ="mumbai"
let m ="pune" // invalid, re-declaration not allowed
 
const p = "hello"
const p = "world" // invalid, re-declaration not allowed */


/* 4. re-initialization/reassignment: (update value of variable)
- `var` and `let`: Can be reassigned to a new value.
- `const`: Cannot be reassigned to a new value. */

var num = 1;
num=2 // valid, reassignment allowed
console.log(num)

let num2 = 3;
num2=4 // valid, reassignment allowed
console.log(num2)

const num3 = 5;
// num3=6 // invalid, reassignment not allowed
//console.log(num3)

/* 5. **Hoisting**: (without declaring the variable and without assigning data into variable ,accessing the variable called hoisting.)
- `var`: Gets hoisted to the top of its function scope and initialized with `undefined`.
- `let` and `const`: Also get hoisted to the top of their block scope, but they are not initialized with a value (Temporal Dead Zone). */

// console.log(hoistedVar); // undefined, because var is hoisted and initialized with undefined
// var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ReferenceError, because let is hoisted but not initialized
// let hoistedLet = "I am not hoisted";        

// console.log(hoistedConst); // ReferenceError, because const is hoisted but not initialized
// const hoistedConst = "I am also not hoisted";
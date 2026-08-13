console.log("***Arthemetic Operations***")

//1. Arthemetic Operations (+ - / % *)

var x=1 ,y=2
let add=x+y
let dif=x-y
let multi=x*y
let div=x/y
let mod=x%y//Modulus (Remainder)
let exp=5**2//exponentiation 

console.log("addition :",add)
console.log("subtraction :",dif)
console.log("multiplication :",multi)
console.log("dividend :",div)
console.log("Modulus :",mod)
console.log("exponentiation :",exp)


//2. Assignment Operators
console.log("***Assignment Operations***")

var p=5
var q=10
p+=q

console.log(p)
console.log(p-=q)
console.log(p*=q)
console.log(p/=q)
console.log(p%=q)
console.log(p+q)

//3. Relational/comparison operators (Returns boolean value- true/false)
// < > <= >= == != ===(strict equality) !==(strict inequality)
console.log("***Relational/comparison operators***")
let s:number=10
let t:any="20"
console.log("s lower than t :",s<t)
console.log("s greater than t :",s>t)
console.log("s lower than or eql t :",s<=t)
console.log("s greater than or eql t :",s>=t)
console.log("s eql t :",s==t)
console.log("s not eql to t :",s!=t)
console.log("t not eql to s :",t!=s)
console.log("s srtict eql to t :",s===t)
console.log("s not srtict eql to t :",s!==t)


//difference between ==(equality) & ===(strict equality) & !==(strict inequality)
console.log("***difference between == & === & !==***")
let ab:any=10  //number
let xy:any="10" //string

console.log("equality :",ab==xy) //only compares values
console.log("strict equality :",ab===xy) //compares value along with data type
console.log("strict inequality :",ab!==xy) //data type should not same

//4. Logical Operators (&& || !)
console.log("***Logical Operators***")
//returns true / false (boolean)
let b1:boolean=true
let b2:boolean=false
console.log(b1 && b2)
console.log(b1 || b2)
console.log(!b1)
console.log(!b2)

//5. combination of logical and relational Operators
console.log("***combination of logical and relational Operators***")
console.log(10<20 && 10==10) //true
console.log(10>20 && 10==10) //false
console.log(10<20 || 10>20) //true
//console.log(10==30 || 10>20) //false


//6.Incrementation ,Decrementation
console.log("***Incrementation ,Decrementation***")

var a=10 ,b=20
// a++
// ++b
console.log("value of a: ",a ,"value of b: ",b)
let c=++a//pre-incrementation
let d=b++//post-incrementation---1
console.log("value of c: ",c ,"value of d: ",d)
let e=b  //post-incrementation---2 (now b=21)
console.log("value of e: ",e)


//7. Ternary Operator (?:)
//syntax >> Expression ? value1:value2;
console.log("***Ternary Operator***")

let uv:number=10 
let yz:number=20

//1
let reslt:number=(uv<yz)?uv:yz
console.log(reslt)
//2
//console.log((10<20 && 10==20)? uv:yz)
//3
var age:number=30
/* let res:string=(age>18)?"Adult":"Minor"
console.log(res) */
console.log((age>18)?"Adult":"Minor")
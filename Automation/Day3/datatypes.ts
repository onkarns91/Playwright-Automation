//data types 

//1.number (allows both integers and floating point ,length of number is 8 bytes)

console.log('*** number -datatype***')

var x:number=2
var y:number=3.5      
var z:number=5624523
console.log("number x:",x,"number y:",y,"numberz:",z)


//2. string (allows group of char , single or double quotes, backticks for template literals)

console.log('*** string -datatype***')
var n:string="John Doe"
var gender:string='M'
var data:string=(`hello${n}${gender}`)
console.log(n)
console.log(gender)
console.log(data)
console.log(n ,gender)

//3.boolean (gives ture ,false)

console.log('*** boolean -datatype***')
var a:boolean=true
var b:boolean=false

console.log(a)
console.log(b)

//4.null

console.log('*** null -datatype***')

var p:null=null
console.log(p)

var q:undefined=undefined
console.log(q)
let price:number
//console.log(price) //will give Undefined as not initialization


//5.Any (loses type benefits)
console.log('*** any -datatype***')

let value:any=1234

value='qw12'
value="bhagwan"

console.log(value)


//6. union (combine multiple types)
console.log('*** union -datatype***')

let id:number |string |boolean
id=123214
console.log(id)

id="twenty"
console.log(id)

id=true
console.log(id)


//7. void (used as the return type for functions that do not return a value.)
console.log('*** void -datatype***')


function show():void  //(function not return any value then keep void as data type -optional*)
{
console.log("welcome")
}
show() 



function sum(x:number ,y:number)

{
return(x+y)
}
let addition:number=sum(10,20)

console.log(addition)
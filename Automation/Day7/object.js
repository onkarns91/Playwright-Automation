//Object is collection of properties

let person =
{ 
    FirstName :'omkar',
    LastName :'sawant',
    Age:27,

    FullName :function()
    {
    return(this.FirstName+" "+this.LastName);
    }
}

console.log(person.FirstName); //approach 1
console.log(person['FirstName']); //approach 2
console.log('FullName :',person.FullName());
person.FirstName ='onkar'; //update property data 
console.log(person.FirstName); 
person.gender='male'; //add property data
console.log(person); 
delete person.gender; //delete property data
console.log(person); 
console.log('gender' in person); //check whether property lies in Object ,give ture/false

//Print all values of JS Object
for(let key in person)  //using enhance for loop
{
    console.log(person[key]);
}


//complete object with nested object 
const employee=
{
   name:"lissa",           //property:data/info
   role:"QA Engineer",    
   age:26,
   IsActive:true,  

   add:        //Nested object
   {
    RoomNo:"40/102",
    City:"mumbai",
    Pincode:400018,
   },
   
   skills :  
   [
    "JavaScript",
    "Playwright",
    "SQL"
   ],

   NewEmp :function()  //methods
   {
    return(this.name+" is working as "+this.role)  //this : current object
   }
}


console.log('name :',employee.name);
console.log('City :',employee.add.City);
console.log('skill :',employee.skills[1]);
console.log('NewEmp details :',employee.NewEmp());



//create class with constructor 
class emp
{ 
    constructor(name ,role)
    {
    this.name=name;  
    this.role=role;
    }

    work()
    {
    return(this.name +" working as "+this.role)
    }
}
//create object of class
const emp1=new emp(); 

//approach 1
emp1.name="Mandar";   //add/update property data, syntax: object.property=value
emp1.role='Manager';
console.log('emp1 name :',emp1.name); 
console.log('emp1 role :',emp1.role);
console.log('emp1 work :',emp1.work()); //call method, syntax: object.method()
emp1.name="onkar";
console.log('emp1 new name :',emp1.name);


//approach 2
emp2=new emp("rakesh",'Developer');
console.log('emp2 name :',emp2.name); 
console.log('emp2 role :',emp2.role);
console.log('emp2 work :',emp2.work());
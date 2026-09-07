//Pbjecxt is collection of properties

let person =
{ 
    FirstName :'omkar',
    LastName :'sawant',
    Age:27
}

console.log(person.FirstName); //approach 1
console.log(person['FirstName']); //approach 2

person.FirstName ='onkar'; //update value
console.log(person.FirstName); 
person.gender='male'; //add value 
console.log(person); 
delete person.gender; //delete value
console.log(person); 
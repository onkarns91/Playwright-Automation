// POLYMORPHISM :allows a single entity (such as a method or an object) to take on multiple forms.
//method Overriding : same method but different behaviour
class batch {
    #batchNum=25;
    constructor(name)
    {
        this.name=name;
    }
    getbatch()
    {
       return(this.#batchNum);
    }
}
class crickteam extends batch{
    constructor(name ,id)
    {
        super(name);
        this.id=id
    }

    getbatch() //Overriding 
    {
        console.log(`${this.name}, in Cricket Team and batch no :`,super.getbatch()) //calling parent method
    }
}
class footballteam extends batch{
    constructor(name ,id)
    {
        super(name);
        this.id=id
    }   
    getbatch() //Overriding 
    {
        console.log(`${this.name}, in Football Team and batch no :`,super.getbatch())  
    }
};

const batch1=new batch('newbatch');
console.log(batch1.getbatch());
console.log(batch1.name);

const std1=new crickteam('leo',7);
const std2=new footballteam('joey',9);
console.log(std1.name);
std1.getbatch();
console.log(std2.name);
std2.getbatch();


//method overloading :multiple methods have the same name but different parameters, and the program calls the correct one based on the arguments passed.

//approach 1
class Calculator {

    add(...numbers) {    //using '...args' 

        return numbers.reduce((total, num) => total + num, 0);

    }
}

const cal=new Calculator();
console.log(cal.add(12,122,22))
console.log(cal.add(12,22))

//approach 2
class adds {

    add(a, b, c = 0) {
        return a + b + c;
    }
}

const add = new adds();

console.log(add.add(10, 20));
console.log(add.add(10, 20, 30));


//approach 3
class Calculators 
{
    add(a, b, c,) 
    {
     return a + b + (c ?? 0);
    }
}
const calc = new Calculators();

console.log(calc.add(10, 20,36));
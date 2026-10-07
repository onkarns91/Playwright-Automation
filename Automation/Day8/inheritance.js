//Inheritance(Reuse code) : one class can reuse data nad methods from another class
//syntax : class Child extends Parent {}

/* class batch{
    constructor(stdName)   //constructor() : is a method which executes by defalut when you create object of the class.
    {
        this.stdName=stdName;
    }

    boys()
    {
        console.log(`${this.stdName},in boys group`);
    }

    girls()
    {
        console.log(`${this.stdName},in girls group`);
    }
}

class student extends batch{

    constructor(stdName,std,div)
    {
        super(stdName); //super  :to call parent constructor
        this.std=std;
        this.div=div;
    }

    divName()

    
    {
        super.boys();
        console.log(`${this.stdName},is in std :${this.std} and div :${this.div}`)
    }
}

const std1=new student('denver','9th','B');

console.log(std1.stdName);
std1.divName();
std1.boys();
console.log(std1.std); */


const car=require('./abstraction') //importing class

const car12=new car('Ferrari')
console.log(car12.name)
car12.start();
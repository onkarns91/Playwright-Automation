//1. Person Class with Details

class person {
    name='omkar' ;
    age=27 ;
    country='india';

    displaydetail()
    {
        console.log(`Person's name :${this.name}`)
        console.log(`Person's age :${this.age}`)
        console.log(`Person's country :${this.country}`)
    }

}

const person1=new person()
console.log(person1.displaydetail());


//2. Rectangle Class with Area and Perimeter

class rectangle{

    constructor(width,height)
    {
        this.width=width
        this.height=height
    }    
        areaofrectangle()
        {
            return(`Area of rectangle : ${this.width * this.height}`)
        }
        
        Perimeterofrectangle()
        {
        return(`Perimeter of rectangle : ${2 * (this.width + this.height)}`)
        }
    
}


const rectangle1 = new rectangle(10,20)
const rectangle2 = new rectangle(40,20)
console.log(rectangle1.areaofrectangle())
console.log(rectangle1.Perimeterofrectangle())
console.log(rectangle2.areaofrectangle())
console.log(rectangle2.Perimeterofrectangle())


//3. Vehicle and Car Classes with Inheritance

class Vehicle
{
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }

    vehicleDetails()
    {
        return(`vehile make :${this.make},vehicle model :${this.model},vehicle year :${this.year}`)
    }
}

class Car extends Vehicle
{
    constructor(make,model,year,numberofdoors)
    {
        super(make,model,year);
        this.numberofdoors=numberofdoors;
    }

     vehicleDetails()
    {
        return(`vehile make :${this.make}, vehicle model :${this.model}, vehicle year :${this.year}, numberofdoors :${this.numberofdoors}`)
    }

}

const car=new Vehicle('indian','TATA231','201')
console.log(car.vehicleDetails())
const car1=new Car('indian','TATA231','2018','5')
console.log(car1.vehicleDetails())


//6. Employee and Manager Classes with Salary Calculation
 class employee
{
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;
    }

    annualsalary()
    {
        return (`annual salary :${12 * this.salary}`)
    }
}

class manager extends employee
{
    constructor(name,salary,department)
    {
        super(name,salary)
        this.department=department;
    }

    annualsalary()
    {
        this.bonus=this.salary*0.1
        return (`annual salary with 10% bonus(${this.bonus}) :${12 * this.salary + this.bonus}`)
    }
}

const man1=new manager('tarek','10000','HR')
const man2=new manager('raushan','20000','PR')
console.log(man1.annualsalary())
console.log(man2.annualsalary()) 

// Product and PersonalCareProduct Classes with Warranty

class Product {
    constructor(productID,name,price)
    {
        this.productID=productID;
        this.name=name;
        this.price=price;
    }

    totalprice(quantity)
    {       
        return(`total price :${this.price * quantity}`)
    }
}
class PersonalCareProduct extends Product{
    constructor(productID,name,price,warrantyperiod)
    {
        super(productID,name,price);
        this.warrantyperiod=warrantyperiod;
    }
     totalprice(quantity)
    {
        return(`total price :${(this.price * quantity) + this.warrantyperiod }`)
    }

}

const PersonalCareProduct1=new PersonalCareProduct(1290,'S26',9000,12)
console.log(PersonalCareProduct1.totalprice(2))
const PersonalCareProduct2=new PersonalCareProduct(1, 'Shampoo', 100, 2)
console.log(PersonalCareProduct2.totalprice(3))
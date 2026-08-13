/* 1. if condition
/* syntax >
        if(condition)
        {
            statement 
        } */
// Ex : if person's age above 18 ,then he will be eligible for vote

let age:number=25
if(age>18)
{
    console.log("Person eligible for Vote")
}

/* 2. if else
    syntax >
            if(conditon)
            {
                statement 
            }
            else
            {
                statement 
            } */
//Ex : if num id dividible by 2, it is even ;otherwise it is odd

let num1:number=32
if (num1%2==0)
{
    console.log(`${num1} is Even Number`)
}
else
{
     console.log(`${num1}is Odd Number`)
}

/* 3. Nested if else
syntax : 
        if(condition1)
        {
            statement 
        }
        else if(condition2)
        {
            statement 
        }
        else
        {
            statement 
        } */
//EX : depending on the marks , display appropriate grade
let marks:number=33
if(marks>=90 && marks==100)
{
    console.log(`${marks} PASS grade-A`)
}
else if(marks<=89 && marks>=79)
{
     console.log(`${marks} PASS grade-B`)
}
else if(marks<=78 && marks>=60)
{
     console.log(`${marks} PASS grade-C`)
}
else if(marks<=59 && marks>=35)
{
     console.log(`${marks} PASS grade-D`)
}
else
{
     console.log(`${marks} FAIL`)
}


/* 4. Switch Case statement
/* syntax :
    switch(expression)
    {
        case (value1) : statement ;break;
        case (value2): statement ;break;
        case (value3) : statement ;break;
        default : statement 
    } */
// EX : depending on value of day ,print the corresponding day of week

let day:number=7
switch(day)
{
    case 1:console.log("Sunday");break
    case 2:console.log("Monday");break
    case 3:console.log("Tuesday");break
    case 4:console.log("Wednesday");break
    case 5:console.log("Thursday");break
    case 6:console.log("Friday");break
    case 7:console.log("Saturday");break
    default:console.log("Invalid Input")
}

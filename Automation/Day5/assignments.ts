/* //Lab Assignments
If condition:
1.Check if a character is uppercase. */

/* let char:string='A'
if(char>='A' && char<='Z')
{
    console.log(`${char} is Uppercase`)
} */


// 2.Check if a number is a multiple of 10.
/* let num2:number=10
if(num2%10===0)
{
    console.log(`${num2} is a multiple of 10`)
} */


/* If else condition:
3.Check if a person is a teenager (age between 13 and 19). */
/* let age1:number=1
if(age1>=13 && age1<=19)
{
    console.log(`${age1} - person is Teenager`)
}
else 
{
    console.log(`${age1} - person is not Teenager`)
}
*/ 


// 4.Compare two numbers and print the larger one.
//approach 1
/* let num1:number=63,num2:number=6
if(num1>num2)
{
    console.log(`${num1} is larger Number`)
}
else
{
    console.log(`${num2} is larger Number`)
} */

//approach 2
/* let num1: number = 6, num2: number = 6;
console.log(`${Math.max(num1, num2)} is the larger number`);
 */

// 5.Check if a number is positive, negative, or zero.
/* let num1:number=-5
if(num1>0)
{
    console.log(`${num1} is positive`)
}
else if(num1<0)
{
    console.log(`${num1} is negative`)
}
else
{
    console.log(`${num1} is zero`)
} */



// 6.Check if a person is eligible for a senior citizen discount (age >= 60).
/* let age1:number=88
if(age1>=60)
{
    console.log(`${age1} person is eligible for a senior citizen discount`)
}
else
{
    console.log(`${age1} person is not eligible for a senior citizen discount`)
} */

/* Nested if else:
7.Check if a number is positive and even. */
/* let num1:number=46
if(num1>0 && num1%2==0)
{
    console.log(`${num1} number is positive and even`)
}
else if(num1<=0)
{
    console.log(`${num1} number is not positive`)
}
else
{
   console.log(`${num1} number is posive but odd`)
} */


// 8.Check if a character is an uppercase vowel.
/* let char:any='a'
if(char>='A' && char<='Z' && 'AEIOU'.includes(char))
{
    console.log(`${char} is an uppercase vowel`)
}
else if('aeiou'.includes(char))
{
    console.log(`${char} is an vowel but lowercase`)
}
else
{
    console.log(`${char} is not vowel`)
} */

// 9.Find the largest of three numbers.
/* let num1:number=123 , num2:number=234 , num3:number=3332
if (num1>num2 && num1>num3)
{
    console.log(`${num1} is largest number`)
}
else if(num1<num2 && num2>num3)
{
    console.log(`${num2} is largest number`)
}
else
{
    console.log(`${num3} is largest number`)
} */


// 10.Check if a number is a multiple of both 5 and 10.
/* let num:number=50
if(num%10===0)
{
    console.log(`${num} number is a multiple of both 5 and 10`)
}
else
{
    console.log(`${num} number is not multiple of 5 and 10`)
} */


// 11.Check if a character is a vowel or consonant.
/* let char:string='12'
let lowerchar=char.toLowerCase()
if('aeiou'.includes(lowerchar))
{
   console.log(`${char} character is a vowel`)
}
else if(lowerchar>='A '&& lowerchar<='Z')
{
    console.log('character is a consonant')
}
else
{
    console.log('Invalid Character')
} */

// 12.Check if a number is divisible by both 2 and 3.    
/* let num:number=6
if(num%2===0 && num%3===0)
{
    console.log(`${num} number is divisible by both 2 and 3`)
}
else
{
    console.log(`${num} number is not divisible by both 2 and 3`)
} */


/* Switch case:
13.Print the corresponding month name for a given month number. */

/* let month:number=24
switch(month)
{
    case 1:console.log('January');break
    case 2:console.log('February');break
    case 3:console.log('March');break
    case 4:console.log('April');break
    case 5:console.log('May');break
    case 6:console.log('June');break
    case 7:console.log('July');break
    case 8:console.log('August');break
    case 9:console.log('September');break
    case 10:console.log('October');break
    case 11:console.log('November');break
    case 12:console.log('December');break
    default :console.log('Invalid Input')
} */


// 14.Perform basic arithmetic operations based on user input.
/* let n:number=2 ,m:number=5
let operator:string='/'
switch(operator)
{
 case '+':console.log(`${n} + ${m} = ${n+m}`);break
 case '-':console.log(`${n} - ${m} = ${n-m}`);break
 case '*':console.log(`${n} * ${m} = ${n*m}`);break
 case '/':console.log(`${n} / ${m} = ${n/m}`);break
 case '%':console.log(`${n} % ${m} = ${n%m}`);break
 default:console.log('Invalid Operator use only + ,-,*,/ or %')
} */




// 15.Print the season based on the month number.    
// Summer / Hot =(March to May)
// Monsoon / Rainy =(June to September)
// Autumn = (October to November)
// Winter= (December to February)
/* 
let num:any=125
//aprroach 1
switch(num)
{
    case 3:
    case 4:
    case 5:console.log('Summer Season');break
    case 6:
    case 7:    
    case 8:
    case 9:console.log('Monsoon Season');break
    case 10:
    case 11:console.log('Autumn Season');break
    case 1:
    case 2:    
    case 12:console.log('Winter Season');break
    default:console.log('Invalid Input')
} */


//approach 2
/* let num: number = 3;

switch (true) {
    case (num >= 3 && num <= 5):
        console.log('Summer Season');
        break;
    case (num >= 6 && num <= 9):
        console.log('Monsoon Season');
        break;
    case (num === 10 || num === 11):
        console.log('Autumn Season');
        break;
    case (num === 12 || num === 1 || num === 2):
        console.log('Winter Season');
        break;
    default:
        console.log('Invalid Input');
} */
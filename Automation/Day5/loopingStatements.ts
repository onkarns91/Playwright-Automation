//1. Count PASS and FAIL test cases

const results = [
    "PASS", "FAIL", "PASS", "SKIP",
    "FAIL", "PASS", "FAIL"
];

/* let PASS = 0;
let FAIL = 0;
let SKIP = 0; */

//approach 1
/* 
for (const result of results) {
    if (result === "PASS") {
        PASS++
    }

    if (result === "FAIL") {
        FAIL++
    }

    if (result === "SKIP") {
        SKIP++
    }
}
console.log(`PASS :${PASS} FAIL :${FAIL} SKIP :${SKIP}`) */

//approach 2
/* const PASS = results.filter(result =>(result==="PASS")).length;
const FAIL = results.filter(result =>(result==="FAIL")).length;
const SKIP = results.filter(result =>(result==="SKIP")).length;
console.log('PASS  :',PASS)
console.log('FAIL  :',FAIL)
console.log('SKIP  :',SKIP) */

//approach 3
/* results.forEach((result) => {


    if (result === "PASS") {
        PASS++
    }
    if (result === "FAIL") {
        FAIL++
    }
    if (result === "SKIP") {
        SKIP++
    }
});
console.log(`PASS :${PASS} FAIL :${FAIL} SKIP :${SKIP}`) */



//2. Find the second-largest number
/* const responseTimes = [120, 450, 200, 450, 300, 100];
let largest= -Infinity;
let secondlargest = -Infinity;

for(let i=0;i<responseTimes.length;i++)
{
    const current=responseTimes[i];
    if(current > largest)
    {
        secondlargest = largest;
        largest =current;
        
    }
    else if(current < largest && secondlargest < current )
      {  secondlargest = current;
}
}
console.log(secondlargest) */

//3. Validate API response data
const users = [
  { id: 1, name: "Omkar", status: 200 },
  { id: 2, name: "",      status: 200 },
  { id: 3, name: "Rahul", status: 500 },
  { id: 4, name: "Amit", status: 200 }
];

let count=0

for(const user of users)
{
    /* if(user.name==="")
    {
    console.log(`Missing Name for user ID: ${user.id}`);
    count++
    } */
   /* if(user.status!==200)
   {
    console.log(`Invalid status for user ID: ${user.id}`);
    count++
   } */
  if(user.name!=="" && user.status===200)
  {
    console.log(`Valid status & Name for user ID: ${user.id}`);
    count++
  }
}console.log(count)
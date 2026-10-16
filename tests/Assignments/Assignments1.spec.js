// Topic 2 — this Keyword ,Focus: this.property, constructor & object state.


//Assignment 4 — UserDetails Class: Task: Create a class named UserDetails.
/* class UserDetails{
    constructor(name,email,role)
    {
        this.name=name;
        this.email=email;
        this.role=role;
    }

    displayDetails()
    {
        return `username :${this.name}\nusermail :${this.email}\nuserrole :${this.role}`;
    }
};

const user=new UserDetails("Omkar", "om@yahoo.com", "QA")
console.log(user.displayDetails()); */

//Assignment 5 — ApiHelper Class:Task: Store the API URLs in a class.
/* class ApiHelper{
    constructor(Base_URL,API_URL)
    {
        this.Base_URL=Base_URL;
        this.API_URL=API_URL;
    }
    showURLs()
    {
        return `Base_URL :'${Base_URL}'\nAPI_URL :${API_URL}`
    }
};


const first=new ApiHelper('base@url.com','api@url.com');
const second=new ApiHelper('base2@url.com','api2@url.com');

console.log('\nfirst_Api :',first.Base_URL ,first.API_URL);
console.log('second_Api :',second.Base_URL ,second.API_URL);

first.API_URL='apinew@url.com' //update property.

console.log('\nfirst_Api :',first.Base_URL ,first.API_URL);
console.log('second_Api :',second.Base_URL ,second.API_URL); */


//Assignment 6 — Token & Event ID:Task: Manage the token and event ID in the Api class.
class Api{
    constructor(){

        this.token = null
        this.eventID = null
    };

    saveToken(token) {
        this.token=token;
    
    };
    saveEventID(eventID) {
        this.eventID=eventID;
    
    };
    showData(){
        console.log (`token : ${this.token} \neventID : ${this.eventID}`)

    };
};

const details=new Api();
details.saveEventID(123);
details.saveToken(1236);
details.showData();
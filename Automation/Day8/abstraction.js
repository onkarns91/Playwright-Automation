//Abstraction = Hide HOW, Show WHAT (hide Complex implementation -> Show required functionality)

class car
{
    #fuelcheck()
    {
    console.log("checking fuel.")
    }
    #enginestart()
    {
    console.log("engine started..")
    }
    start()
    {
    this.#fuelcheck()
    this.#enginestart()
    console.log("Car Started...")
    }

};

const strtcar=new car();
strtcar.start();
//Encapsulation :keeping data and methods together and controlling access to the data.

class bankaccount
{
    #balance =50000;  //protecting data/private field

    deposite(amount)
    { if(amount>0)
    {
        this.#balance=this.#balance+amount;
    }
    }

    withdraw(amount){
        if(amount<=this.#balance)
        {
            this.#balance=this.#balance-amount;
        }
    }

    getbalalnce()
    {
        return(this.#balance);
    }
};

const account=new bankaccount();
console.log('account balance :',account.getbalalnce());
account.deposite(1000);
console.log('after deposite :',account.getbalalnce());
account.withdraw(10000);
console.log('after withdraw :',account.getbalalnce());

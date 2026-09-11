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

    getbatch()
    {
        console.log(`${this.name}, in Cricket Team and batch no :`,super.getbatch())
    }
}
class footballteam extends batch{
    constructor(name ,id)
    {
        super(name);
        this.id=id
    }

    getbatch()
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

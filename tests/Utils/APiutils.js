class APiutils
{
    constructor(apicontext,loginpayload)
    {
        this.apicontext=apicontext;
        this.loginpayload=loginpayload;
    }

    async getToken()
    {   
        //login API context
        const apiresponse =await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", //apicontext.post > Sends HTTP(S) POST request and returns its response.
            {
            data:this.loginpayload
            }); 
            const responsejson=await apiresponse.json();
            const token= responsejson.token;
            console.log(token);
            return token;
    }

    //create new API context for >create order 
    async CreateOrder(orderpayload)
    {
        let response={}
        response.token=await this.getToken();
        const orderresponse=await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderpayload,
        headers:
        {
        'content-type': 'application/json',
        'authorization':response.token,
        }
    })
    const orderresponsejson=await orderresponse.json();
    console.log('orderresponse :',orderresponsejson);
    const odrId= orderresponsejson.orders[0];
    response.odrId=odrId;
    return response;
}    
}

module.exports={APiutils};
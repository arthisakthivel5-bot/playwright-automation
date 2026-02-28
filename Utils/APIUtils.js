class APIUtils {
    constructor(apiContext,loginPayLoad){

        this.apiContext = apiContext
        this.loginPayLoad = loginPayLoad
    }
    async getToken()

    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    
            data:this.loginPayLoad
        })
    
        const loginResponseJson = await loginResponse.json();
        const apiToken = loginResponseJson.token;
        console.log(apiToken)
        return apiToken;
    }

    async createOrder(orderPayLoad)
    {
    let response = {};
    response.apiToken = await this.getToken();
    const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{

        data:orderPayLoad,
        headers:{
            "authorization": response.apiToken,
            "content-type": "application/json"
        }
    })
    const orderResponseJson = await orderResponse.json();
    const apiOrderID = orderResponseJson.orders[0];
    console.log(apiOrderID)
    response.apiOrderID = apiOrderID
    return response

    }

}
module.exports = {APIUtils};





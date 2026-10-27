const base = require('@playwright/test');


exports.customTest = base.test.extend(
    {
        testDataforOrder: {
            UserEmail: "onkar11@test.com",
            UserPass: "Onkar1999",
            productName: "ZARA COAT 3",
            Cvv: "123",
            CardName: "onkar sawant",
            country: "ind"
        }
    }
)
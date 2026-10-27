import {test as baseTest} from '@playwright/test'
interface testDataforOrder {
    UserEmail: string;
    UserPass: string;
    productName: string;
    Cvv: string;
    CardName: string;
    country: string;
}

export const customTest = baseTest.extend<{testDataforOrder:testDataforOrder}>(
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
const base = require("@playwright/test")
exports.customtest = base.test.extend(

    {
        testDataforOrder: {
            email: "anish@gmail.com",
            pwd: "Anish@1996",
            productName: "ADIDAS ORIGINAL"
        }

    }
)
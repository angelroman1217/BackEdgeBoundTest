const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    const products = {
        "product": [{
            "name": "Samsung Galaxy",
            "category": "electronics"
        }, {
            "name": "Motorola V3",
            "category": "electronics"
        }, {
            "name": "Iphone 12",
            "category": "electronics"
        }, {
            "name": "Skippy",
            "category": "grocery store"
        }]
    }
    res.json(products)
})

app.listen(5000, () => { console.log("Server started on port 5000") })
const express = require('express')
const app = express()
const Product = require('./models/product.model.js');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js'); 

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
    app.use("/api/products" ,productRoute); 



app.get('/', (req, res) => {
 res.send("ello from node api updated")  
});





mongoose.connect("mongodb+srv://seanmanyukwi:FyCQpAVDEGyGIbeh@bckendapi.urgmg.mongodb.net/Node2?retryWrites=true&w=majority&appName=BckendAPI")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
})
.catch(() => {
    console.log("Connection failed!")
})


     
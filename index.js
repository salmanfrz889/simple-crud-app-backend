const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

//app.get('/api/products', async (req, res) => {
  //  try {
    //    const product = await Product.find({});
      //  res.status(200).json(product);
    //} catch (error) {
      //  res.status(500).json({message: error.message})
    //}
//});

/*app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});*/

/*app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});*/

mongoose.connect("mongodb://localhost:27017/product")
 .then(() => {
    console.log("connected to database!");
    app.listen(3009, () => {
        console.log('server is running on port 3009');
    });    
})
 .catch(() => {
    console.log("connection failed!");
});


//Update a Product
/*app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});*/

// delete a product

/*app.delete('/api/products/:id', async (req,res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product delete successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});*/
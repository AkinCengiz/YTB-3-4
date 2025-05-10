const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//CREATE PRODUCT START

router.post("/", async(req,res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//CREATE PRODUCT END
//GET PRODUCTS START

router.get("/",async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET PRODUCTS END

//GET BY ID PRODUCT START

router.get("/:productid", async(req,res) => {
    try {
        const productId = req.params.productid;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({error : "Product not found..."});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET BY ID PRODUCT END

//UPDATE PRODUCT START

router.put("/:productid",async(req,res) => {
    try {
        const productId = req.params.productid;
        const productInfo = req.body;

        const selectedProduct = await Product.findById(productId);
        if(!selectedProduct){
            return res.status(404).json({error : "Product not found..."});
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId,productInfo);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//UPDATE PRODUCT END

//DELETE PRODUCT START

router.delete("/:productid", async (req,res) => {
    try {
        const productId = req.params.productid;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if(!deletedProduct){
            return res.status(404).json({error : "Product not found..."});
        }
        res.status(200).json({message : "Product delete successfully..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//DELETE PRODUCT END

//GET BY CATEGORY PRODUCTS START

router.get("/category/:categoryid",async(req,res) => {
    try {
        const categoryId = req.params.categoryid;
        const products = await Product.find();
        const productsByCategory = products.filter(product => product.category == categoryId);
        console.log(productsByCategory)
        res.status(200).json(productsByCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET BY CATEGORY PRODUCTS END

//GET BY BRAND PRODUCTS START

router.get("/brand/:brand",async(req,res) => {
    try {
        const brand = req.params.brand;
        const products = await Product.find();
        const brandByProduct = products.filter(product => product.brand === brand);
        res.status(200).json(brandByProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET BY BRAND PRODUCTS END
//greater
//GET BY GREATER THAN PRICE PRODUCTS START

router.get("/greater/:price",async (req,res) => {
    try {
        const price = Number(req.params.price);
        const products = await Product.find();
        const greaterThanPriceProducts = products.filter(product => product.price >= price);
        res.status(200).json(greaterThanPriceProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET BY GREATER THAN PRICE PRODUCTS END

module.exports = router;
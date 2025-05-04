const express = require("express");
const router = express.Router();


//ROUTE Dosyalarını import (içe aktarıyoruz) ediyoruz
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");



//ROUTE bilgilerini url yolu olarak tanımlıyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);


module.exports = router;
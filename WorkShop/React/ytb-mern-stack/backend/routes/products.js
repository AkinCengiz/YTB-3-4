const express = require("express");
const router = express.Router();

router.get("/", async (req,res) => {
    res.send("Product tablosundaki ürünler listelenecek...");
})




module.exports = router;
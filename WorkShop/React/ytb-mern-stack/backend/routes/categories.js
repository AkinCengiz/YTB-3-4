const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//CREATE CATEGORY START
//localhost:5000/api/categories
router.post("/",async(req,res) => {
    try {
        const {name,image} = req.body;
        const newCategory = new Category({name,image});
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})
//CREATE CATEGORY END


//GET CATEGORIES START
router.get("/",async(req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET CATEGORIES END
//GET CATEGORY BY ID START

router.get("/:categoryid",async(req,res) => {
    try {
        const categoryId = req.params.categoryid;
        try {
            const category = await Category.findById(categoryId);
            res.status(200).json(category);
        } catch (error) {
            console.log(error);
            res.status(404).json({error : "Kategori bulunamadı..."})
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//GET CATEGORY BY ID END

//UPDATE CATEGORY START

router.put("/",async (req,res) => {
    try {
        const updateCategoryInfo = req.body;
        const category = await Category.findById(updateCategoryInfo._id);
        if(!category){
            return res.status(404).json({error : "Kategori bulunamadı..."})
        }
        const updatedCategory = await Category.findByIdAndUpdate(category._id,updateCategoryInfo);
        res.status(200).json(updatedCategory)
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})

//UPDATE CATEGORY END

//DELETE CATEGORY START
router.delete("/",async (req,res) => {
    try {
        const deleteCategoryInfo = req.body;
        const deletedCategory = await Category.findByIdAndDelete(deleteCategoryInfo._id);
        if(!deletedCategory){
            return res.status(404).json({error : "Kategori bulunamadı..."})
        }
        res.status(200).json(deletedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server\'a bağlanırken hata oluştu..."})
    }
})
//DELETE CATEGORY END

module.exports = router;
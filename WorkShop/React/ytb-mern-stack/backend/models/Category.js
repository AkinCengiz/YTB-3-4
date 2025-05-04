//MongoDB üzerinde işlem yapabilmek için mongoose pakedi import edildi.
const mongoose = require("mongoose");


//Category tablosu (Collection) yapısı oluşturuldu
const categorySchema = new mongoose.Schema(
    {
        name : { type : String, required : true},
        image : {type : String, required : true}
    },
    {
        timestamps : true
    }
);

//Category tablosu oluşturuldu ve şeması tanımlandı
const Category = mongoose.model("Category",categorySchema);
module.exports = Category;
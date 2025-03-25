//JSON FİLES
//xml file
/**
 * 
 * <address>
 *  <city>İstanbul</city>
 *  <town>Eyüp</town>
 *  <district>Kemerburgaz</district>
 * </address>
 * 
 * 
 */

//JSON VERİ 
/**
 *  1 - Veriler key:value değer çifti olarak tutulur
 *  2 - Verileri birbirinden , ile ayırırız 
 *  3 - OBject türlerinin { } arasında tanımlarız
 *  4 - Array türlerini [] arasında tanımlarız
 * 
 * 
 */

let data = {
    users : [
        {
            firstname : "Akın",
            lastname : "Cengiz",
            email : "akincengiz@msn.com",
        },
        {
            firstname : "Ahmet",
            lastname : "Ulusoy",
            email : "ahmet@ulusoy.com"
        },
        {
            firstname : "Berfin",
            lastname : "Tatar",
            email : "berfin@tatar.com"
        },
        {
            firstname : "Berkay",
            lastname : "Kaya",
            email : "berkay@kaya.com"
        }
    ],
    products : [
        {
            name : "Toshiba Laptop",
            price : 15000,
            stock : 15,
            category : "Bilgisayar"
        },
        {
            name : "Samsung S24",
            price : 13000,
            stock : 13,
            category : "Cep Telefonu"
        },
        {
            name : "HP Laptop",
            price : 13000,
            stock : 13,
            category : "Bilgisayar"
        },
        {
            name : "IPhone 15",
            price : 14000,
            stock : 14,
            category : "Cep Telefonu"
        },
    ]
}

console.log(data);

//JSON.stringify() => JSON dosya yapısını json türüne uygun string bir değere çevirir.

let stringJson = JSON.stringify(data);

console.log(stringJson);

console.log(data.products);
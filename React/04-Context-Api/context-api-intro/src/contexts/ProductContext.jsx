import React, { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

function ProductContextProvider({children}) {
    const [products,setProducts] = useState([])

    useEffect(() => {
        setProducts([
            {id:1,name:"Laptop",price:32000,stock:5},
            {id:2,name:"Desktop",price:21000,stock:15},
            {id:3,name:"Samsung Telefon",price:27000,stock:25},
            {id:4,name:"IPhone Telefon",price:28000,stock:12}
        ])
    },[])
    const writeConsole = () => {
        console.log("Product context metodu");
    }
  return (
    <ProductContext.Provider value={{products,setProducts,writeConsole}}>
        {children}
    </ProductContext.Provider>
  )
}
export  {ProductContext,ProductContextProvider}
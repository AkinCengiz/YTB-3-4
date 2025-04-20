import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

function Content() {
    const {products,setProducts} = useContext(ProductContext)
    const addStock = (id) => {
        const newProduct = products.map(item => {
            if(id === item.id){
                item.stock += 1;
                return item;
            }
            return item;
        })
        setProducts(newProduct);
    }
  return (
    <div>
        <h2>Content</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            {
                products.map(product => {
                    return  <li key={product.id}>Product Name : {product.name}<button onClick={() => addStock(product.id)}>ADD</button></li>

                    
            })
            }
        </ul>
    </div>
  )
}

export default Content
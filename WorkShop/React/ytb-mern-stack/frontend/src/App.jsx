import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/AdminPages/Dashboard";
import CategoryList from "./pages/AdminPages/Category/CategoryList";
import CreateCategory from "./pages/AdminPages/Category/CreateCategory";
import UpdateCategory from "./pages/AdminPages/Category/UpdateCategory";
import ProductList from "./pages/AdminPages/Product/ProductList";
import CreateProduct from "./pages/AdminPages/Product/CreateProduct";
import UpdateProduct from "./pages/AdminPages/Product/UpdateProduct";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {


  return (
    <div className='app'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/admin/">
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="categories/create" element={<CreateCategory />} />
          <Route path="categories/update/:id" element={<UpdateCategory />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/update/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

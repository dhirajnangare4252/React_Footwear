import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Admin from "./Components/admin/Admin";
import Dashboard from "./Components/admin/Dashboard";
import Layout from "./Components/admin/Layout";
import Cart from "./Components/Cart";
import Products from "./Components/admin/Products";
import AddProducts from "./Components/admin/AddProducts";
import Sales from "./Components/admin/Sales";
import ProductDetails from "./Components/ProductDetails";
import CheckOut from "./Components/CheckOut";
import AdminRegister from "./Components/admin/AdminRegister";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/all-products"} element={<AllProducts/>}></Route>
          <Route path={"/about"} element={<About/>}></Route>
          <Route path={"/contact"} element={<Contact/>}></Route>
          {/* <Route path={"/check-out"} element={<CheckOut/>}></Route> */}
          <Route path={"/cart"} element={<Cart/>}></Route>
          <Route path={"/login"} element={<Admin/>}></Route>
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/register" element={<AdminRegister/>}></Route>


          <Route path="/admin" element={<Layout/>}>
            <Route index element={<Dashboard/>} />                             
            <Route path="/admin/products" element={<Products/>} />                             
            <Route path="/admin/addproducts" element={<AddProducts/>} />
            <Route path={"/admin/addproducts/:id"} element={<AddProducts />} />                             
            <Route path="/admin/sales" element={<Sales/>} />
          </Route>

          <Route path="/" element={<ProtectedRoutes />}>
                  <Route path="/admin" element={<Layout/>} />
          </Route> 


        </Routes>
        <Footer />
      </BrowserRouter>                                           
  
    </div>
  );
}

export default App;

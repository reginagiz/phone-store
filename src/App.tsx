import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product_details/ProductDetails";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="api/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const url = "react-admin-dashboard-with-material-ui"
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          {/* Render Home component */}
          <Route exact path="/" element={<Home />} />

          {/* Render UserList component */}
          <Route path="/users" element={<UserList />} />

          {/* Render User component */}
          <Route path="/user/:userId" element={<User />} />

          {/* Render NewUser component */}
          <Route path="/newUser" element={<NewUser />} />

          {/* Render ProductList component */}
          <Route path="/products" element={<ProductList />} />

          {/* Render Product component */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Render NewProduct component */}
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
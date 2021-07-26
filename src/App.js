import Navbar from "./componets/navbar/Navbar";
import Sidebar from "./componets/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from "./pages/users/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/Newuser";
import Product from "./pages/products/Product";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router >
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <Newuser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productsId">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




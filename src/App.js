import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Navcomp from './components/Navbar/Navcomp';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Productdetails from './components/Product/Productdetails';
import Cart from './pages/Cart';
import { CartProvider} from "react-use-cart";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Navcomp></Navcomp>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/service" element={
        <RequireAuth>
          <Service></Service>
        </RequireAuth>

      }></Route>
      <Route path="/Product" element={
      <RequireAuth>
        <Product></Product>
      </RequireAuth>
      
      }></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/product/:productId" element={<Productdetails></Productdetails>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/cart' element={
          <RequireAuth>
      <Cart></Cart>
      </RequireAuth>

      }></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path='/contact' element={<Contact></Contact>}> </Route>



      </Routes>
      
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

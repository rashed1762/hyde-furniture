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

function App() {
  return (
    <div className="App">
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
      <Route path="/Product" element={<Product></Product>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>



      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products'
import Product from'./components/Product/Product'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import SellerSignup from './components/SellerSignup/SellerSignup';
import SellerSignin from './components/SellerSignin/SellerSignin';
import SellerHome from './components/SellerHome/SellerHome';
import AddProduct from './components/AddProduct/AddProduct';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import Confirmation from './components/Confirmation/Confirmation';
import ConfirmationSeller from './components/ConfirmationSeller/ConfirmationSeller';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
            <Route exact path='/Ecommerce' element={< Home />}></Route>
            <Route exact path='/products' element={< Products />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/products/:id' element={< Product />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
            <Route exact path='/error' element={< Error />}></Route>
            <Route exact path='/:error' element={< Error />}></Route>
            <Route exact path='/Ecommerce/:error' element={< Error />}></Route>
            <Route exact path='/signin' element={< Signin />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/sellersignup' element={< SellerSignup />}></Route>
            <Route exact path='/sellersignin' element={< SellerSignin />}></Route>
            <Route exact path='/sellerhome' element={< SellerHome />}></Route>
            <Route exact path='/addproduct' element={< AddProduct />}></Route>
            <Route exact path='/addnewproduct' element={< AddNewProduct />}></Route>
            <Route exact path='/confirm' element={< Confirmation />}></Route>
            <Route exact path='/confirmseller' element={< ConfirmationSeller />}></Route>
        </Routes>
        <Footer />
      </Router>     
    </div>
  );
}

export default App;

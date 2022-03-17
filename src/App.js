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
            <Route exact path='/Ecommerce/products/:id' element={< Product />}></Route>
            <Route exact path='/products/products/:id' element={< Product />}></Route>
            <Route exact path='/cart/products/:id' element={< Product />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
            <Route exact path='/:error' element={< Error />}></Route>
            <Route exact path='/Ecommerce/:id' element={< Error />}></Route>
            <Route exact path='/Ecommerce/error' element={< Error />}></Route>
        </Routes>
        <Footer />
      </Router>     
    </div>
  );
}

export default App;

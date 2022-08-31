import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nosotros from './pages/Nosotros';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer title="Productos" />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<h1> ERROR 404 - No se ha encontrado la pagina.</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

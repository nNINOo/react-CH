import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nosotros from './pages/Nosotros';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer title="Productos" />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="/productos/:id" element={<Detail />} />
        <Route path="*" element={<h1> ERROR 404 - No se ha encontrado la pagina.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

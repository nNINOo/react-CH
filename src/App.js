import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <div className='main-container'>
        <ItemListContainer title="Productos Mas Comprados" />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewProduct from './components/ViewProduct';
import ProductNavbar from './components/ProductNavbar';

function App() {
  return (
    <div>
      <ProductNavbar/>
      <AddProduct/>
      <SearchProduct/>
      <ViewProduct/>
    </div>
  );
}

export default App;

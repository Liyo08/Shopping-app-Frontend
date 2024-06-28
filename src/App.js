import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div>
      <AddProduct/>
      <SearchProduct/>
      <ViewProduct/>
    </div>
  );
}

export default App;

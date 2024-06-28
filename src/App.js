import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ViewProduct from './components/ViewProduct';
import ProductNavbar from './components/ProductNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddProduct/>}/>
    <Route path='/search' element={<SearchProduct/>}/>
    <Route path='/view' element={<ViewProduct/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

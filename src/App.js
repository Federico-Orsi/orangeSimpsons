import Home from './components/Home';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import Movie from './components/Movie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ApiSimpsons from './components/ApiSimpsons';
import DetailList from './components/DetailList';
import Context from './components/Context';

function App() {
  return (
    <>
    
    <Context>
    <BrowserRouter>
    
    
    
    <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/Simpsons' element={<ApiSimpsons/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/DetailList/:idSimpson' element={<DetailList/>}/>
      <Route path='/Movie' element={<Movie/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </Context>
         
    
    </>
  );
}

export default App;

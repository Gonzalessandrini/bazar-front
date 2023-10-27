import { Products } from './components/Products'
import { SearchBox } from './components/SearchBox';
import { ProductDetail } from './components/ProductDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<SearchBox />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import LangSelector from './components/LangSelector';
import Soundboard from './pages/soundboard/Soundboard';
import GoogleAds from './components/GoogleAds';
import Links from './pages/Links';
import Band from './pages/band/Band';

//<GoogleAds slot={'1678976509'} />

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/soundboard' element={<Soundboard />} />
        <Route path='/links' element={<Links />} />
        <Route path='/band' element={<Band />} />
        <Route path='*' element={<Error error={404} />} />
      </Routes>

      <LangSelector />
    </BrowserRouter>
  );
};

export default App;

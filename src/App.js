import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import LangSelector from "./components/LangSelector";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error error={404} />} />
      </Routes>
      <LangSelector />
    </BrowserRouter>
  );
};

export default App;

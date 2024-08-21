import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import React from "react";
import { Routes, Route, Router, BrowserRouter} from 'react-router-dom'
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            {/* <Route path='*' element={<NotFound/>}/> */}
          </Routes> 
          <Footer/>       
      </BrowserRouter>
    </div>
  );
}


export default App;
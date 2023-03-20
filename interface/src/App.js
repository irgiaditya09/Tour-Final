import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Nav/Layout';
import Home from './pages/Home/Home';
import Card from './pages/Place/Card';
import Tours from './pages/Tour/Tour';
import Type from './pages/Type/Type';
// import Booking from './pages/Booking/Booking';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// import './Card.css';

// Components
// import Nav from './components/Nav/Navigation.jsx';
// import Layout from './pages/Layout';
// import Card from './pages/Card';

function App() {
  return (
    <div className="main">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home/>}/>
                <Route path="/Place" element={<Card/>}/>
                <Route path="/Tour" element={<Tours/>}/>
                <Route path="/Type" element={<Type/>}/>
                {/* <Route path="/Booking" element={<Booking/>}/> */}
              </Route>
            </Routes>
        </BrowserRouter>
        
        {/* <Home /> */}
        {/* <Card /> */}

    </div>
  )
}

export default App;

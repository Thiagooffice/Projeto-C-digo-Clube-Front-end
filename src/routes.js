import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'

import React from 'react';

export default function Rotas() {
 return (
   <Router>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/usuarios" element={<Users/>} />
       </Routes>
   </Router>
 );
}
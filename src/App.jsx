import './App.css';
import React from "react"
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route element={<Navbar/>}>
            <Route path="/beers" element={<div>All beers</div>}/>
            <Route path="/random-beer" element={<div>Random</div>}/>
            <Route path="/new-beer" element={<div>New</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

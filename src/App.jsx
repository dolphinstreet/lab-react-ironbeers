import './App.css';
import React from "react"
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Beers from './pages/Beers';
import Beer from './pages/Beer';
import RandomBeer from "./pages/RandomBeer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route element={<Navbar/>}>
            <Route path="/beers" element={<Beers/>}/>
            <Route path="/random-beer" element={<RandomBeer/>}/>
            <Route path="/new-beer" element={<div>New</div>}/>
            <Route path="/beer/:id" element={<Beer />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

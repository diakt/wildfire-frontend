import './App.css';
// import EONET from './components/EONET';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Mapping from './components/Mapping'


function App() {

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Mapping />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Mapping />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;



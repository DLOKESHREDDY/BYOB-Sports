import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourtList from './components/CourtList';
import CourtDetail from './components/CourtDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CourtList />} />
        <Route path="/court/:id" element={<CourtDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
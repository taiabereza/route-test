import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Layout' element={<Layout />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

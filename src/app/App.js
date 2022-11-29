import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/route-test' element={<Home />} />
          <Route path='/route-test/blogs' element={<Blogs />} />
          <Route path='/route-test/contact' element={<Contact />} />
          <Route path='/route-test/layout' element={<Layout />} />
          <Route path='/route-test/*' element={<NoPage />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

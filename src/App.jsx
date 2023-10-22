import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login/Login';
import './App.css';
import { UserStorage } from './useContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;

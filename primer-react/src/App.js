/*import logo from './logo.svg'; */
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactosPage from './pages/ContactosPage';
import HomePage from './pages/Homepage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Novedades' element={<NovedadesPage /> } />
          <Route path='Nosotros' element={<NosotrosPage /> } />
          <Route path='Contactos' element={<ContactosPage /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

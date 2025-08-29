import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProcessPage } from './pages/ProcessPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { VendorsPage } from './pages/VendorsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/vendors" element={<VendorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
import './App.css';

// 1 Config react router

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import NotFound from "./pages/NotFound";
import Search from './pages/Search';

// Components

import { Navbar } from './components/Navbar';
import Product from './pages/Product';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />

          {/* Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />


          {/* 7  - no match route */}
          {/* <Route path="*" element={<NotFound />} /> */}

          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

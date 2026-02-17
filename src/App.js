import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import './assets/styles/App.css';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Layout loading={loading}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

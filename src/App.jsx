import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
// import About from './pages/About';
import Contact from './pages/Contact';
// import Blog from './pages/Blog';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen dark">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

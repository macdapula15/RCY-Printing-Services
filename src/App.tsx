import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'Home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'Services' && <Services />}
        {currentPage === 'Gallery' && <Gallery />}
        {currentPage === 'Contact' && <Contact />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
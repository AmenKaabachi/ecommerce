import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Common navbar
//import Footer from './components/Footer'; // Optional footer
import Home from './pages/Home'; // Import the new Home page component
import About from './pages/About'; // Import the new About page component
import './styles/App.css'; // Import App styles

function App() {
  return (
    <Router basename="/ecommerce">
      <div>
        {/* Navbar displayed on all pages */}
        <Navbar />
        
        {/* Routing logic to switch between pages */}
        <main className="main-content" style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default Home page */}
            <Route path="/about" element={<About />} /> {/* About page */}
          </Routes>
        </main>
        
        {/* Footer displayed on all pages 
        <Footer />
        */}
      </div>
    </Router>
  );
}

export default App;

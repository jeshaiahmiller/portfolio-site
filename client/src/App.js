import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;


import Home from './pages/Home'
import NavBar from './components/NavBar/NavBar';
import ParticleComponent from './components/Particles';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar/>
      <ParticleComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App

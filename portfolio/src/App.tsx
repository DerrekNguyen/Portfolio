import Home from './pages/Home'
import NavBar from './pages/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App

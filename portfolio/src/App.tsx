import face from './assets/face.png'
import ParticleComponent from './components/Particles.js'
import './App.css'

function App() {
  return (
    <>
      <ParticleComponent />
      <div style={{ position: "relative", zIndex: 1 }}>
        <img src={face}></img>
      </div>
    </>
  )
}

export default App

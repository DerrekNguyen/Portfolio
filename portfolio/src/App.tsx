import face from './assets/face.png'
import ParticleComponent from './components/Particles.js'
import './App.css'
import './styles/landingpage.css'

function App() {
  return (
    <>
      <ParticleComponent />
      <div className='introContainer'>
        <div className='faceImg'>
          <img src={face}></img>
        </div>
        <div className='introTextContainer'>
          <p>
            Welcome to my Portfolio. You can find my projects & contacts here.
          </p>
        </div>
      </div>
    </>
  )
}

export default App

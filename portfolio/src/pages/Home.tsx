import face from '../assets/images/face.png'
import '../styles/homepage.css'
import * as motion from "motion/react-client"

function Home() {
  return (
    <>
      <div className='introContainer'>
        <motion.div
          className='faceImg'
          initial={{
            x: -15,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            x: { duration: 1 },
            opacity: { duration: 1 }
          }}
        >
          <img src={face}></img>
        </motion.div>
        <motion.div
          className='introTextContainer'
          initial={{
            x: 15,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            x: { duration: 1 },
            opacity: { duration: 1 }
          }}
        >
          <p>
            Welcome to my Portfolio. You can find my projects & contacts here.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default Home

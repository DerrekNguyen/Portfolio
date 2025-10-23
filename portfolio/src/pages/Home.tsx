import face from '../assets/images/face.png'
import '../styles/homepage.css'
import * as motion from "motion/react-client"
import GitHubIcon from "../assets/icons/GitHub.svg"
import LinkedInIcon from "../assets/icons/LinkedIn.svg"

interface ContactItemProps {
  name: string,
  image: string,
  link: string
  variants?: any,
  imageVariants?: any,
}

function ContactItem({name, image, link, variants, imageVariants }: ContactItemProps) {
  return (
    <motion.div
      variants={variants}
      className='h-[100%] aspect-square rounded-[20%] bg-[#B0A1BA] flex justify-center items-center'
      title={name}
    >
      <motion.div
        whileHover="hover"
      >
      <a
        className='h-[100%] w-[100%] flex justify-center items-center'
        href={link}
        target='_blank'
      >
        <motion.img
          className='h-[70%] w-[70%]'
          src={image}
          variants={imageVariants}
        />
      </a>
      </motion.div>
    </motion.div>
  );
}

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition:
      {
        duration: 0.5,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: { scale: 1.25}
  }

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
      <motion.div
        className='contactContainer'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactItem name="GitHub" image={GitHubIcon} link="https://github.com/DerrekNguyen" variants={itemVariants} imageVariants={imageVariants} />
        <ContactItem name="LinkedIn" image={LinkedInIcon} link="https://www.linkedin.com/in/nguyen-minh-nhat-445865330/" variants={itemVariants} imageVariants={imageVariants} />
      </motion.div>
    </>
  )
}

export default Home

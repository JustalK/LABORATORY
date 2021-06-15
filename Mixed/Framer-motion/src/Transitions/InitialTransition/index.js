import { motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: '100vh'
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    }
  },
};

const InitialTransition = props => {
return (<>
    <motion.div
      className='black-screen'
      transition={{ duration: 2, type: 'tween' }}
      initial='initial'
      animate='animate'
      variants={blackBox}>
      {props.children}
    </motion.div>
  </>)
};

export default InitialTransition

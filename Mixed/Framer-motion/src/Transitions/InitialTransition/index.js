import { motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: '100vh'
  },
  animate: {
    height: 0,
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

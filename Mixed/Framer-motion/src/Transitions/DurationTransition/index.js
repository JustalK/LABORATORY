import { motion } from 'framer-motion'

const timer = {
  exit: {
    useless: 1
  }
};

const InitialTransition = props => {
return (<>
    <motion.div
      transition={{ duration: 2.5, type: 'tween' }}
      exit='exit'
      variants={timer}>
      {props.children}
    </motion.div>
  </>)
};

export default InitialTransition

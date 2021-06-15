import { motion } from "framer-motion"

const blackBox = {
  initial: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    bottom: 0,
    background: 'black',
    'z-index': 20
  },
  animate: {
    height: 0,
  },
};

const InitialTransition = props => {
return (<>
    <motion.div
      transition={{ duration: 2, type: "tween" }}
      initial="initial"
      animate="animate"
      variants={blackBox}>
      {props.children}
    </motion.div>
  </>)
};

export default InitialTransition

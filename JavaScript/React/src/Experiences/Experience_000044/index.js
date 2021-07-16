import React from "react";
import { connect } from 'react-redux'

const Experience = ({ count, increaseRedesign, decreaseRedesign }) => {
  return (
    <div>
      <button onClick={() => increaseRedesign()}>Increment</button>
      <button onClick={() => decreaseRedesign({ type: 'DECREASE' })}>Decrease</button>
      global count: {count}
    </div>
  );
}

const states = (state, ownProps) => {
  return {count: state}
}

const dispatcher = dispatch => ({
  increaseRedesign: () => dispatch({ type: 'INCREASE' }),
  decreaseRedesign: (type) => dispatch(type)
})

export default connect(states, dispatcher)(Experience);

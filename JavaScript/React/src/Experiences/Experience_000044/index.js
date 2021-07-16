import React from "react";
import { connect } from 'react-redux'

const Experience = ({ count, increaseRedesign }) => {
  return (
    <div>
      <button onClick={() => increaseRedesign()}>Increment</button>
      global count: {count}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {count: state}
}

const mapDispatchToProps = dispatch => ({
  increaseRedesign: () => dispatch({ type: 'INCREASE' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Experience);

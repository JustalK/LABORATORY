import React from "react";
import Children from './Children'
import AnotherChildren from './AnotherChildren'

export default class Experience extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('test')
    this.setState((state, props) => ({count: state.count + 1}))
  }

  componentWillUnmount() {
    this.setState({count: this.state.count + 1})
  }

  handleClick(multiple) {
    this.setState({count: this.state.count + 1 * multiple})
  }

  render() {
    console.log('re-render')
    return (<div>
      <button onClick={this.handleClick.bind(this, 10)}>Increase count</button>
      <div>Count: {this.state.count}</div>
      <Children />
      <AnotherChildren count={this.state.count} />
    </div>)
  }
}

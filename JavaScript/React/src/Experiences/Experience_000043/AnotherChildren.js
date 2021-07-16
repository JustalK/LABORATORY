import React from 'react'

export default class AnotherChildren extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: props.count * 2
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.count !== prevProps.count) {
      this.setState({val: this.props.count * 2})
    }
  }

  render() {
    return (<div>{this.state.val}</div>)
  }
}

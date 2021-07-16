import React from 'react'

export default class Children extends React.PureComponent {
  render() {
    console.log('render children')
    return (<div>
      This Children will render only one time because of Pure
    </div>)
  }
}

import ReactDOM from 'react-dom'

const Modal = props => {

  return ReactDOM.createPortal(
    props.children,
    props.parent.current
  )
}

export default Modal;

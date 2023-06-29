import "./style.css"

const Message = ({message, type}) => {
  return (
    <p className={"msg " + (type ? "success" : "error")}>{message}</p>
  )
}

export default Message
// Hooks
import { useEffect, useState } from "react"

// Components
import {Task} from "./components/Task/"

// Styles
import "./app.css"
import "./listStyle.css"
import Message from "./components/Message"

function App() {

  // States
  const [task, setTask] = useState("")
  const [tasksArr, setTasksArr] = useState([
    "Levar os pets para passear",
    "Estudar React",
    "Visitar https://alissondofront.vercel.app"
  ])
  const [showMessage, setShowMessage] = useState(false)
  const [msg, setMsg] = useState()

  const handleAddTaskt = e => {
    e.preventDefault()

    // Validating task
    if(task.trim() === ""){
      setMsg(["Digite uma tarefa antes de adicionar!", false])
      setShowMessage(true)
      return
    }

    const alreadyExist = tasksArr.includes(task)

    if(alreadyExist){
      setMsg(["Atividade já existe na lista!", false])
      setTask("")
      setShowMessage(true)
      return
    }

    // add task
    setTasksArr([...tasksArr, task])
    setMsg(["Atividade adicionada com sucesso!", true])
    setShowMessage(true)
    // clear inputs
    setTask("")

  }

  const handleRemoveTask = task => {
    const newTaskArr = tasksArr.filter( item => item != task)
    setTasksArr(newTaskArr)
    setMsg(["Atividade excluída com sucesso", true])
    setShowMessage(true)
  }

  const turnMode = () => {
    // change dark/light mode
    document.querySelector("body").classList.toggle("black-mode")
  }

  useEffect(()=>{
      setTimeout(()=>{
        setShowMessage(false)
      }, 4000)
  }, [showMessage])

  return (
    <div className="container">
      <header>
        <h1>To-do List</h1>
        <button className="modeBtn" onClick={turnMode}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.4746C18.1545 12.7309 17.2575 12.8687 16.3284 12.8687C11.249 12.8687 7.13135 8.75101 7.13135 3.67163C7.13135 2.74246 7.26914 1.84548 7.5254 1C3.74896 2.14461 1 5.65277 1 9.80298C1 14.8824 5.11765 19 10.197 19C14.3472 19 17.8554 16.251 19 12.4746Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </header>

      <form onSubmit={e => handleAddTaskt(e)}>
        <h3>Digite sua tarefa</h3>
        <div className="alignInputs">
          <input type="text" className="insertTask" placeholder="Lavar a louça..." onChange={e => setTask(e.target.value)} value={task}/>
          <button type="submit" className="addTask">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10.6H20.5M10.6 20.5V1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
          </button>
        </div>
        {
          showMessage && (
            <Message message={msg[0]} type={msg[1]}/>
          )
        }
      </form>

      <div className="tasks">
        <h3>Tarefas do dia:</h3>
        <ul>
          {
            (tasksArr.length > 0) ? (
              tasksArr.map(task =>(
                <li key={task}>
                  <Task activity={task}/>
                  <button className="deleteTask" onClick={() => handleRemoveTask(task)}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V4M3 4H6M3 4H1M17 4H19M17 4H14M14 4H6M14 4V3C14 1.89543 13.1046 1 12 1H8C6.89543 1 6 1.89543 6 3V4" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>  
                </li>
              ))
            ):(
              <li><p>Não há itens na lista</p></li>
            )
          }
          
        </ul>
      </div>
    </div>
  )
}

export default App

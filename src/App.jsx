import {Task} from "./components/Task/"
import "./app.css"
import "./style.css"
// import { createElement, useState } from "react"
function App() {
  // const [tarefas, setTarefas] = useState([])
  function add(target){
    let taskSection = document.querySelector(".tasks")
    let task = document.createElement("div")
    task.innerHTML = `<div class="task">
    <label class="checkLabel">
        <input type="checkbox"/>
        <span class="checkMarker">
            <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5L6.5 11L15.5 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <p>${target}</p>
    </label>
    <button class="deleteTask">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V4M3 4H6M3 4H1M17 4H19M17 4H14M14 4H6M14 4V3C14 1.89543 13.1046 1 12 1H8C6.89543 1 6 1.89543 6 3V4" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button></div>`
    taskSection.appendChild(task)
  }
  function addTask(e){
    e.preventDefault()
    const tarefa = document.querySelector(".insertTask")
    // setTarefas(tarefa.value)
    add(tarefa.value)
    tarefa.value = ""
  }
  function turnMode(){
    document.querySelector("body").classList.toggle("black-mode")
  }
  return (
    <div className="container">
      <header>
        <h1>To-do List</h1>
        <button className="modeBtn" onClick={turnMode}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.4746C18.1545 12.7309 17.2575 12.8687 16.3284 12.8687C11.249 12.8687 7.13135 8.75101 7.13135 3.67163C7.13135 2.74246 7.26914 1.84548 7.5254 1C3.74896 2.14461 1 5.65277 1 9.80298C1 14.8824 5.11765 19 10.197 19C14.3472 19 17.8554 16.251 19 12.4746Z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </header>
      <form>
        <h3>Digite sua tarefa</h3>
        <div className="alignInputs">
          <input type="text" className="insertTask" placeholder="Lavar a louça..."/>
          <button type="submit" className="addTask" onClick={(e) => addTask(e)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10.6H20.5M10.6 20.5V1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
          </button>
        </div>
      </form>
      <div className="tasks">
        <h3>Tarefas do dia:</h3>
      </div>
    </div>
  )
}

export default App

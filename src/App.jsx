import {Task} from "./components/Task/"
import "./app.css"
function App() {

  return (
    <div className="container">
      <header>
        <h1>To-do List</h1>
        <button className="modeBtn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.4746C18.1545 12.7309 17.2575 12.8687 16.3284 12.8687C11.249 12.8687 7.13135 8.75101 7.13135 3.67163C7.13135 2.74246 7.26914 1.84548 7.5254 1C3.74896 2.14461 1 5.65277 1 9.80298C1 14.8824 5.11765 19 10.197 19C14.3472 19 17.8554 16.251 19 12.4746Z" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </header>
      <form>
        <h3>Digite sua tarefa</h3>
        <div className="alignInputs">
          <input type="text" className="insertTask" placeholder="Lavar a louça..."/>
          <button type="submit" className="addTask" onClick={(e) => e.preventDefault()}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10.6H20.5M10.6 20.5V1.5" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>
          </button>
        </div>
      </form>
      <div className="tasks">
        <h3>Tarefas do dia:</h3>
        <Task activity="Arrumar o quarto"/>
        <Task activity="Lavar a louça"/>
      </div>
    </div>
  )
}

export default App

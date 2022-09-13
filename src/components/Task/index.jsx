// import "./style.css"
export function Task({activity}){
    return(
        <div className="task">
            <label className="checkLabel">
                <input type="checkbox"/>
                <span className="checkMarker">
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5L6.5 11L15.5 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <p>{activity}</p>
            </label>
            <button className="deleteTask">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V4M3 4H6M3 4H1M17 4H19M17 4H14M14 4H6M14 4V3C14 1.89543 13.1046 1 12 1H8C6.89543 1 6 1.89543 6 3V4" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
        </div>
    )
}
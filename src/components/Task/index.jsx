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
        </div>
    )
}
import React from "react"
import {  useSelector } from "react-redux";

const DisplayHistory = ()=>{

    const history = useSelector((state)=> state.history)

    return(
        <div>
            {/* {JSON.stringify(history)} */}
            <h1>Search History</h1>
            {
                history.map((h)=><p>{h.word}</p>)  
            }
        </div>
    )
}

export default DisplayHistory
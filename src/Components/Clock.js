import React from "react";




const Clock = (time) => {
    console.log(time);
    return ( 
        <div className = "timer-container">
            <p className = "timer-seconds">{time.timerSeconds} </p>
        </div> 
     );
}


 
export default Clock;
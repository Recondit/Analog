import "./App.css"
import React from 'react';
import Clock from "./Components/Clock";
import { useState, useRef } from "react";



function App() {
  const [timerState , setTimerState] = React.useState("paused");
  const intervalId = useRef(0);

  const [seconds , updateSeconds] = useState(0);
  var time = 0;
  var whileResumeTime = 0;
  const isRunning = timerState === "running";
  const isPaused = timerState === "paused";

  

  const startTime = () => {
    time = Date.now();
    intervalId.current = setInterval(() => {updateSeconds(Math.floor((Date.now() - time)/1000))} , 500);
    setTimerState("running");
  }

  const stopTime = () => {
    time = Date.now();
    clearInterval(intervalId.current);
    intervalId.current = 0;
    intervalId.current = setInterval(() => {whileResumeTime = Date.now()} , 100);
    setTimerState("paused");
  };

  const resumeTime = () => {
    clearInterval(intervalId.current);
    intervalId.current = 0;
    time = whileResumeTime + time;
    intervalId.current = setInterval(() => {updateSeconds(Math.floor((Date.now() - time)/1000))} , 500);
  }

  const clearTime = () => {
    updateSeconds(0);
  };

  

  

  //Clock component just gets a number and displays it on the screen
  return (<div className = "App">
    <Clock timerSeconds= {seconds}/>
    <div>
      {isPaused && <button className = "StartButton" onClick={startTime}> Start</button>}
    </div>
    <div>
    {isRunning && <button onClick={stopTime}>Stop timer</button>}
    </div>
    <div>
     {isPaused && !!seconds && <button onClick={resumeTime}>Resume timer</button>}
    </div>
    <div>
     {!!seconds && isPaused && <button onClick={clearTime}>Clear timer</button>}
    </div>
    </div>);

}

export default App;

import React, { useState } from "react";

function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  // const [pause,setPause] = useState(false)


  if (sec === 60) {
    setMin(min + 1);
    setSec(0);
  }

  if (min === 60) {
    setHrs(hrs + 1);
    setMin(0);
  }

  if (hrs === 24 && min === 59 && sec === 59) {
    setHrs(0);
    setMin(0);
    setSec(0);
  }

    setTimeout(() => {
      setSec(sec + 1);
    }, 1000);

  function handleStart(){
    setSec(sec+1)
  }

  return (
    <div>
      <h1>StopWatch</h1>
      <div>
        {hrs}:{min}:{sec}
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button>Pasue</button>
        <button>Restart</button>
      </div>
    </div>
  );
}

export default Stopwatch;

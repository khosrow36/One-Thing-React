import { useState, useEffect } from 'react'

//compontents
import Start from './compontents/Start';
import Realization from './compontents/Realization';
import Done from './compontents/Done';

//styles
import './App.css'

function App() {
  const [mode, setMode] = useState("start");
  const [chosenThing, setChosenThing] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if(chosenThing) {
      setMode("realization");
    }
  },[chosenThing])

  useEffect(() => {
    if(isDone === true) {
      setMode("done");
    }
  }, [isDone])

  return (
    <div>
      {mode==='start' && <Start setChosenThing={setChosenThing} />}
      {mode==='realization' && <Realization thing={chosenThing} setIsDone={setIsDone} />}
      {mode==='done' && <Done setMode={setMode} setChosenThing={setChosenThing} setIsDone={setIsDone} />}
    </div>

  )
}

export default App

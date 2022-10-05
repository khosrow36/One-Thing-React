import { useState, useEffect } from 'react'

//compontents
import Start from './compontents/Start';

//styles
import './App.css'

function App() {
  const [mode, setMode] = useState("start");
  const [chosenThing, setChosenThing] = useState("");

  useEffect(() => {
    if(chosenThing) {
      setMode("realization");
    }
  },[chosenThing])

  
  return (
    <div>
      {mode==='start' && <Start setChosenThing={setChosenThing} />}


    </div>

  )
}

export default App

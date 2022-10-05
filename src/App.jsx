import { useState } from 'react'

//compontents
import Start from './compontents/Start';

//styles
import './App.css'

function App() {
  const [mode, setMode] = useState("start");
  const [chosenThing, setChosenThing] = useState("");

  const handleThingChoose = value => {
    setChosenThing(thing);
  }

  return (
    <div>
      {mode==='start' && <Start setChosenThing={setChosenThing} />}
    </div>
  )
}

export default App

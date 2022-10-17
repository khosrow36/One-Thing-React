import { useState, useEffect } from "react";

//components
import Start from "./components/Start";
import Realization from "./components/Realization";
import Done from "./components/Done";

//styles
import "./App.css";

function App() {
  const [mode, setMode] = useState("start");
  const [chosenThing, setChosenThing] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (chosenThing) {
      setMode("realization");
    }
  }, [chosenThing]);

  useEffect(() => {
    if (isDone === true) {
      setMode("done");
    }
  }, [isDone]);

  return (
    <div>
      {mode === "start" && <Start setChosenThing={setChosenThing} />}
      {mode === "realization" && (
        <Realization thing={chosenThing} setIsDone={setIsDone} />
      )}
      {mode === "done" && (
        <Done
          setMode={setMode}
          setChosenThing={setChosenThing}
          setIsDone={setIsDone}
        />
      )}
    </div>
  );
}

export default App;

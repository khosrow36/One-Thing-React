export default function Done({ setMode, setChosenThing, setIsDone }) {
  const handleSubmit = () => {
    setChosenThing("");
    setIsDone(false);
    setMode("start");
  };

  return (
    <div>
      <h1>Congratulations and BRAVO!</h1>
      <h2>Do you want to set antoher One Thing?</h2>
      <button onClick={handleSubmit}>Of course!</button>
    </div>
  )
}

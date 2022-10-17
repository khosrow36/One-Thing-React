export default function Realization({ thing, setIsDone }) {
  const handleSubmit = () => {
    setIsDone(true);
  };
  return (
    <div>
      <h1>Your One Thing is:</h1>
      <p>{thing}</p>
      <button onClick={handleSubmit}>Done!</button>
    </div>
  );
}

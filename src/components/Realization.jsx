export default function Realization({ thing, setIsDone }) {
  const handleSubmit = () => {
    setIsDone(true);
  };
  return (
    <div>
      <h1>Your One Thing is:</h1>
      <div className="the-thing">
        <p>{thing}</p>
      </div>
      <button onClick={handleSubmit}>Done!</button>
    </div>
  );
}

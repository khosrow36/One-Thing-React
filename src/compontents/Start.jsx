import { useState } from 'react'

export default function Start({setChosenThing}) {
  const [theThing, setTheThing] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setChosenThing(theThing);
  }
  return (
    <div>
      <h1>What is your one thing?</h1>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={theThing} 
        onChange={(e) =>setTheThing(e.target.value)}  
      />
        <button>Confirm</button>
      </form>
    </div>
  )
}

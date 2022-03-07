import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('TimLee')
  const onSubmit = () => {
    alert('submitted')
  }

  const onKeyUp = e => {
    //Enter 누르면
    if (e.keyCode === 13) onSubmit()
  }

  const updateText = () => {
    setText('New TimLee')
    console.log(text)
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>

      <br />
      <br />
      <br />

      <span></span>
      <button onClick={updateText}>Update</button>
    </div>
  )
}

export default App

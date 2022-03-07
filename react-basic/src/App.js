import React from 'react'

function App() {
  const onSubmit = () => {
    alert('submitted')
  }

  const onKeyUp = e => {
    //Enter 누르면
    if (e.keyCode === 13) onSubmit()
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import BtnCounter from './btnCounter'

function App() {
  const [condition, setCondidtion] = useState(false);
  const toggle = () => setCondidtion(!condition);
  const renderCondition = condition ? 'true' : 'false';

  return (
    <div className="App">
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App

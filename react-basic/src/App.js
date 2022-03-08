import React, { useEffect, useState } from 'react'
import BtnCounter from './btnCounter'

function App() {
  const [btnName, setBtnName] = useState('클릭2');
  const clickBtn = () => {
    setBtnName('클릭3');
  }
  return (
    <div className="App">
      <BtnCounter click="클릭1"></BtnCounter>
      <BtnCounter ></BtnCounter>
      <BtnCounter click={btnName}></BtnCounter>
      <button onClick={clickBtn}>누르면btnName바뀜</button>
    </div>
  )
}

export default App

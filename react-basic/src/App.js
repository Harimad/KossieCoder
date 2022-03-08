import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [timLee, setTimLee] = useState(100);

  //처음 랜더링때 실행, 이후 리랜더링때 마다 실행
  useEffect(() => { console.log(`두번째 인자 없음 / count:${count}, timLee: ${timLee}`); })

   //처음 랜더링때만 실행
  useEffect(() => { console.log(`두번째 인자가 []일때 /count:${count}, timLee: ${timLee}`); }, [])

   //처음 랜더링때 실행, 이후 count값만 바뀔때마다 실행
  useEffect(() => { console.log(`두번째 인자가 [count]일때 /count:${count}, timLee: ${timLee}`); }, [count])

  return (
    <div className="App">
      <button onClick={() => {setCount(count+1)}}>count</button>
      <button onClick={() => {setTimLee(timLee+1)}}>timLee</button>
    </div>
  )
}

export default App

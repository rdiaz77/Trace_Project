import './App.css';
import React, {useState} from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter

  return(
<div>
  <h1>{counter}</h1>
  <h2>{counter}</h2>
  
</div>
  )

 
}

export default App;

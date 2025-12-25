import { useState,useCallback,useEffectEvent } from 'react' // use for hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(5);
     let add=()=>{
      setCounter(counter+1);
      console.log(counter);
    }

    let remove =()=>
    {
     if(counter>0){
    setCounter(counter-1);
    console.log(counter);
     }

    }
   
  return(
    <>
     <h1>Counter App</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={add}>Add</button>
    
    <br></br>
    <button onClick={remove}>Remove</button>
    </>
   
  )
}

export default App

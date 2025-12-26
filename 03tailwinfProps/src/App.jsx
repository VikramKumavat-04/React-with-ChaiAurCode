import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App(props) {
  
  let myobj={
    name:"vikram",
    age:24
  }
  return (
    <>
    <h1 className="bg-blue-500 text-black p-4 rounded-xl mb-4">Welcome to My App</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 rounded-xl">
      <Card channel="vikram" someobj={myobj}/>
    </div>
   
    <br></br>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 rounded-xl">
      <Card />
    </div>
  
    
   </>
  )
}

export default App

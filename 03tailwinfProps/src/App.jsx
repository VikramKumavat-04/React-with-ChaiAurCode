import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  let myobj={
    name:"vikram",
    age:24
  }
  let newarr=[1,2,3]; 
  return (
    <>
    <h1 className="bg-blue-500 text-black p-4 rounded-xl mb-4">Welcome to My App</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 rounded-xl">
      <Card username='Rock' age="21" btnText="visit me" />
    </div>
   
    <br></br>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 rounded-xl">
      <Card username='Jonny' age="24" btnText="Explore"/>
    </div>
  
    
   </>
  )
}

export default App

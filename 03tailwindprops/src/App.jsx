import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age:21
  }

  return (
    <>
     <h1 className="bg-green-40' text-black p-4" >Tailwind test</h1>
     <Card channel="chaiaurcode" someObj={myObj}>
     </Card>
    
    </>
  )
}

export default App;

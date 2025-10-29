import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const state = [
    {team:"Real Madrid",
     shirt:"white"
    },
    {team:"Barcelona",
      shirt:"blue and red"
    },
    {team:"Atletico Madrid",
      shirt:"red and white"
    }
  ]

  const {team: theBestTeam, shirt: shirtColor} = state[0];

  const sentence = `We love ${theBestTeam}, and the ${shirtColor} shirt!`;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{sentence}</p>
    </>
  )
}

export default App

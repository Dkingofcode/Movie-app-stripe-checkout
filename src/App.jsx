import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './HomeScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <HomeScreen />
        <h1>Let's build Netflix</h1>
      </div>

    </ >
  );
};

export default App;

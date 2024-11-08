import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'remoteDemo/Button'
import counterStore from 'remoteDemo/counterStore'

function App() {
  const { count } = counterStore()

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
      <h1>Vite + React on Micro-Frontend Adventures</h1>
      <h2>Host App</h2>
      <div className="card">
        <Button />
        <br />
        <br />
        <span>This is a shared state, and the button have been clicked {count} times 🎉</span>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

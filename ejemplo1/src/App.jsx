import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [eventData, setEventData] = useState(null)
  useEffect(() => {
    const eventListener = (event) => {
      setEventData(event)
      console.log(event)
    }
    window.addEventListener('click', eventListener)
    return () => {
      window.removeEventListener('click', eventListener);
      console.log('Event listener removed')
    }
  }, [])
  const handleButtonClick = () => {
    setCount(count=>count+1)
    const eventData = {message: 'Event emitted', timesptamp: new Date().getTime()};
    const customEvent = new CustomEvent('custom-event', {detail: eventData});
    window.dispatchEvent(customEvent);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleButtonClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {
        eventData && (
          <div className="event-data-container">
          <h2>Event Data</h2>
          <pre>
            {JSON.stringify(eventData, null, 2)}
          </pre>
        </div>
        )
      }
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

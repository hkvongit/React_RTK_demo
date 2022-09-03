import { useState } from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import reduxStore from './app/store'
import CakeView from "./features/cake/CakeView"
import IceCreamView from "./features/icecream/IcecreamView"
import './App.css'
import reactLogo from './assets/react.svg'
import UserView from "./features/user/UserView"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReduxStoreProvider store={reduxStore}>
        <div>
          <UserView />
          <IceCreamView />
          <CakeView />
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
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
      </ReduxStoreProvider>
    </div>
  )
}

export default App

import React from 'react'
import logo from './logo.svg'
import { Notification } from './Common/Notification/Notification'
import './App.css'

const emitAlert = () => Notification.alert('Howdy, stranger.')

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button data-testid="app__emit-alert" onClick={emitAlert}>
                    Emit Alert
                </button>
            </header>
        </div>
    )
}

export default App

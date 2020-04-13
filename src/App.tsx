import React from 'react'
import logo from './logo.svg'
import { Notification } from './Common/Notification/Notification'
import './App.css'
import { DogDetails } from './Components/DogDetails'

const emitAlert = () => Notification.alert('Howdy, stranger.')
const doBark = () => Notification.alert('Woof! Woof!')

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button data-testid="app__emit-alert" onClick={emitAlert}>
                    Emit Alert
                </button>
                <DogDetails
                    testId="app__dog-details"
                    title="Dog"
                    imageURL="https://via.placeholder.com/200x200?text=Dog%20Image"
                    onBark={doBark}
                />
            </header>
        </div>
    )
}

export default App

export const testables = {
    doBark
}

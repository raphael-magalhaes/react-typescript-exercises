import React from 'react'
import logo from './logo.svg'
import { Notification } from './Common/Notification/Notification'
import './App.css'
import { CreateBeerForm, DogDetails, Spacer } from './Components'

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
                <Spacer />
                <DogDetails
                    testId="app__dog-details"
                    title="Dog"
                    imageURL="https://via.placeholder.com/200x200?text=Dog%20Image"
                    onBark={doBark}
                />
                <Spacer />
                <CreateBeerForm />
                <Spacer height={3} />
            </header>
        </div>
    )
}

export default App

export const testables = {
    doBark
}

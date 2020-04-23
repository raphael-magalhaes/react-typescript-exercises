import React from 'react'
import logo from './logo.svg'
import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import {
    CreateBeerForm,
    CreateBeerFormikForm,
    DogDetails,
    Spacer
} from './Components'
import { Notification } from './Common/Notification/Notification'
import { useClasses } from './App.style'
import './App.css'
import { DogBreedListContainer } from './Containers'

const emitAlert = () => Notification.alert('Howdy, stranger.')
const doBark = () => Notification.alert('Woof! Woof!')

function App() {
    const theme = useTheme()
    const isMdOrLower = useMediaQuery(theme.breakpoints.down('md'))

    const styles = useClasses(isMdOrLower)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button data-testid="app__emit-alert" onClick={emitAlert}>
                    Emit Alert
                </button>
                <Spacer />
                <Grid container spacing={3}>
                    <Grid className={styles.left} item xs={12} md={12} lg={6}>
                        <DogBreedListContainer />
                    </Grid>
                    <Grid className={styles.right} item xs={12} md={12} lg={6}>
                        <DogDetails
                            testId="app__dog-details"
                            title="Dog"
                            imageURL="https://via.placeholder.com/200x200?text=Dog%20Image"
                            onBark={doBark}
                        />
                    </Grid>
                    <Grid className={styles.left} item xs={12} md={12} lg={6}>
                        <CreateBeerForm />
                    </Grid>
                    <Grid className={styles.right} item xs={12} md={12} lg={6}>
                        <CreateBeerFormikForm />
                    </Grid>
                </Grid>
                <Spacer height={3} />
            </header>
        </div>
    )
}

export default App

export const testables = {
    doBark
}

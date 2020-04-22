import React from 'react'
import { shallow } from 'enzyme'
import App, { testables } from './App'
import { Notification } from './Common/Notification'
import { DogDetails } from './Components/DogDetails'

Notification.alert = jest.fn()

const mockedTheme = {
    breakpoints: { down: jest.fn(() => '') }
}

jest.mock('@material-ui/core/styles', () => ({
    useTheme: () => mockedTheme
}))

beforeEach(() => {
    jest.clearAllMocks()
})

describe('App', () => {
    it('should have the emit alert button that calls Notification.alert() with the expected message when clicked', () => {
        // Given
        const appWrapper = shallow(<App />)
        const buttonWrapper = appWrapper.find('[data-testid="app__emit-alert"]')

        // When
        buttonWrapper.simulate('click')

        // Then
        expect(Notification.alert).toHaveBeenCalledWith('Howdy, stranger.')
    })

    it('doBark() should call Notification.alert() with the expected message', () => {
        // When
        testables.doBark()

        // Then
        expect(Notification.alert).toHaveBeenCalledWith('Woof! Woof!')
    })

    it('should have <DogDetails/>', () => {
        // Given
        const appWrapper = shallow(<App />)
        const numberOfDogDetails = appWrapper.find(DogDetails).length

        // Then
        expect(numberOfDogDetails).toBe(1)
    })

    it('should pass the doBark() to <DogDetails/> onBark prop', () => {
        // Given
        const appWrapper = shallow(<App />)
        const dogDetailsWrapper = appWrapper.find(DogDetails)

        // Then
        expect(dogDetailsWrapper).toHaveProp('onBark', testables.doBark)
    })

    it('should call theme.breakpoints.down with "md"', () => {
        // Given
        shallow(<App />)

        // Then
        expect(mockedTheme.breakpoints.down).toHaveBeenCalledWith('md')
    })
})

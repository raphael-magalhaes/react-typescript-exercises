import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Notification } from './Common/Notification'
import App, { testables } from './App'

jest.mock('./Components/DogDetails', () => {
    return {
        DogDetails: ({ onBark }: { onBark: () => {} }) => {
            onBark()
            return <div data-testid="app__dog-details"></div>
        }
    }
})

Notification.alert = jest.fn()

describe('App', () => {
    it('should have the learn react link', () => {
        // Given
        const { getByText } = render(<App />)
        const linkElement = getByText(/learn react/i)

        // Then
        expect(linkElement).toBeInTheDocument()
    })

    it('should have the emit alert button that calls Notification.alert() with the expected message when clicked', () => {
        // Given
        const { getByTestId } = render(<App />)
        const buttonElement = getByTestId('app__emit-alert')

        // When
        fireEvent.click(buttonElement)

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
        const { getByTestId } = render(<App />)
        const dogDetailsElement = getByTestId('app__dog-details')

        // Then
        expect(dogDetailsElement).toBeInTheDocument()
    })

    // FIXME: The problem is that DogDetails.doBark (not exported) and
    // testables.doBark (exported) are not the same reference. Please
    // note that DogDetails is mocked to receive and call onBark prop
    // before returning.
    // If testing-library/react is not able to achieve a test like this
    // then try using Enzyme (see https://enzymejs.github.io/enzyme/).
    it.skip('should pass the doBark() to <DogDetails/> onBark prop', () => {
        // Given
        jest.spyOn(testables, 'doBark')
        render(<App />)

        // Then
        expect(testables.doBark).toHaveBeenCalled()
    })
})

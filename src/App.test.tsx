import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { Notification } from './Common/Notification'

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
})

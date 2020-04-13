import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DogDetails } from './DogDetails'
import { Notification } from '../../Common/Notification'

Notification.alert = jest.fn()

describe('DogDetails', () => {
    it('should render title prop without changing it', () => {
        // Given
        const expectedTitle = 'Billy'
        const { getByTestId } = renderValidDogDetailsWith({
            title: expectedTitle
        })
        const titleElement = getByTestId('dog-details__title')
        const renderedTitle = titleElement?.firstChild?.nodeValue

        // Then
        expect(renderedTitle).toBe(expectedTitle)
    })

    it('should pass imageURL prop to <img/> without changing it', () => {
        // Given
        const expectedImageURL = 'url'
        const { getByTestId } = renderValidDogDetailsWith({
            imageURL: expectedImageURL
        })
        const imageElement = getByTestId('dog-details__image')
        const receivedImageURL = imageElement.getAttribute('src')

        // Then
        expect(receivedImageURL).toBe(expectedImageURL)
    })

    it('should have the bark button that calls onBark prop when clicked ', () => {
        // Given
        const onBark = jest.fn()
        const { getByTestId } = renderValidDogDetailsWith({
            onBark: onBark
        })
        const buttonElement = getByTestId('dog-details__bark-button')

        // When
        fireEvent.click(buttonElement)

        // Then
        expect(onBark).toHaveBeenCalled()
    })
})

const renderValidDogDetailsWith = ({
    title = 'Dog Title',
    imageURL = 'url',
    onBark = () => {}
}) => render(<DogDetails title={title} imageURL={imageURL} onBark={onBark} />)

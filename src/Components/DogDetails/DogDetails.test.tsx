import React from 'react'
import { shallow } from 'enzyme'
import { DogDetails } from './DogDetails'
import { Notification } from '../../Common/Notification'

Notification.alert = jest.fn()

describe('DogDetails', () => {
    it('should render without crashing', () => {
        shallow(<DogDetails title="title" imageURL="url" onBark={() => {}} />)
    })

    it('should render title prop without changing it', () => {
        // Given
        const expectedTitle = 'Billy'
        const dogDetailsWrapper = renderDogDetailsWithProps({
            title: expectedTitle
        })
        const titleWrapper = dogDetailsWrapper.find(
            '[data-testid="dog-details__title"]'
        )

        // Then
        expect(titleWrapper).toHaveText(expectedTitle)
    })

    it('should pass imageURL prop to <img/> without changing it', () => {
        // Given
        const expectedImageURL = 'url'
        const dogDetailsWrapper = renderDogDetailsWithProps({
            imageURL: expectedImageURL
        })
        const imageWrapper = dogDetailsWrapper.find(
            '[data-testid="dog-details__image"]'
        )
        const receivedImageURL = imageWrapper.prop('src')

        // Then
        expect(receivedImageURL).toBe(expectedImageURL)
    })

    it('should have the bark button that calls onBark prop when clicked', () => {
        // Given
        const doBark = jest.fn()
        const dogDetailsWrapper = renderDogDetailsWithProps({
            onBark: doBark
        })
        const buttonWrapper = dogDetailsWrapper.find(
            '[data-testid="dog-details__bark-button"]'
        )

        // When
        buttonWrapper.simulate('click')

        // Then
        expect(doBark).toHaveBeenCalled()
    })
})

const renderDogDetailsWithProps = ({
    title = 'title',
    imageURL = 'url',
    onBark = () => {}
}) => shallow(<DogDetails title={title} imageURL={imageURL} onBark={onBark} />)

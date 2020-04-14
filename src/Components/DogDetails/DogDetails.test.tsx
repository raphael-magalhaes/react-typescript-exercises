import React from 'react'
import { shallow, mount } from 'enzyme'
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
        const dogDetailsWrapper = shallowRenderDogDetailsWithProps({
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
        const dogDetailsWrapper = shallowRenderDogDetailsWithProps({
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
        const dogDetailsWrapper = shallowRenderDogDetailsWithProps({
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

    it('should have the scold button that increases the scold counter when clicked', () => {
        // Given
        const dogDetailsWrapper = mount(
            <DogDetails
                title={'title'}
                imageURL={'imageURL'}
                onBark={() => {}}
            />
        )
        const buttonWrapper = dogDetailsWrapper
            .find('[data-testid="dog-details__scold-button"]')
            .at(0)

        // When
        buttonWrapper.simulate('click')
        buttonWrapper.simulate('click')
        buttonWrapper.simulate('click')

        // Then
        expect(buttonWrapper).toHaveText('3x Scold!')
    })
})

const shallowRenderDogDetailsWithProps = ({
    title = 'title',
    imageURL = 'url',
    onBark = () => {}
}) => shallow(<DogDetails title={title} imageURL={imageURL} onBark={onBark} />)

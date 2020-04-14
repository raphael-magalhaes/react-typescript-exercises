import React from 'react'
import { shallow, mount } from 'enzyme'
import { Spacer } from './Spacer'

describe('Spacer', () => {
    it('should render without crashing', () => {
        shallow(<Spacer />)
    })

    it('should render with default prop values if no prop is provided', () => {
        // Given
        const spacerWrapper = mount(<Spacer />)
        const spacerDOMNode = spacerWrapper.getDOMNode()
        const expectedWidth = getDOMProperty(spacerDOMNode, 'width')
        const expectedHeight = getDOMProperty(spacerDOMNode, 'height')

        // Then
        expect(expectedWidth).toBe('0rem')
        expect(expectedHeight).toBe('1rem')
    })

    it('should render with provided props value if props are provided', () => {
        // Given
        const spacerWrapper = mount(
            <Spacer width={5} height={7.25} unit="px" />
        )
        const spacerDOMNode = spacerWrapper.getDOMNode()
        const expectedWidth = getDOMProperty(spacerDOMNode, 'width')
        const expectedHeight = getDOMProperty(spacerDOMNode, 'height')

        // Then
        expect(expectedWidth).toBe('5px')
        expect(expectedHeight).toBe('7.25px')
    })
})

const getDOMProperty = (node: Element, property: string) =>
    getComputedStyle(node).getPropertyValue(property)

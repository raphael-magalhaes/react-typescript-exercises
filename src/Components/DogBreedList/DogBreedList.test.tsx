import React from 'react'
import { shallow } from 'enzyme'
import { FixedSizeList } from 'react-window'
import { DogBreedList } from './DogBreedList'

const breeds = ['Border collie', 'Dalmatian']

describe('DogBreedList', () => {
    it('should render without crashing', () => {
        shallow(<DogBreedList breeds={breeds} />)
    })

    it(`should pass breeds prop to <FixedSizeList/>'s itemData prop`, () => {
        // Given
        const received = shallow(<DogBreedList breeds={breeds} />)
            .find(FixedSizeList)
            .prop('itemData')

        // Then
        expect(received).toStrictEqual(breeds)
    })

    it(`should pass breeds prop length to <FixedSizeList/>'s itemCount prop`, () => {
        // Given
        const received = shallow(<DogBreedList breeds={breeds} />)
            .find(FixedSizeList)
            .prop('itemCount')

        // Then
        expect(received).toStrictEqual(breeds.length)
    })
})

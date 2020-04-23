import React from 'react'
import { shallow } from 'enzyme'
import { DogBreedList } from './DogBreedList'
import { DogBreed } from './DogBreed/DogBreed'

const breeds = ['Border collie', 'Dalmatian']

describe('DogBreedList', () => {
    it('should render without crashing', () => {
        shallow(<DogBreedList breeds={breeds} />)
    })

    it(`should render one <DogBreed/> per entry in breeds prop, where each entry must be passed as
        the name prop to each <DogBreed/>`, () => {
        // Given
        const listItems = shallow(<DogBreedList breeds={breeds} />).find(
            DogBreed
        )
        const values = getItemsValues(listItems)

        // Then
        expect(values).toStrictEqual(breeds)
    })
})

const getItemsValues = (items: any) =>
    items.map((item: any) => item.prop('name'))

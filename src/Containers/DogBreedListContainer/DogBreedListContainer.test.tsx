import React from 'react'
import { shallow, mount, ReactWrapper } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { DogBreedListContainer } from './DogBreedListContainer'
import { DogController } from '../../controllers'
import { DogBreedList } from '../../Components'

jest.mock('../../controllers', () => ({
    DogController: {
        getAllBreeds: jest.fn()
    }
}))

describe('DogBreedListContainer', () => {
    it('should render without crashing', () => {
        shallow(<DogBreedListContainer />)
    })

    it("should pass an empty array as the <DogBreedList>'s breeds prop", () => {
        // Given
        const breeds = shallow(<DogBreedListContainer />)
            .find(DogBreedList)
            .prop('breeds')

        // Then
        expect(breeds).toStrictEqual([])
    })

    it(`should pass the result of DogController.getAllBreeds function once available as the
        <DogBreedList>'s breeds prop`, async () => {
        // Given
        const expected = ['Border collie', 'Dalmatian']
        DogController.getAllBreeds = jest.fn().mockResolvedValue(expected)
        const wrapper = await asyncMount(<DogBreedListContainer />)
        const breeds = wrapper.find(DogBreedList).prop('breeds')

        // Then
        expect(breeds).toStrictEqual(expected)
    })
})

const asyncMount = async (
    Component: React.ReactElement
): Promise<ReactWrapper> => {
    const wrapper = mount(Component)
    await act(async () => {
        await Promise.resolve(wrapper)
        wrapper.update()
    })
    return wrapper
}

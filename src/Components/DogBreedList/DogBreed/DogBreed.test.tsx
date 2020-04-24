import React from 'react'
import { shallow } from 'enzyme'
import { ListItem, ListItemText } from '@material-ui/core'
import { DogBreed } from './DogBreed'

const name = 'Border collie'
const style = {}
const index = 0

describe('DogBreed', () => {
    it('should render without crashing', () => {
        shallow(<DogBreed name={name} style={style} index={index} />)
    })

    it("should pass name prop to <ListItemText/>'s primary prop", () => {
        // Given
        const received = shallow(
            <DogBreed name={name} style={style} index={index} />
        )
            .find(ListItemText)
            .prop('primary')

        // Then
        expect(received).toBe(name)
    })

    it("should pass style prop to <ListItem/>'s style prop", () => {
        // Given
        const received = shallow(
            <DogBreed name={name} style={style} index={index} />
        )
            .find(ListItem)
            .prop('style')

        // Then
        expect(received).toBe(style)
    })

    it("should pass index prop to <ListItem/>'s key prop", () => {
        // Given
        const received = shallow(
            <DogBreed name={name} style={style} index={index} />
        )
            .find(ListItem)
            .key()

        // Then
        expect(received).toBe(String(index))
    })
})

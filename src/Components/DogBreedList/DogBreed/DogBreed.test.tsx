import React from 'react'
import { shallow } from 'enzyme'
import { DogBreed } from './DogBreed'

const name = 'Border collie'

describe('DogBreed', () => {
    it('should render without crashing', () => {
        shallow(<DogBreed name={name} />)
    })

    it('should render the name prop', () => {
        const received = shallow(<DogBreed name={name} />)
            .find('h4')
            .text()

        expect(received).toBe(name)
    })
})

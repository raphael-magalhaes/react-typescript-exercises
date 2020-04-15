import React, { ReactNode } from 'react'
import { shallow, mount } from 'enzyme'
import { CreateBeerForm } from './CreateBeerForm'

describe('CreateBeerForm', () => {
    it('should render without crashing', () => {
        shallow(<CreateBeerForm />)
    })

    it('should render the title with the correct value', () => {
        // Given
        const createBeerFormWrapper = shallow(<CreateBeerForm />)
        const titleWrapper = createBeerFormWrapper.find(
            '[data-testid="create-beer-form__title"]'
        )

        // Then
        expect(titleWrapper).toHaveProp('children', 'Create Beer')
    })

    it('should render beer name input with the correct label', () => {
        // Given
        const createBeerFormWrapper = shallow(<CreateBeerForm />)
        const beerNameInputWrapper = createBeerFormWrapper.find(
            '[data-testid="create-beer-form__beer-name-input"]'
        )

        // Then
        expect(beerNameInputWrapper).toHaveProp('label', 'Beer Name')
    })

    it('should render beer type select', () => {
        // Given
        const createBeerFormWrapper = mount(<CreateBeerForm />)
        const beerTypeSelectExists = createBeerFormWrapper.exists(
            '[data-testid="create-beer-form__beer-type-select"]'
        )

        // Then
        expect(beerTypeSelectExists).toBeTruthy()
    })

    it('should render beer type select with 3 correct dropdown options', () => {
        // Given
        const expectedDropdownOptionsValues = {
            first: {
                value: 'ale',
                children: 'Ale'
            },
            second: {
                value: 'lager',
                children: 'Lager'
            },
            third: {
                value: 'stout',
                children: 'Stout'
            }
        }
        const createBeerFormWrapper = mount(<CreateBeerForm />)
        const beerTypeSelectWrapper = createBeerFormWrapper
            .find('[data-testid="create-beer-form__beer-type-select"]')
            .at(0)
        const receivedDropdownOptions = beerTypeSelectWrapper.prop('children')
        const receivedDropdownOptionsValues = getDropdownOptionsValues(
            receivedDropdownOptions
        )

        // Then
        expect(receivedDropdownOptions).toHaveLength(3)
        expect(receivedDropdownOptionsValues).toStrictEqual(
            expectedDropdownOptionsValues
        )
    })

    it('should render beer type select label with the correct value', () => {
        // Given
        const createBeerFormWrapper = mount(<CreateBeerForm />)
        const beerTypeLabelWrapper = createBeerFormWrapper
            .find('[data-testid="create-beer-form__beer-type-label"]')
            .at(0)

        // Then
        expect(beerTypeLabelWrapper).toHaveProp('children', 'Beer Type')
    })

    it('should render has corn checkbox', () => {
        // Given
        const createBeerFormWrapper = mount(<CreateBeerForm />)
        const hasCornCheckboxExists = createBeerFormWrapper.exists(
            '[data-testid="create-beer-form__has-corn-checkbox"]'
        )

        // Then
        expect(hasCornCheckboxExists).toBeTruthy()
    })

    it('should render has corn checkbox label with the correct value', () => {
        // Given
        const createBeerFormWrapper = mount(<CreateBeerForm />)
        const hasCornCheckboxLabelWrapper = createBeerFormWrapper
            .find('[data-testid="create-beer-form__has-corn-checkbox-label"]')
            .at(0)

        // Then
        expect(hasCornCheckboxLabelWrapper).toHaveProp('label', 'Has corn')
    })

    it('should render ingredients text area with the correct label', () => {
        // Given
        const createBeerFormWrapper = shallow(<CreateBeerForm />)
        const ingredientsTextAreaWrapper = createBeerFormWrapper
            .find('[data-testid="create-beer-form__ingredients-text-area"]')
            .at(0)

        // Then
        expect(ingredientsTextAreaWrapper).toHaveProp('label', 'Ingredients')
    })
})

const getDropdownOptionsValues = (dropdownOptions: any) => ({
    first: {
        value: dropdownOptions[0].props.value,
        children: dropdownOptions[0].props.children
    },
    second: {
        value: dropdownOptions[1].props.value,
        children: dropdownOptions[1].props.children
    },
    third: {
        value: dropdownOptions[2].props.value,
        children: dropdownOptions[2].props.children
    }
})

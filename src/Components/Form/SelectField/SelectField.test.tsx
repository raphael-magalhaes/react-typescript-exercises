import React from 'react'
import { shallow, mount } from 'enzyme'
import { useField } from 'formik'
import { SelectField } from './SelectField'

jest.mock('formik', () => ({
    useField: jest.fn(() => [{ value: '' }, {}])
}))

const dropdownItems = [
    { value: 0, text: 'Value 0' },
    { value: 1, text: 'Value 1' },
    { value: 2, text: 'Value 2' }
]

const validationError = { error: 'Required field', touched: true }
const noValidationError = {
    untouched: { error: undefined, touched: false },
    touched: { error: undefined, touched: true }
}

describe('SelectField', () => {
    it('should render without crashing', () => {
        shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        )
    })

    it('should render label prop without changing it', () => {
        // Given
        const expectedLabel = 'Label'
        const receivedLabel = shallow(
            <SelectField
                name="selectField"
                label={expectedLabel}
                items={dropdownItems}
            />
        )
            .find('[data-testid="select-field__label"]')
            .text()

        // Then
        expect(receivedLabel).toBe(expectedLabel)
    })

    it('should render the select', () => {
        // Given
        const hasSelect = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        ).exists('[data-testid="select-field__select"]')

        // Then
        expect(hasSelect).toBeTruthy()
    })

    it('should use items prop to render the select options', () => {
        // Given
        const selectOptions = mount(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        )
            .find('[data-testid="select-field__select"]')
            .at(0)
            .prop('children')
        const receivedValues = getSelectOptionsValues(selectOptions)

        // Then
        expect(receivedValues).toHaveLength(dropdownItems.length)
        expect(receivedValues).toStrictEqual(dropdownItems)
    })

    it("should set <FormControl/>'s error prop to true when under a validation error", () => {
        // Given
        setMockedUseFieldReturn(validationError)
        const errorProp = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        ).prop('error')

        // Then
        expect(errorProp).toBe(true)
    })

    it(`should set <FormControl/>'s error prop to false when the select have been touched and it is
        not under a validation error`, () => {
        // Given
        setMockedUseFieldReturn(noValidationError.touched)
        const errorProp = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        ).prop('error')

        // Then
        expect(errorProp).toBe(false)
    })

    it(`should set <FormControl/>'s error prop to false when the select have not been touched and
        it is not under a validation error`, () => {
        // Given
        setMockedUseFieldReturn(noValidationError.untouched)
        const errorProp = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        ).prop('error')

        // Then
        expect(errorProp).toBe(false)
    })

    it('should render the error message as the helper text when under a validation error', () => {
        // Given
        setMockedUseFieldReturn(validationError)
        const helperText = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        )
            .find('[data-testid="select-field__helper-text"]')
            .text()

        // Then
        expect(helperText).toBe(validationError.error)
    })

    it('should render helperText prop as the helper text when it is not under a validation error', () => {
        // Given
        const expectedHelperText = 'Be creative!'
        setMockedUseFieldReturn(noValidationError.untouched)
        const receivedHelperText = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
                helperText={expectedHelperText}
            />
        )
            .find('[data-testid="select-field__helper-text"]')
            .text()

        // Then
        expect(receivedHelperText).toBe(expectedHelperText)
    })

    it(`should render the error message instead of helperText prop as the helper text when under a
        validation error`, () => {
        // Given
        setMockedUseFieldReturn(validationError)
        const receivedHelperText = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
                helperText={'Be creative!'}
            />
        )
            .find('[data-testid="select-field__helper-text"]')
            .text()

        // Then
        expect(receivedHelperText).toBe(validationError.error)
    })

    it(`should render an empty string as the helper text when there is no helperText prop and
        it is not under a validation error`, () => {
        // Given
        setMockedUseFieldReturn(noValidationError.untouched)
        const helperText = shallow(
            <SelectField
                name="selectField"
                label="Label"
                items={dropdownItems}
            />
        )
            .find('[data-testid="select-field__helper-text"]')
            .text()

        // Then
        expect(helperText).toBe('')
    })
})

const setMockedUseFieldReturn = (meta: any) =>
    (useField as jest.Mock).mockImplementation(() => [{ value: '' }, meta])

const getSelectOptionsValues = (options: any) =>
    options.map(({ props: { value, children } }: any) => {
        return {
            value: value,
            text: children
        }
    })

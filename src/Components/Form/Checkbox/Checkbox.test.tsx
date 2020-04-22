import React from 'react'
import { shallow, mount } from 'enzyme'
import { useField } from 'formik'
import { Checkbox as CheckboxMUI, FormControlLabel } from '@material-ui/core'
import { Checkbox } from './Checkbox'

jest.mock('formik', () => ({
    useField: jest.fn(() => [{ value: false }, {}])
}))

describe('Checkbox', () => {
    it('should render without crashing', () => {
        shallow(<Checkbox name={'checkbox'} label="Label" />)
    })

    it('should forward label prop to <FormControlLabel/>', () => {
        // Given
        const expectedLabel = 'Label'
        const receivedLabel = shallow(
            <Checkbox name={'checkbox'} label={expectedLabel} />
        )
            .find(FormControlLabel)
            .prop('label')

        // Then
        expect(receivedLabel).toBe(expectedLabel)
    })

    it('should render the checkbox', () => {
        // Given
        const hasCheckbox = mount(
            <Checkbox name={'checkbox'} label="Label" />
        ).exists(CheckboxMUI)

        // Then
        expect(hasCheckbox).toBeTruthy()
    })

    it('should forward the checked value to the checkbox', () => {
        // Given
        const expectedChecked = true
        setMockedUseFieldReturn({ value: expectedChecked })
        const receivedChecked = mount(
            <Checkbox name={'checkbox'} label="Label" />
        )
            .find(CheckboxMUI)
            .prop('checked')

        // Then
        expect(receivedChecked).toBe(expectedChecked)
    })
})

const setMockedUseFieldReturn = (field: any) =>
    (useField as jest.Mock).mockImplementation(() => [field, {}])

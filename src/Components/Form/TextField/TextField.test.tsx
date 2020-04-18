import React from 'react'
import { shallow } from 'enzyme'
import { useField } from 'formik'
import { TextField } from './TextField'

jest.mock('formik', () => ({
    useField: jest.fn(() => [{}, {}])
}))

describe('TextField', () => {
    it('should render without crashing', () => {
        shallow(<TextField />)
    })

    it(`should set <TextField/>'s error prop to true when useField()'s meta represents a validation
        error that should be shown`, () => {
        // Given
        const meta = { error: 'Required field', touched: true }
        setMockedUseFieldReturn({ meta })
        const receivedErrorProp = shallow(<TextField />).prop('error')

        // Then
        expect(receivedErrorProp).toBe(true)
    })

    it(`should set <TextField/>'s error prop to false when useField()'s meta does not represents a
        validation error that should be shown`, () => {
        // Given
        const meta = { error: 'Required field', touched: false }
        setMockedUseFieldReturn({ meta })
        const receivedErrorProp = shallow(<TextField />).prop('error')

        // Then
        expect(receivedErrorProp).toBe(false)
    })

    it(`should set <TextField/>'s helperText prop to useField()'s meta.error when it represents a
        validation error that should be shown`, () => {
        // Given
        const expectedHelperTextProp = 'Required field'
        const meta = { error: expectedHelperTextProp, touched: true }
        setMockedUseFieldReturn({ meta })
        const receivedHelperTextProp = shallow(<TextField />).prop('helperText')

        // Then
        expect(receivedHelperTextProp).toBe(expectedHelperTextProp)
    })

    it(`should override <TextField/>'s provided helperText prop with useField()'s meta.error when
        it represents a validation error that should be shown`, () => {
        // Given
        const expectedHelperTextProp = 'Required field'
        const meta = { error: expectedHelperTextProp, touched: true }
        setMockedUseFieldReturn({ meta })
        const receivedHelperTextProp = shallow(
            <TextField helperText="Be creative!" />
        ).prop('helperText')

        // Then
        expect(receivedHelperTextProp).toBe(expectedHelperTextProp)
    })

    it(`should not override <TextField/>'s provided helperText prop with useField()'s meta.error when
        it does not represents a validation error that should be shown`, () => {
        // Given
        const expectedHelperTextProp = 'Be creative!'
        const meta = { error: 'Required field', touched: false }
        setMockedUseFieldReturn({ meta })
        const receivedHelperTextProp = shallow(
            <TextField helperText={expectedHelperTextProp} />
        ).prop('helperText')

        // Then
        expect(receivedHelperTextProp).toBe(expectedHelperTextProp)
    })

    it(`should set <TextField/>'s helperText to a whitespace when no helperText prop is provided and
        useField()'s meta does not represents a validation error that should be shown`, () => {
        // Whitespace reasoning: https://github.com/mui-org/material-ui/issues/7747#issuecomment-418635534

        // Given
        const expectedHelperTextProp = ' '
        const meta = { error: 'Required field', touched: false }
        setMockedUseFieldReturn({ meta })
        const receivedHelperTextProp = shallow(<TextField />).prop('helperText')

        // Then
        expect(receivedHelperTextProp).toBe(expectedHelperTextProp)
    })
})

const setMockedUseFieldReturn = ({ field, meta }: any) =>
    (useField as jest.Mock).mockImplementation(() => [field, meta])

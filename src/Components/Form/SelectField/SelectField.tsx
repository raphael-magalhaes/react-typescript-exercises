import React from 'react'
import { useField } from 'formik'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from '@material-ui/core'
import { SelectFieldProps } from './SelectField.type'
import { useClasses } from './SelectField.style'

export const SelectField = ({
    name,
    label,
    items,
    helperText
}: SelectFieldProps) => {
    const [field, meta] = useField(name)
    const isOnError = Boolean(meta.touched && meta.error)
    const errorMessage = meta.touched && meta.error

    const styles = useClasses()

    return (
        <FormControl error={isOnError}>
            <InputLabel
                data-testid="select-field__label"
                id="select-field__label"
            >
                {label}
            </InputLabel>
            <Select
                data-testid="select-field__select"
                labelId="select-field__label"
                className={styles.select}
                {...field}
            >
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText data-testid="select-field__helper-text">
                {errorMessage || helperText}
            </FormHelperText>
        </FormControl>
    )
}

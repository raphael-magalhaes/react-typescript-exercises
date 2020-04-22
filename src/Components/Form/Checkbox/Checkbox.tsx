import React from 'react'
import {
    FormGroup,
    FormControlLabel,
    Checkbox as CheckboxMUI
} from '@material-ui/core'
import { useField } from 'formik'
import { CheckboxProps } from './Checkbox.type'
import { useClasses } from './Checkbox.style'

export const Checkbox = ({ name, label }: CheckboxProps) => {
    const [field] = useField(name)
    const { value, ...restOfField } = field

    const styles = useClasses()
    return (
        <FormGroup className={styles.container}>
            <FormControlLabel
                control={
                    <CheckboxMUI
                        color="primary"
                        checked={value}
                        {...restOfField}
                    />
                }
                label={label}
            />
        </FormGroup>
    )
}

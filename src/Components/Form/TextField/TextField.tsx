import React from 'react'
import { useField } from 'formik'
import { TextField as TextFieldMUI } from '@material-ui/core'

export const TextField = ({ helperText, ...props }: any) => {
    const [field, meta] = useField(props)
    const isOnError = Boolean(meta.touched && meta.error)
    const errorMessage = meta.touched && meta.error

    return (
        <TextFieldMUI
            error={isOnError}
            helperText={errorMessage || helperText || ' '}
            {...field}
            {...props}
        />
    )
}

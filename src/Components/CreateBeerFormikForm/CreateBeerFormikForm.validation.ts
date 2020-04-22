import { FormValues, FormErrors } from './CreateBeerFormikForm.type'

const required = 'Required field'

export const validate = (values: FormValues) => {
    const errors: FormErrors = {}

    if (!values.beerName) {
        errors.beerName = required
    }

    if (!values.beerType) {
        errors.beerType = required
    }

    if (!values.ingredients) {
        errors.ingredients = required
    }

    return errors
}

import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import { Checkbox, TextField, SelectField, Spacer } from '../'
import { Notification } from '../../Common/Notification'
import { useClasses } from './CreateBeerFormikForm.style'

const beerTypes = [
    { value: 'ale', text: 'Ale' },
    { value: 'lager', text: 'Lager' },
    { value: 'stout', text: 'Stout' }
]

const initialValues = {
    beerName: '',
    beerType: '',
    hasCorn: false,
    ingredients: ''
}

const onSubmit = (values: any) => Notification.alert(JSON.stringify(values))

export const CreateBeerFormikForm = () => {
    const styles = useClasses()

    return (
        <div className={styles.container}>
            <Spacer height={1.5} />
            <h3
                data-testid="create-beer-formik-form__title"
                className={styles.title}
            >
                Create Beer
            </h3>
            <Spacer height={1.5} />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={styles.form}>
                    <TextField
                        name={'beerName'}
                        data-testid="create-beer-formik-form__beer-name"
                        label="Beer Name"
                    />
                    <Spacer height={0.75} />
                    <SelectField
                        name="beerType"
                        label="Beer Type"
                        items={beerTypes}
                    />
                    <Spacer height={0.75} />
                    <Checkbox name="hasCorn" label="Has corn" />
                    <Spacer height={0.75} />
                    <TextField
                        name={'ingredients'}
                        data-testid="create-beer-formik-form__ingredients"
                        label="Ingredients"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Spacer />
                    <Button
                        data-testid="create-beer-formik-form__submit"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit!
                    </Button>
                </Form>
            </Formik>
            <Spacer />
        </div>
    )
}

export const testables = {
    onSubmit
}

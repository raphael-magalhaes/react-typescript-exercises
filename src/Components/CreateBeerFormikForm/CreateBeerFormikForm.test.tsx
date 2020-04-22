import React from 'react'
import { shallow, mount } from 'enzyme'
import { Formik, Form } from 'formik'
import { CreateBeerFormikForm, testables } from './CreateBeerFormikForm'
import { Notification } from '../../Common/Notification'
import { SelectField } from '../'

Notification.alert = jest.fn()

describe('CreateBeerFormikForm', () => {
    it('should render without crashing', () => {
        shallow(<CreateBeerFormikForm />)
    })

    it('should render the title with the correct value', () => {
        // Given
        const title = shallow(<CreateBeerFormikForm />)
            .find('[data-testid="create-beer-formik-form__title"]')
            .text()

        // Then
        expect(title).toBe('Create Beer')
    })

    it('should render <Formik/> with the correct initialValues prop', () => {
        // Given
        const initialFormValues = {
            beerName: '',
            beerType: '',
            hasCorn: false,
            ingredients: ''
        }
        const initialValues = mount(<CreateBeerFormikForm />)
            .find(Formik)
            .prop('initialValues')

        // Then
        expect(initialValues).toStrictEqual(initialFormValues)
    })

    it('should pass the correct onSubmit function to <Formik/>', () => {
        // Given
        const onSubmit = mount(<CreateBeerFormikForm />)
            .find(Formik)
            .prop('onSubmit')

        // Then
        expect(onSubmit).toBe(testables.onSubmit)
    })

    it('should call Notification.alert function when onSubmit is called', () => {
        // When
        testables.onSubmit({})

        // Then
        expect(Notification.alert).toHaveBeenCalled()
    })

    it('should render the <Form/>', () => {
        // Given
        const hasForm = mount(<CreateBeerFormikForm />).exists(Form)

        // Then
        expect(hasForm).toBeTruthy()
    })

    it('should render beer name input with the correct label prop', () => {
        // Given
        const label = shallow(<CreateBeerFormikForm />)
            .find('[data-testid="create-beer-formik-form__beer-name"]')
            .prop('label')

        // Then
        expect(label).toBe('Beer Name')
    })

    it('should render beer type input with the correct label prop', () => {
        // Given
        const label = mount(<CreateBeerFormikForm />)
            .find(SelectField)
            .prop('label')

        // Then
        expect(label).toBe('Beer Type')
    })

    it('should render beer type input with the correct items prop', () => {
        // Given
        const beerTypes = [
            { value: 'ale', text: 'Ale' },
            { value: 'lager', text: 'Lager' },
            { value: 'stout', text: 'Stout' }
        ]
        const items = mount(<CreateBeerFormikForm />)
            .find(SelectField)
            .prop('items')

        // Then
        expect(items).toStrictEqual(beerTypes)
    })

    it('should render ingredients input with the correct label prop', () => {
        // Given
        const label = shallow(<CreateBeerFormikForm />)
            .find('[data-testid="create-beer-formik-form__ingredients"]')
            .prop('label')

        // Then
        expect(label).toBe('Ingredients')
    })

    it('should render ingredients input with the multiline prop equals true', () => {
        // Given
        const multiline = shallow(<CreateBeerFormikForm />)
            .find('[data-testid="create-beer-formik-form__ingredients"]')
            .prop('multiline')

        // Then
        expect(multiline).toBe(true)
    })

    it('should render the submit button with the correct text', () => {
        // Given
        const text = shallow(<CreateBeerFormikForm />)
            .find('[data-testid="create-beer-formik-form__submit"]')
            .text()

        // Then
        expect(text).toBe('Submit!')
    })
})

import React from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select as SelectMUI,
    TextField
} from '@material-ui/core'
import { useClasses } from './CreateBeerForm.style'
import { Spacer } from '../'

export const CreateBeerForm = () => {
    const styles = useClasses()

    return (
        <div className={styles.container}>
            <Spacer height={1.5} />
            <h3 data-testid="create-beer-form__title" className={styles.title}>
                Create Beer
            </h3>
            <Spacer height={1.5} />
            <form className={styles.form} noValidate autoComplete="off">
                <TextField
                    data-testid="create-beer-form__beer-name-input"
                    label="Beer Name"
                />
                <Spacer height={1.5} />
                <Select className={styles.select} />
                <Spacer height={1.5} />
                <LabeledCheckbox className={styles.checkboxContainer} />
                <Spacer />
                <TextField
                    data-testid="create-beer-form__ingredients-text-area"
                    label="Ingredients"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </form>
            <Spacer />
        </div>
    )
}

const Select = ({ className }: { className: string }) => {
    const beerTypes = [
        { id: 'ale', name: 'Ale' },
        { id: 'lager', name: 'Lager' },
        { id: 'stout', name: 'Stout' }
    ]

    return (
        <FormControl>
            <InputLabel
                data-testid="create-beer-form__beer-type-label"
                id="beer-type-select-label"
            >
                Beer Type
            </InputLabel>
            <SelectMUI
                data-testid="create-beer-form__beer-type-select"
                className={className}
                labelId="beer-type-select-label"
                value=""
            >
                {beerTypes.map((entry) => (
                    <MenuItem key={entry.id} value={entry.id}>
                        {entry.name}
                    </MenuItem>
                ))}
            </SelectMUI>
        </FormControl>
    )
}

const LabeledCheckbox = ({ className }: { className: string }) => {
    return (
        <FormGroup className={className}>
            <FormControlLabel
                data-testid="create-beer-form__has-corn-checkbox-label"
                control={
                    <Checkbox
                        data-testid="create-beer-form__has-corn-checkbox"
                        color="primary"
                    />
                }
                label="Has corn"
            />
        </FormGroup>
    )
}

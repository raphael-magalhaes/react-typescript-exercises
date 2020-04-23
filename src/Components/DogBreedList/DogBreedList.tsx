import React, { Fragment } from 'react'
import { Divider } from '@material-ui/core'
import { DogBreed } from './DogBreed/DogBreed'
import { DogBreedListProps, Breed } from './DogBreedList.type'
import { useClasses } from './DogBreedList.style'

export const DogBreedList = ({ breeds }: DogBreedListProps) => {
    const styles = useClasses()

    return <div className={styles.container}>{createBreedList(breeds)}</div>
}

const createBreedList = (breeds: Breed[]) =>
    breeds.map((breed) => (
        <Fragment key={breed}>
            <DogBreed name={breed} />
            <Divider />
        </Fragment>
    ))

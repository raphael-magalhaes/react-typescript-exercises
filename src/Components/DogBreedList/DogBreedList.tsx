import React, { Fragment } from 'react'
import { Divider } from '@material-ui/core'
import { DogBreed } from './DogBreed/DogBreed'
import { DogBreedListProps, Breed } from './DogBreedList.type'

export const DogBreedList = ({ breeds }: DogBreedListProps) => {
    return <div>{createBreedList(breeds)}</div>
}

const createBreedList = (breeds: Breed[]) =>
    breeds.map((breed) => (
        <Fragment key={breed}>
            <DogBreed name={breed} />
            <Divider />
        </Fragment>
    ))

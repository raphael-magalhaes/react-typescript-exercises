import React from 'react'
import { Spacer } from '../../Spacer'
import { DogBreedProps } from './DogBreed.type'
import { useClasses } from './DogBreed.style'

export const DogBreed = ({ name }: DogBreedProps) => {
    const styles = useClasses()

    return (
        <div className={styles.container}>
            <Spacer />
            <h4 className={styles.name}>{name}</h4>
            <Spacer />
        </div>
    )
}

import React from 'react'
import { DogDetailsProps } from './DogDetails.type'
import { useClasses } from './DogDetails.style'

export const DogDetails = ({
    testId,
    title,
    imageURL,
    onBark
}: DogDetailsProps) => {
    const styles = useClasses()

    return (
        <div className={styles.container} data-testid={testId}>
            <h3 className={styles.title} data-testid="dog-details__title">
                {title}
            </h3>
            <img
                className={styles.image}
                data-testid="dog-details__image"
                src={imageURL}
            />
            <button
                className={styles.button}
                data-testid="dog-details__bark-button"
                onClick={onBark}
            >
                Bark!
            </button>
        </div>
    )
}

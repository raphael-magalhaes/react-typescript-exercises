import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { DogDetailsProps } from './DogDetails.type'
import { useClasses } from './DogDetails.style'
import { Spacer } from '../'

export const DogDetails = ({
    testId,
    title,
    imageURL,
    onBark
}: DogDetailsProps) => {
    const [scoldCount, setScoldCount] = useState(0)
    const updateScoldCount = () => setScoldCount(scoldCount + 1)

    const styles = useClasses()

    return (
        <div className={styles.container} data-testid={testId}>
            <Spacer height={0.5} />
            <h3 className={styles.title} data-testid="dog-details__title">
                {title}
            </h3>
            <Spacer height={0.5} />
            <img
                className={styles.image}
                data-testid="dog-details__image"
                alt="dog"
                src={imageURL}
            />
            <Spacer height={0.5} />
            <div className={styles.actionButtonsContainer}>
                <Button
                    data-testid="dog-details__bark-button"
                    variant="contained"
                    color="primary"
                    onClick={onBark}
                >
                    Bark!
                </Button>
                <Button
                    className={styles.scoldButton}
                    data-testid="dog-details__scold-button"
                    variant="contained"
                    color="secondary"
                    onClick={updateScoldCount}
                >
                    {`${scoldCount}x Scold!`}
                </Button>
            </div>
            <Spacer />
        </div>
    )
}

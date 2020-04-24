import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { DogBreed } from './DogBreed/DogBreed'
import { DogBreedListProps } from './DogBreedList.type'
import { useClasses } from './DogBreedList.style'

export const DogBreedList = ({ breeds }: DogBreedListProps) => {
    const styles = useClasses()

    return (
        <div className={styles.container}>
            <FixedSizeList
                itemData={breeds}
                height={400}
                width={304}
                itemSize={46}
                itemCount={breeds.length}
            >
                {renderRow}
            </FixedSizeList>
        </div>
    )
}

const renderRow = ({ data, style, index }: ListChildComponentProps) => {
    return <DogBreed name={data[index]} style={style} index={index} />
}

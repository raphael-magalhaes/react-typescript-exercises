import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { DogBreedProps } from './DogBreed.type'

export const DogBreed = ({ name, style, index }: DogBreedProps) => {
    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={name} />
        </ListItem>
    )
}

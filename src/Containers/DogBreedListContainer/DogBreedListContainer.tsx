import React, { useEffect, useState } from 'react'
import { DogBreedList } from '../../Components'
import { DogController } from '../../controllers'

export const DogBreedListContainer = () => {
    const [breeds, setBreeds]: [any, any] = useState([])

    useEffect(() => {
        DogController.getAllBreeds().then((allBreeds) => setBreeds(allBreeds))
    })

    return <DogBreedList breeds={breeds} />
}

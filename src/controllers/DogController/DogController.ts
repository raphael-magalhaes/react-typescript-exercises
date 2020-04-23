import { DogRepository } from '../../repositories'
import { GetAllBreedsResult } from './DogController.type'
import { GetAllBreedsResponse } from '../../repositories/DogRepository/DogRepository.type'

const getAllBreeds = async (): Promise<GetAllBreedsResult> => {
    const allBreeds: GetAllBreedsResponse = await DogRepository.getAllBreeds()
    return allBreedsAdapter(allBreeds)
}

const allBreedsAdapter = (allBreeds: GetAllBreedsResponse) =>
    Object.keys(allBreeds).map((breed: string) => firstLetterToUpperCase(breed))

const firstLetterToUpperCase = (text: string) =>
    text.charAt(0).toUpperCase() + text.substring(1)

export const DogController = {
    getAllBreeds
}

export const testables = {
    allBreedsAdapter,
    firstLetterToUpperCase
}

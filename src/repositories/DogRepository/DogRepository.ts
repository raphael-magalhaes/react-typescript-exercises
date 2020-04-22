import { HTTP } from '../../infrastructure'

const URL = {
    base: 'https://dog.ceo/api/',
    allBreeds: 'breeds/list/all'
}

const getAllBreeds = async () => await HTTP.get(`${URL.base}${URL.allBreeds}`)

export const DogRepository = {
    getAllBreeds
}

import { HTTP } from '../../infrastructure'
import { Notification } from '../../Common/Notification'
import { GetAllBreedsResponse } from './DogRepository.type'

const URL = {
    base: 'https://dog.ceo/api/',
    allBreeds: 'breeds/list/all'
}

const getAllBreeds = async (): Promise<GetAllBreedsResponse> =>
    await HTTP.get(`${URL.base}${URL.allBreeds}`)
        .then((response) => response?.data?.message)
        .catch((error) =>
            Notification.alert(
                `The following error occured when trying to get all dog breeds: ${JSON.stringify(
                    error
                )}`
            )
        )

export const DogRepository = {
    getAllBreeds
}

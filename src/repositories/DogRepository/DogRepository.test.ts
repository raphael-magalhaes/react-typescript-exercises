import { DogRepository } from './DogRepository'
import { HTTP } from '../../infrastructure'
import { Notification } from '../../Common/Notification'

jest.mock('../../infrastructure')
Notification.alert = jest.fn()

const URL = {
    base: 'https://dog.ceo/api/',
    allBreeds: 'breeds/list/all'
}

describe('DogRepository', () => {
    it('should call the correct url when fetching all breeds', () => {
        // Given
        const expected = `${URL.base}${URL.allBreeds}`

        // When
        DogRepository.getAllBreeds()

        // Then
        expect(HTTP.get).toHaveBeenLastCalledWith(expected)
    })

    it('should return the result of fetching all breeds without changing it', async () => {
        // Given
        const expected = {
            message: {
                dalmatian: [],
                wolfhound: ['irish']
            },
            status: 'success'
        }
        ;(HTTP.get as jest.Mock).mockResolvedValue(expected)

        // When
        const received = await DogRepository.getAllBreeds()

        // Then
        expect(received).toBe(expected)
    })

    it('should call Notification.alert with an error message containing the stringified error object', async () => {
        // Given
        const error = {
            message: 'Network Error',
            name: 'Error'
        }
        ;(HTTP.get as jest.Mock).mockRejectedValue(error)

        // When
        await DogRepository.getAllBreeds()

        // Then
        expect(Notification.alert).toHaveBeenCalledWith(
            `The following error occured when trying to get all dog breeds: ${JSON.stringify(
                error
            )}`
        )
    })
})

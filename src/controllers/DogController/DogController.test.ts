import { DogController, testables } from './DogController'
import { DogRepository } from '../../repositories'
import { GetAllBreedsResult } from './DogController.type'
import { GetAllBreedsResponse } from '../../repositories/DogRepository/DogRepository.type'

jest.mock('../../repositories', () => ({
    DogRepository: {
        getAllBreeds: jest.fn()
    }
}))

const mockedRepositoryReturn: GetAllBreedsResponse = {
    dalmatian: [],
    wolfhound: ['irish']
}

const expectedOutput: GetAllBreedsResult = ['Dalmatian', 'Wolfhound']

describe('DogController', () => {
    describe('getAllBreeds', () => {
        it('should output values accordingly to DogRepository.getAllBreeds function return', async () => {
            // Given
            ;(DogRepository.getAllBreeds as jest.Mock).mockResolvedValue(
                mockedRepositoryReturn
            )

            // When
            const received = await DogController.getAllBreeds()

            // Then
            expect(received).toStrictEqual(expectedOutput)
        })
    })

    describe('allBreedsAdapter', () => {
        it('should return the received data correctly transformed', () => {
            // When
            const received = testables.allBreedsAdapter(mockedRepositoryReturn)

            // Then
            expect(received).toStrictEqual(expectedOutput)
        })
    })

    describe('firstLetterToUpperCase', () => {
        it('should change the first letter of a string to upper case', () => {
            // When
            const received = testables.firstLetterToUpperCase('lowercase')

            // Then
            expect(received).toStrictEqual('Lowercase')
        })
    })
})

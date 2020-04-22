import { HTTP } from './HTTP'
import axios from 'axios'

jest.mock('axios')

describe('HTTP', () => {
    it('get function should forward url without changing it', () => {
        // Given
        const url = 'https://example.com/'

        // When
        HTTP.get(url)

        // Then
        expect(axios.get).toHaveBeenCalledWith(url)
    })

    it('get function should return the result without changing it', async () => {
        // Given
        const expected = { data: { foo: 'bar' } }
        const url = 'https://example.com/'
        ;(axios.get as jest.Mock).mockResolvedValue(expected)

        // When
        const received = await HTTP.get(url)

        // Then
        expect(received).toBe(expected)
    })
})

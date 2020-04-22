import axios from 'axios'

export const HTTP = {
    get: async (url: string) => axios.get(url)
}

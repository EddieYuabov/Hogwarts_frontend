import Axios from 'axios'

export const BASE_URL = 'https://hogwarts-pern-backend.herokuapp.com/api'

const Client = Axios.create({ baseURL: BASE_URL })

export default Client

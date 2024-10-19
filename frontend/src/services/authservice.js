import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_API_URL

export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/api/register/`, data)
        return response.data
    } catch(error) {
        console.log(`Error occured ${error}`)
        throw error
    }
}

export const loginUser  = async (data) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/api/token/`, data)
        return response.data

    } catch(error) {
        console.log(`Error occured ${error}`)
        throw error
    }
}

export const userInfo = async (token) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/api/user/`, 
            {
                headers: {Authorization: `Bearer ${token}`},
            }
        )
        return response.data
    } catch(error) {
        console.log(`Error occured ${error}`)
        throw error
    }
}

export const refreshToken = async (refresh) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/api/token/refresh/`, {refresh: refresh})
        return response.data
    } catch(error) {
        console.log(`Error occured ${error}`)
        throw error
    }
}
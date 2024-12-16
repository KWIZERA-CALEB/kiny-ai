import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_API_URL

interface handleMessageData {
    message: string;
}

export const handleChatMessage = async (data: handleMessageData) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/api/handle-message/`, data)
        return response.data
    } catch(error) {
        console.log(`Error occured while sending message ${error}`)
        throw error
    }
}
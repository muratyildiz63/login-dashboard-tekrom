import axios from 'axios'

export default async(endpoint, method, body) => {
    const config = {
        url: process.env.baseUrl + endpoint,
        method,
        data: body
    }
    return await axios.request(config).then(response => response.data)
}
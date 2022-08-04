import axios from 'axios'

export default {
    async ApiRequest(endpoint, method, body) {
        let config = {
            url: process.env.baseUrl + endpoint,
            method: method,
            data: body
        }

        return await axios.request(config)
    }
}
import axios from 'axios'

export default {
    async ApiRequest(endpoint, method, body) {
        let config = {
            url: 'localhos' + endpoint,
            method: method,
            data: body,
            headers: {
                Authorization: localStorage('token')
            }
        }

        return await axios.request(config)
    }
}
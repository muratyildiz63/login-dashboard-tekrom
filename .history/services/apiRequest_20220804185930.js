import axios from 'axios'

export default {
    async ApiRequest(method, body) {
        let config = {
            url: 'localhos',
            method: method,
            data: body,
            headers: {
                Authorization: localStorage('token')
            }
        }

        return await axios.request(config).then(response => response.data)
    }
}
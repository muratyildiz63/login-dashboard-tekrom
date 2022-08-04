import axios from 'axios'

function sessionControl() {
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.lenght < 1) {
                return false
            }
        })

}
export default sessionControl
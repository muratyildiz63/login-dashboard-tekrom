import axios from 'axios'

function sessionControl() {
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.lenght < 1) {
                return false
            } else {
                return true
            }
        })
    return userID
}
export default sessionControl
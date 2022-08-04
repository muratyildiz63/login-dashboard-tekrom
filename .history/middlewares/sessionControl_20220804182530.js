import axios from 'axios'

function sessionControl() {
    let control = null
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.lenght < 1) {
                control = false
            } else {
                control = true
            }
        })
    return control
}
export default sessionControl
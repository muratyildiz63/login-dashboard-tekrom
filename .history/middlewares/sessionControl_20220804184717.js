import axios from 'axios'

function sessionControl() {

    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.length < 1) {
                window.location.href = "/loginPage"
            }
        })

}

function session2Index() {
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.length > 0) {
                window.location.href = "/"
            }
        })

}
export default { sessionControl, session2Index }
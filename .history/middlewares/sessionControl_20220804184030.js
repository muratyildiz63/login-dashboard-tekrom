import axios from 'axios'

function sessionControl() {
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.length < 1) {
                console.log("selam")
                window.location.href = "/loginPage"
            }
        })
}

function sessionControl2() {
    const userID = localStorage.getItem('userID')
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {
            if (resUser.data.length < 1) {
                console.log("selam")
                window.location.href = "/loginPage"
            }
        })
}
export default { sessionControl, sessionControl2 }
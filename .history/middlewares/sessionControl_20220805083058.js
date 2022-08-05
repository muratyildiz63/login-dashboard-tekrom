import apiRequest from '../services/apiRequest'

function sessionControl() {
    console.log("sessionControl")
    const userID = localStorage.getItem('userID')
    apiRequest(`/user?id=${userID}`, 'GET').then(resUser => {
        if (resUser.length < 1) {
            window.location.href = "/loginPage"
        }
    })

}

function session2Index() {
    console.log("session2Index")
    const userID = localStorage.getItem('userID')
    apiRequest(`/user?id=${userID}`, 'GET').then(resUser => {
        if (resUser.length > 0) {
            window.location.href = "/"
        }
    })

}
export default {
    sessionControl,
    session2Index
}
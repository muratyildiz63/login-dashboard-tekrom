import apiRequest from '../services/apiRequest'

function sessionControl() {
    const userID = localStorage.getItem('userID')
    apiRequest(`/user?id=${userID}`, 'GET').then(resUser => {
        if (resUser.data.length < 1) {
            window.location.href = "/loginPage"
        }
    })

}

function session2Index() {
    const userID = localStorage.getItem('userID')
    apiRequest(`/user?id=${userID}`, 'GET').then(resUser => {
        if (resUser.data.length > 0) {
            window.location.href = "/"
        }
    })

}
export default {
    sessionControl,
    session2Index
}
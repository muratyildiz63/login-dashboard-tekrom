import axios from 'axios'

function sessionControl() {
    const userID = localStorage.getItem('userID')
    let UserData = []
    axios
        .get(`http://localhost:3000/user?id=${userID}`)
        .then((resUser) => {

            UserData = resUser.data[0]



        })
    return UserData
}


export default sessionControl
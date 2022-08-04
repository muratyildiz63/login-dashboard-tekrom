 function sessionControl() {
     const userID = localStorage.getItem('userID')

     axios
         .get(`http://localhost:3000/user?id=${userID}`)
         .then((resUser) => {
             if (resUser.data.length > 0) {
                 this.name = resUser.data[0].name
                 this.surname = resUser.data[0].surname
                 this.userName = resUser.data[0].username
                 this.inlogin = true
             } else {
                 this.$router.push({ name: 'loginPage' })
             }
         })
     return resUser.data[0]
 }


 export default sessionControl
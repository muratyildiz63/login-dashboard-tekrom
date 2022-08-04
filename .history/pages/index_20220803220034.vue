<template>
<div>
   
  <Abc/>
</div>

</template>
<script>
import axios from 'axios'
export default {
layout: 'dashboardLayout',
  name: 'IndexPage',
  data() {
    return {
      userID:null,
      userName:null,
      name:null,
      surname:null,
      }
  },

  mounted() {
       this.userID=localStorage.getItem("userID");

       axios.get(`http://localhost:3000/user?id=${this.userID}`).then((resUser)=>{
          if(resUser.data.length>0){
             console.log(resUser.data[0].name)
          }
          else{
             this.$router.push({ name: 'index' })
          }
       })
  },
}
</script>

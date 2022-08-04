<template>
<div>

  
</div>

</template>
<script>
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

       axsios.get(`http://localhost:3000/user?id=${this.userID}`).then((resUser)=>{
          if(resUser.data.length>0){
          
            console.log(  this.name=resUser.data[0].name)
          }
       })
  },
}
</script>

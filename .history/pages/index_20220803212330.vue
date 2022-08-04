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
      userID:null
    }
  },

  mounted() {
       this.userID=localStorage.getItem("userID");
       axsios.get(`http://localhost:3000/user?id=${this.userID}`)
  },
}
</script>

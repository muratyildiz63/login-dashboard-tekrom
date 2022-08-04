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
       console.log(this.userID)
  },
}
</script>

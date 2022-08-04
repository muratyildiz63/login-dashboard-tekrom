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

  created() {
       this.userID=localStorage.getItem("userID");
  },
}
</script>

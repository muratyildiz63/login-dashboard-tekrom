<template>
  <div><ReferenceCustumer /></div>
</template>
<script>
import ReferenceCustumer from '../components/referenceCustumer.vue'
import apiRequest from '../services/apiRequest'
export default {
  layout: 'dashboardLayout',
  name: 'referencePage',
  components: { ReferenceCustumer },
}
</script>

<script>
export default {
    data() {
        return {
            referenceData:[]
        }
    },
    mounted() {
        apiRequest("/reference","GET").then(res=>{
            this.referenceData=res
        })
    },
}

</script>

<template>
  <div><ReferenceCustumer /></div>
</template>
<script>


export default {

}
</script>

<script>
import apiRequest from '../services/apiRequest'
import ReferenceCustumer from '../components/referenceCustumer.vue'
export default {
      layout: 'dashboardLayout',
  name: 'referencePage',
  components: { ReferenceCustumer },
    data() {
        return {
            referenceData:[]
        }
    },
    mounted() {
        apiRequest("/reference",'GET').then(res=>{
            this.referenceData=res
        })
    },
}

</script>

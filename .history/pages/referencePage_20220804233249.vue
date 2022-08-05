<template>
  <div id="ReferenceCustumer" class="flex flex-wrap items-center "><ReferenceCustumer v-for="reference in referenceData" :key="reference"  :referenceItem="reference" /></div>
</template>


<script>
import apiRequest from '../services/apiRequest'
import ReferenceCustumer from '../components/referenceCustumer.vue'
export default {
  layout: 'dashboardLayout',
  name: 'referencePage',
  components: { ReferenceCustumer },
  data() {
    return {
      referenceData: [],
    }
  },
  mounted() {
    apiRequest('/reference', 'GET').then((res) => {
      this.referenceData = res
    })
  },
}
</script>

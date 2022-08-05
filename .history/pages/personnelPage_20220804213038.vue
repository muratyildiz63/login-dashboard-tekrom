<template>
  <div class="p-1 py-2">
    <PersonnelInfo  v-for="(personnel, index) in personnelData" :key="index"/>
  </div>
</template>
<script>
import PersonnelInfo from '../components/personnelInfo.vue'
import apiRequest from '../services/apiRequest'
export default {
  layout: 'dashboardLayout',
  name: 'personnelPage',
  components: { PersonnelInfo },

  data() {
    return {
      personnelData: [],
    }
  },

  mounted() {
    apiRequest('/personnel', 'GET').then((rest) => {
      this.personnelData = rest
    })
  },
}
</script>

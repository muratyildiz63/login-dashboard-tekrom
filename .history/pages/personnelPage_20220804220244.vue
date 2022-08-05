<template>
  <div class="p-1 py-2 flex flex-wrap grid  gap-4 grid-cols-1 sm:grip-cols-2 md:grid-cols-3 lg:grid-cols-4" id="personnelComponents">
    <PersonnelInfo  v-for="(personnel, index) in personnelData" :key="index" :personnelItem="personnel" />
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

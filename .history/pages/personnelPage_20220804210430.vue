<template>
  <div>
    <PersonnelInfo />
  </div>
</template>
<script>
import PersonnelInfo from '../components/personnelInfo.vue'
export default {
  layout: 'dashboardLayout',
  name: 'personnelPage',
  components: { PersonnelInfo },
}
</script>

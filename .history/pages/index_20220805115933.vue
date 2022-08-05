<template>
  <div class=" p-1">
    <ChartVisit />
    <ChartVisit />
    <ChartVisit />
    <ChartVisit />
    <ChartVisit />
    <ChartVisit />
    <ChartVisit />
  </div>
</template>
<script>
import ChartVisit from '../components/ChartVisit.vue'
export default {
  components: { ChartVisit },
  layout: 'dashboardLayout',
  name: 'IndexPage',
}
</script>

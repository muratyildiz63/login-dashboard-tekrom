<template>
  <div class="p-1">
    <div class="flex justify-end">
      <div class="w-1/3 p-2">
        <ChartVisit />
      </div>
    </div>
  
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

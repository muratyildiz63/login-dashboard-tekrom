<template>
  <div class=" p-1">
    <ChartVisit />
 <div class="grid grid-cols-3 gap-4 flex items-center">
  <div class="mb-4">
    <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" class="max-w-full h-auto rounded-lg" alt="">
  </div>

  <div class="mb-4">
    <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" class="max-w-full h-auto rounded-full" alt="">
  </div>
  <div class="mb-4">
    <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg" class="max-w-full h-auto rounded-full" alt="">
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

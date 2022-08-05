<template>
  <div class=" p-1 w-full">
    <CommentsList />
  </div>
</template>
<script>

import CommentsList from '../components/commentsList.vue'
export default {
  components: { CommentsList },
  layout: 'dashboardLayout',
  name: 'commentPage',
}
</script>

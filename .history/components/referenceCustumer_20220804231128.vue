<template>
  <div>
    <a class="flex flex-col justify-center items-center" :href="referenceItem.URL">
      <img
        :src="referenceItem.imgURL"
        class="rounded-full w-32 shadow-lg"
        alt="Avatar"
      />

      <span>{{referenceItem.referenceName}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['referenceItem'],
}
</script>
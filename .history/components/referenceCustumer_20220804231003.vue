<template>
  <div>
    <a class="flex flex-col" :href="referenceItem.URL">
      <img
        :src="referenceItem.imgURL"
        class="rounded-full w-32 shadow-lg"
        alt="Avatar"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ['referenceItem'],
}
</script>
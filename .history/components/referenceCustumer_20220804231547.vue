<template>
  <div class="p-3">
    <a
      class="flex flex-col justify-center items-center"
      :href="referenceItem.URL"
    >
      <div>
        <img
          :src="referenceItem.imgURL"
          class="rounded-full w-32 shadow-lg"
          alt="Avatar"
        />
      </div>

      <span>{{ referenceItem.referenceName }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['referenceItem'],
}
</script>
<template>
<div>
    <h1 v-if="this.$route.query.test">About</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae magni numquam nulla ullam sed natus libero quam cum earum laborum sit neque similique possimus magnam, inventore, eos cupiditate repellat? Voluptatibus.</p>
</div>
</template>

<script>
export default {
layout: 'dashboardLayout',
}
</script>